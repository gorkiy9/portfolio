import imgImageSlide1 from "figma:asset/4f71288ee7a7a9f4845aa01b52c62b542f9ee15d.png";
import imgImageSlide2 from "figma:asset/3b42c78fc6a766bb3996a432fc9b0b0ac2afef7d.png";
import imgImageSlide3 from "figma:asset/5ca7b7e978acd2352b1e0465743f506553a9a8ae.png";
import imgImageSlide4 from "figma:asset/3d063a52a5f6a26296e3dc235ab14e94fb75f8d2.png";
import imgImageSlide5 from "figma:asset/5f3ed4c04fdadfa1fe5a59776a33e4a5526b3da8.png";

function ImageSlide() {
  return (
    <div className="h-[604.289px] relative shrink-0 w-full" data-name="Image (Slide 1)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSlide1} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[606.289px] left-0 rounded-[24px] top-0 w-[280px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageSlide />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function ImageSlide1() {
  return (
    <div className="h-[604.289px] relative shrink-0 w-full" data-name="Image (Slide 2)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSlide2} />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[606.289px] left-[304px] rounded-[24px] top-0 w-[280px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageSlide1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function ImageSlide2() {
  return (
    <div className="h-[604.289px] relative shrink-0 w-full" data-name="Image (Slide 3)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSlide3} />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[606.289px] left-[608px] rounded-[24px] top-0 w-[280px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageSlide2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function ImageSlide3() {
  return (
    <div className="h-[604.289px] relative shrink-0 w-full" data-name="Image (Slide 4)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSlide4} />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[606.289px] left-[912px] rounded-[24px] top-0 w-[280px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageSlide3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function ImageSlide4() {
  return (
    <div className="h-[604.289px] relative shrink-0 w-full" data-name="Image (Slide 5)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSlide5} />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[606.289px] left-[1216px] rounded-[24px] top-0 w-[280px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageSlide4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[606px] left-[64px] top-0 w-[1259px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

export default function AppShowcaseCarousel() {
  return (
    <div className="relative size-full" data-name="AppShowcaseCarousel">
      <Container />
    </div>
  );
}