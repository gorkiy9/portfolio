import React, { useCallback, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface MobileCarouselProps {
  images: string[];
}

export function MobileCarousel({ images }: MobileCarouselProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Main Carousel setup
  const [mainEmblaRef, mainEmblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: false,
    dragFree: true
  });

  // Lightbox Carousel setup
  const [lightboxEmblaRef, lightboxEmblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: false,
  });

  const scrollPrev = useCallback(() => {
    if (mainEmblaApi) mainEmblaApi.scrollPrev();
  }, [mainEmblaApi]);

  const scrollNext = useCallback(() => {
    if (mainEmblaApi) mainEmblaApi.scrollNext();
  }, [mainEmblaApi]);

  // Lightbox navigation
  const lightboxScrollPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxEmblaApi) lightboxEmblaApi.scrollPrev();
  }, [lightboxEmblaApi]);

  const lightboxScrollNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxEmblaApi) lightboxEmblaApi.scrollNext();
  }, [lightboxEmblaApi]);

  // Sync lightbox opening with specific slide
  useEffect(() => {
    if (lightboxIndex !== null && lightboxEmblaApi) {
      if (lightboxEmblaApi.selectedScrollSnap() !== lightboxIndex) {
        lightboxEmblaApi.scrollTo(lightboxIndex, true);
      }
    }
  }, [lightboxIndex, lightboxEmblaApi]);

  // Update state when lightbox changes slide
  useEffect(() => {
    if (!lightboxEmblaApi) return;

    const onSelect = () => {
      setLightboxIndex(lightboxEmblaApi.selectedScrollSnap());
      setIsZoomed(false);
    };

    lightboxEmblaApi.on('select', onSelect);
    return () => {
      lightboxEmblaApi.off('select', onSelect);
    };
  }, [lightboxEmblaApi]);

  // Disable/Enable Embla drag based on zoom state
  useEffect(() => {
    if (lightboxEmblaApi) {
      lightboxEmblaApi.reInit({ watchDrag: !isZoomed });
    }
  }, [isZoomed, lightboxEmblaApi]);

  // Keyboard support for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (!isZoomed) {
        if (e.key === 'ArrowRight') lightboxEmblaApi?.scrollNext();
        if (e.key === 'ArrowLeft') lightboxEmblaApi?.scrollPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, lightboxEmblaApi, isZoomed]);

  return (
    <>
      <div className="relative group w-full max-w-[375px] mx-auto">
        {/* Navigation Arrows (visible on hover/desktop) */}
        <button
          onClick={scrollPrev}
          className="cursor-pointer hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-gray-100 rounded-full items-center justify-center hover:bg-gray-200 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>

        <button
          onClick={scrollNext}
          className="cursor-pointer hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-gray-100 rounded-full items-center justify-center hover:bg-gray-200 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>

        {/* Embla Viewport */}
        <div className="overflow-hidden" ref={mainEmblaRef}>
          {/* Embla Container */}
          <div className="flex touch-pan-y"> 
            {images.map((src, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 flex justify-center">
                <div 
                  className="relative w-full aspect-[375/812] rounded-[32px] overflow-hidden group/image cursor-pointer shadow-sm border border-gray-100"
                  onClick={() => setLightboxIndex(index)}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors cursor-pointer z-[110]"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          {/* Lightbox Carousel Viewport */}
          <div 
            className="w-full h-full overflow-hidden" 
            ref={lightboxEmblaRef}
          >
            <div className="flex h-full touch-pan-y">
              {images.map((src, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 relative flex items-center justify-center p-4 md:p-8"
                >
                  <TransformWrapper
                    initialScale={1}
                    minScale={1}
                    maxScale={4}
                    doubleClick={{ disabled: true }}
                    panning={{ disabled: !isZoomed }}
                    pinch={{ step: 5 }}
                    onTransformed={(ref) => {
                      if (ref.state.scale > 1.01 && !isZoomed) {
                        setIsZoomed(true);
                      } else if (ref.state.scale <= 1.01 && isZoomed) {
                        setIsZoomed(false);
                      }
                    }}
                  >
                    <TransformComponent
                      wrapperStyle={{ width: '100%', height: '100%' }}
                      contentStyle={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <img 
                        src={src} 
                        alt={`Expanded slide ${index + 1}`}
                        className="max-w-full max-h-full object-contain select-none"
                        onClick={(e) => e.stopPropagation()} 
                      />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-[110] text-white/70">
            {!isZoomed && (
              <button
                className="hover:text-white transition-colors cursor-pointer hidden md:block p-2"
                onClick={lightboxScrollPrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
            )}
            
            <span className="text-sm font-medium tracking-wide min-w-[3ch] text-center select-none">
              {lightboxIndex + 1} / {images.length}
            </span>

            {!isZoomed && (
              <button
                className="hover:text-white transition-colors cursor-pointer hidden md:block p-2"
                onClick={lightboxScrollNext}
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}