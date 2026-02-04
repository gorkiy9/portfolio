import { AppShowcaseCarousel } from './AppShowcaseCarousel';
import React from 'react';

export function CaseStudy3() {
  // App 1: The Heraldry Maker House
  const app1Images = [
    "/src/images/aezakmi/app1/1.png",
    "/src/images/aezakmi/app1/2.png",
    "/src/images/aezakmi/app1/3.png",
    "/src/images/aezakmi/app1/4.png",
    "/src/images/aezakmi/app1/5.png"
  ];

  // App 2: My ArtVault: Gallery Pocket
  const app2Images = [
    "/src/images/aezakmi/app2/1.png",
    "/src/images/aezakmi/app2/2.png",
    "/src/images/aezakmi/app2/3.png",
    "/src/images/aezakmi/app2/4.png",
    "/src/images/aezakmi/app2/5.png"
  ];

  // App 3: My Arrangements: Bloom & Blend
  const app3Images = [
    "/src/images/aezakmi/app3/1.png",
    "/src/images/aezakmi/app3/2.png",
    "/src/images/aezakmi/app3/3.png",
    "/src/images/aezakmi/app3/4.png",
    "/src/images/aezakmi/app3/5.png"
  ];

  // App 4: MemoCatalog: VoxTags
  const app4Images = [
    "/src/images/aezakmi/app4/1.png",
    "/src/images/aezakmi/app4/2.png",
    "/src/images/aezakmi/app4/3.png",
    "/src/images/aezakmi/app4/4.png",
    "/src/images/aezakmi/app4/5.png"
  ];

  // App 5: The VinylSpace: BeatDisc
  const app5Images = [
    "/src/images/aezakmi/app5/1.png",
    "/src/images/aezakmi/app5/2.png",
    "/src/images/aezakmi/app5/3.png",
    "/src/images/aezakmi/app5/4.png",
    "/src/images/aezakmi/app5/5.png"
  ];

  // App 6: The Flora Fate Quest
  const app6Images = [
    "/src/images/aezakmi/app6/1.png",
    "/src/images/aezakmi/app6/2.png",
    "/src/images/aezakmi/app6/3.png",
    "/src/images/aezakmi/app6/4.png",
    "/src/images/aezakmi/app6/5.png"
  ];

  // App 7: The Mill Simulator: Wheat & Wealth
  const app7Images = [
    "/src/images/aezakmi/app7/1.png",
    "/src/images/aezakmi/app7/2.png",
    "/src/images/aezakmi/app7/3.png",
    "/src/images/aezakmi/app7/4.png",
    "/src/images/aezakmi/app7/5.png"
  ];

  const apps = [
    {
      title: "The Heraldry Maker House",
      description: "Позволяет каждому пользователю создать уникальный герб своего дома.",
      images: app1Images
    },
    {
      title: "My ArtVault: Gallery Pocket",
      description: "Персональный карманный музей, где пользователь может изучать шедевры живописи, скульптуры и артефакты в интерактивном формате.",
      images: app2Images
    },
    {
      title: "My Arrangements: Bloom & Blend",
      description: "Интерактивное приложение, позволяющее пользователям виртуально собирать свои уникальные букеты.",
      images: app3Images
    },
    {
      title: "MemoCatalog: VoxTags",
      description: "Приложение диктофон с возможностью маркировать и каталогизировать записи.",
      images: app4Images
    },
    {
      title: "The VinylSpace: BeatDisc",
      description: "Приложение для создания виртуальных дисков / пластинок с возможностью добавлять музыку.",
      images: app5Images
    },
    {
      title: "The Flora Fate Quest",
      description: "Интерактивная игра, в которой игроки погружаются в мир садоводства, принимая ключевые решения на каждом этапе выращивания растения.",
      images: app6Images
    },
    {
      title: "The Mill Simulator: Wheat & Wealth",
      description: "Игрок управляет мельницей, которая автоматически перемалывает зерно, продает муку и улучшает оборудование.",
      images: app7Images
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-16 pt-20 md:pt-[120px] pb-20">
        
        {/* Header */}
        <div className="flex flex-col gap-3 md:gap-[12px] mb-12 md:mb-[48px]">
          <h1 className="text-5xl md:text-[80px] font-semibold tracking-[-0.04em] leading-none">
            AEZAKMI Group
          </h1>
          <p className="text-3xl md:text-[64px] text-black/50 tracking-[-0.04em] leading-none max-w-[800px]">
            7 из 400+ iOS приложений над которыми я работал
          </p>
        </div>

        {/* Content Sections - Unconstrained width wrapper to allow full-width carousels */}
        <div className="flex flex-col gap-12 md:gap-[48px] w-full">
          
          {/* Tasks - Constrained */}
          <div className="flex flex-col gap-4 max-w-[800px]">
            <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight leading-none">
              Задачи
            </h2>
            <ul className="list-disc pl-8 space-y-1 text-base md:text-[20px] leading-relaxed">
              <li>проектировать iOS-приложения, опираясь на экспертизу и потребности бизнеса</li>
              <li>создавать интерфейсы, соответствующие Human Interface Guidelines</li>
              <li>повышать привлекательность приложений в App Store за счёт визуальной коммуникации</li>
              <li>обеспечивать качественную передачу дизайна в разработку</li>
              <li>соблюдать уникальность приложений для успешного прохождения модерации в App Store</li>
            </ul>
          </div>

          {/* Process - Constrained */}
          <div className="flex flex-col gap-4 max-w-[800px]">
            <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight leading-none">
              Процесс
            </h2>
            <p className="text-base md:text-[20px] leading-relaxed">
              Ежедневно проектирую приложения отталкиваясь от базовой идеи переданной проджектом и требований бизнеса к тому или иному приложению. Подготавливаю флоу, часто карандашом на бумаге. Собираю макеты, опираясь на нативные iOS-компоненты и распространенные паттерны поведения пользователей. На этапе реализации передаю макеты в разработку, обсуждаю технические ограничения и компромиссы, контролирую соответствие финального результата дизайн-решениям.
            </p>
          </div>

          {/* Applications */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 max-w-[800px]">
              <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight leading-none">
                Приложения
              </h2>
              <p className="text-base md:text-[20px] leading-relaxed">
                Далее несколько приложений из более 400 созданных мной за время работы в студии (2024-2026).
              </p>
            </div>

            {/* App List */}
            <div className="flex flex-col gap-20 md:gap-32 mt-4 w-full">
              {apps.map((app, index) => (
                <div key={index} className="flex flex-col items-start gap-6 md:gap-8 w-full">
                  <div className="w-full [&_button[aria-label*='Scroll']]:hidden [&>div.relative>div.overflow-hidden]:!overflow-visible">
                    <AppShowcaseCarousel images={app.images} />
                  </div>
                  <div className="flex flex-col gap-2 text-left w-full max-w-[800px]">
                    <h3 className="text-xl md:text-[24px] font-semibold tracking-[0.015em]">
                      {app.title}
                    </h3>
                    <p className="text-base md:text-[18px] text-black/60 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}