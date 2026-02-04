import React from 'react';
import { ImageCarousel } from './ImageCarousel';

export function CaseStudy2() {
  const carouselImages = [
    "https://psv4.userapi.com/s/v1/d2/VcBmA3HioElEKhymid1XQziFN-Vrb7ZfSv3n2MSWSbLZhnlGI-1aDGhYsY1Cxvr_RO2kOA7lLo1vArOnm7yWroMScfoScwvjPT-RaEQ3O6IRGPnNGxGmyoUc0mjQs3RfQbJAVb39kkNU/1.png",
    "https://psv4.userapi.com/s/v1/d2/6q4AbTN81wZDmMG_ljCUZSYyd-ztmwDIRZ5DviDOI0wCuyxxH5M3AtnPJ6ksy5BEsfXm-R1L3xns3hXVt6qiZqiKcMAKF6K6LnYPug7wW6KicdYcBwAkTFkcg1k3jxHq4nq19RfKn0ET/2.png",
    "https://psv4.userapi.com/s/v1/d2/uA9LY-P09rLPYoP7Ds41738HI9CTY__nrtlC4slKJqPk2f0DxLJDttSaTXfH2l4xcgNjGDwNWhCJ4wvj3-LGo-pCTPdg_cF7FrYgXoyg2FyHMhUZszOYm2h9OsPLKlMbWtE0QH0JUFvg/3.png",
    "https://psv4.userapi.com/s/v1/d2/SVWzrmPL73Ajy3ZkIfExD1MFFXShkdRk2eO7nvwVAXljUczHvtR2s6d16JSEMSmeku_xCWbrQkkqguycfZEQEKXrjAcejfX9FHychrg5F3-vxfVHuW5uRDbmsVavNTX6JaRQEIJbCN-p/4.png",
    "https://psv4.userapi.com/s/v1/d2/sM7wk61D1MUuWmlAgHnRdpfN20xA_n2gB2ISHy7MX51Ii4ru2wDfM6F9M0U9vt8h8niZSWmoUbECD7sHw95iWonrsrngrQOzAVSZRO5Oq6aYwALrmam9PJ0d4rwLLtM4klOxzFtGErst/5.png",
    "https://psv4.userapi.com/s/v1/d2/JZTvlC1B7ar51qvMFu6_INj4uH6YvmQIf396VjRkikIXEslBOUiXrlsTr0N_p1XCrZoOxGeZRyMZ4sCNfP_aSrsoCs5z-w-1NZkpP4DYAE80B0OO1WeZ6plB-v23gUn8mU0SCd7_998E/6.png",
    "https://psv4.userapi.com/s/v1/d2/_fVHXyUcq_scA8HghZ5Vun5zoLQ8CbAyrv-NtrfABuM3HZnP5x8lCVHLtGmSYyqKBdkyihu2rPP8Dh4ZpWUPNkU_jO0Jm3SNEc4v4gNt9eK6KGw2PFWGz0FRTEzmcTsjewYesWb7fPGt/7.png",
    "https://psv4.userapi.com/s/v1/d2/01tjIbnRtAzB_eqrsnzcY5048_JemQYBmsuioRE94_iy-TlYZQvMZoGCoK-qmcAhjlNO0kiJZpUqoWI_ACzIyGClLCc1WR91ks4u1_3PKBq6P6GU9wcPVHgUnpTra3HvrsdXw2NmZV5c/8.png",
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