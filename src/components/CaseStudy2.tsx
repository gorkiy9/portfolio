import React from 'react';
import { ImageCarousel } from './ImageCarousel';

export function CaseStudy2() {
  const carouselImages = [
    "/src/images/proxy/1.png",
    "/src/images/proxy/2.png",
    "/src/images/proxy/3.png",
    "/src/images/proxy/4.png",
    "/src/images/proxy/5.png",
    "/src/images/proxy/6.png",
    "/src/images/proxy/7.png",
    "/src/images/proxy/8.png",
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-16 pt-20 md:pt-[120px] pb-20">
        
        {/* Header */}
        <div className="flex flex-col gap-3 md:gap-[12px] mb-12 md:mb-[48px]">
          <h1 className="text-5xl md:text-[80px] font-semibold tracking-[-0.04em] leading-none">
            ASOCKS
          </h1>
          <p className="text-3xl md:text-[64px] text-black/50 tracking-[-0.04em] leading-none">
            прокси-сервис
          </p>
        </div>

        {/* Carousel */}
        <div className="mb-12 md:mb-[80px]">
          <ImageCarousel images={carouselImages} />
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-12 md:gap-[48px] max-w-[800px]">
          
          {/* Context */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight leading-none">
              Контекст
            </h2>
            <div className="text-base md:text-[20px] leading-relaxed space-y-4">
              <p>
                У ASOCKS был устаревший интерфейс и разрозненный пользовательский опыт, что негативно влияло на удержание пользователей в первый месяц использования.
              </p>
              <p>
                Интерфейс не масштабировался под разные устройства, а отсутствие единой дизайн-системы замедляло развитие продукта и усложняло работу с разработкой.
              </p>
            </div>
          </div>

          {/* Task */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight leading-none">
              Задача
            </h2>
            <div className="text-base md:text-[20px] leading-relaxed space-y-4">
              <div>
                <p className="mb-0">Моей задачей было:</p>
                <ul className="list-disc pl-8 space-y-1 mt-2">
                  <li>спроектировать редизайн сервиса с нуля, улучшив пользовательский опыт и понятность ключевых сценариев;</li>
                  <li>создать масштабируемую дизайн-систему на базе VK UI;</li>
                  <li>обеспечить консистентность интерфейса на трех типах устройств;</li>
                  <li>сопровождать продукт на этапе разработки и контролировать качество реализации.</li>
                </ul>
              </div>
              <p>
                Критерием успеха я выделил повышение удержания пользователей в течение первых месяцев, увеличение количества сделок и снижение обращений в тех поддержку, которые касались пользовательских сценариев.
              </p>
            </div>
          </div>

          {/* Process (Что делал?) */}
          <div className="flex flex-col gap-6 md:gap-[24px]">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight leading-none">
                Что делал?
              </h2>
            </div>

            <div className="flex flex-col gap-8 text-base md:text-[20px] leading-relaxed">
              {/* Step 1 */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">
                  Проектирование редизайна
                </h3>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Пересобрал UX ключевых сценариев покупки и управления PROXY-адресами.</li>
                  <li>Упростил навигацию и структуру экранов, убрав избыточные элементы.</li>
                  <li>Поменял визуальные акценты, чтобы пользователь быстрее доходил до целевых действий.</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">
                  Дизайн система
                </h3>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Собрал дизайн-систему на основе VK UI:</li>
                  <ul className="list-disc pl-8 mt-1 space-y-1">
                    <li>использовал существующие компоненты;</li>
                    <li>разработал кастомные компоненты под специфику продукта;</li>
                    <li>задал правила адаптивности и поведения состояний.</li>
                  </ul>
                  <li>Дизайн-система позволила ускорить разработку и упростить дальнейшее масштабирование продукта.</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">
                  Адаптивность
                </h3>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Адаптировал компоненты и макеты под три типа устройств (desktop / tablet / mobile).</li>
                  <li>Проверял сценарии использования в разных контекстах, чтобы сохранить целостность UX.</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">
                  Работа с разработкой
                </h3>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Отслеживал процесс реализации дизайна.</li>
                  <li>Проводил регулярные дизайн-ревью, выявлял расхождения с макетами и предлагал корректировки.</li>
                  <li>Выступал связующим звеном между дизайном и разработкой.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight leading-none">
              Результат
            </h2>
            <div className="text-base md:text-[20px] leading-relaxed space-y-4">
              <p>
                После внедрения редизайна коэффициент удержания пользователей в первый месяц вырос с ~21% до ~38%.
              </p>
              <div>
                <p className="mb-0">Продукт получил:</p>
                <ul className="list-disc pl-8 space-y-1 mt-2">
                  <li>единый визуальный язык;</li>
                  <li>масштабируемую дизайн-систему;</li>
                  <li>стабильный UX на разных устройствах.</li>
                </ul>
              </div>
              <p>
                Команда разработки стала быстрее и увереннее работать с интерфейсом за счёт системности решений.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}