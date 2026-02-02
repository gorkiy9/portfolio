import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageCarousel } from './ImageCarousel';

export function CaseStudy1() {
  const carouselImages = [
    "https://psv4.userapi.com/s/v1/d2/elvJ7XYM5aH72ZTWvKb9C-O4RX0BS7GlHtvSSlHvY9HUyJBY5V8qKLGFB8hH9KMd-EN69hFCyJE5HAaRb8ODBE8T7yJqWWPEyWsugu9QQ-_wXBUdS9y-Nv74lywo0A7d-ibfMQKYST3-/1.png",
    "https://psv4.userapi.com/s/v1/d2/aDbKcwRoLDPrqw5uEnB0CwxGVG_8H-7ZK8IyfZoab9f0_qc84Vax4D5kdJsU-b-CvCwArgob-oYCV9_fnkdSP7aYkOc2oAP76Bmm-0_fXn7p6I1yorZ0qblgCLcI0UYyEUv3gAyKIEeX/2.png",
    "https://psv4.userapi.com/s/v1/d2/d8ZeA2N_310YHXzy--7y9emiFdcP5RwMaQW2uCkCHCqgcEeOG58-5PtPCNwJRiREXezvgIKafl5Ah_eh7gKqyJ_LnYCOUPqNU_l4vp1dfp-8horqmWdYjuQfb1QceoTIuWlCp4hpq1js/3.png",
    "https://psv4.userapi.com/s/v1/d2/zqoMzA3UcdjN0YzP0nPZiMFaa1uU9QLL33JzkuCrZIBFu02Qju6nXgaKBjlDM5c6PiCeNpIThN3akuGQOUBws-f51WvnORFl6NDt6y7RhQp4MmCKurOyurlBBx4aT2acE81j8hYGNVdc/4.png",
    "https://psv4.userapi.com/s/v1/d2/aFK8XqGRZChKkmSKbLyOcqh4oezBqWEGy75UvBSsIyobweqcRn3QjnU8x4RguhixvvBFYFnjssWkyNsTE4X42Vh6pN07LRCciI6E8p4y-NZRzB7B8WPtK_3pKlWNeddaBPpzr-ms9J6G/5.png",
    "https://psv4.userapi.com/s/v1/d2/dcL9RwWgqRW2LUBSbDqCAs2kEiBaMx2i84Ckdj_wQmzQooIwvCbtndwuho0qLOMw64fUM8EZ60hLFBMup1bKX3v1YqXgFSgB4ZT2cDUbr2kH7sn3mwrsB0WhRmRtCscJFs1FBd8zi-5a/6.png",
    "https://psv4.userapi.com/s/v1/d2/Ytr3kRX8a7-71jz-o7h6eguvZThkR3iMX7Iq9udqueTTF9HhZthG8Gg6aQrf-GCJET33jOlfRcf7Y9pJ-HSWgAhHWQhGlEGyqx0HPVwy_3NakiRjMntAGn9aeUpSmeWmhtDnEXRBy-SW/7.png",
    "https://psv4.userapi.com/s/v1/d2/ouMgWwa8dlaXBFN9jj3AML4xKMnbxGs77hETtvTdod-35jqAogP9N62MWz_lkLbI7G_4Nu7Cz4u4_EAYZGCAe1pP216zsKODeHAC9P2TPDVx7XFOU9TaBMt3riHwrzTeaLsqYgvPDQY-/8.png",
    "https://psv4.userapi.com/s/v1/d2/A7X_BA6BW1gOkg9d7ii4cxcrwKPWLVdmaofxDw29UnkklrcXZuqwB3-sIRdr6TrrPrmVEcuQ9xDFvIqKJKKHmL_Fjek38_XUNRe31JBQl73b4MoBbugepdHFCOt39svenUqXx9TanX7n/9.png",
    "https://psv4.userapi.com/s/v1/d2/mTVPpgqRUMLqeFHUJKXc0vxd7-qLXvQ3xvsgfag0wevvddgEB5QAKsLtLfYFWlGyTKSOK41tnZo0owIASVFXPm7LVtbmkoFubSbojpfHQY_H8C4rLFn74__o4gdbMO5ZV3MUStIPhoZO/10.png",
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-16 pt-20 md:pt-[120px] pb-20">
        
        {/* Header */}
        <div className="flex flex-col gap-3 md:gap-[12px] mb-12 md:mb-[48px]">
          <h1 className="text-5xl md:text-[80px] font-semibold tracking-[-0.04em] leading-none">
            Valor
          </h1>
          <p className="text-3xl md:text-[64px] text-black/50 tracking-[-0.04em] leading-none">
            студийный таск-менеджер
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
                В студии для управления проектами использовался один из трекеров, однако со временем стало понятно, что существующие таск-менеджеры не закрывают студийные сценарии полностью.
              </p>
              <p>
                Это избыточная сложность для повседневной работы, слабая адаптация под внутренние процессы студии, ограничения в трекинге времени и отчетности под реальные проектные роли.
              </p>
              <p>
                В результате возникла идея создать собственный студийный таск-менеджер, который бы учитывал специфику работы студии и снижал операционные потери.
              </p>
              <p>
                Проект реализовывался как внутренний продукт, в команде из меня, арт-директора и второго дизайнера.
              </p>
              <p>
                Разработчики подключались по мере формирования продуктовых решений.
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
                <p className="mb-0">Передо мной стояли следующие задачи:</p>
                <ul className="list-disc pl-8">
                  <li>спроектировать UX/UI нового таск-менеджера</li>
                  <li>сохранить привычные паттерны ClickUp, чтобы минимизировать порог входа</li>
                  <li>быстро собрать MVP и запустить его во внутреннее использование</li>
                  <li>организовать процесс сбора обратной связи и итеративного улучшения продукта</li>
                </ul>
              </div>
              <p>
                Главной проблемой было выделить и решить существующие боли среди менеджеров, дизайнеров и других работников. Дать им то чего, не хватало в других трекерах.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="flex flex-col gap-6 md:gap-[24px]">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-[32px] font-semibold tracking-tight leading-none">
                Процесс
              </h2>
              <p className="text-xl md:text-[24px] font-medium tracking-tight">
                Работа велась в несколько этапов
              </p>
            </div>

            <div className="flex flex-col gap-8 text-base md:text-[20px] leading-relaxed">
              {/* Step 1 */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">
                  1. Исследование и формирование базы
                </h3>
                <ul className="list-disc pl-8">
                  <li>Проанализировали существующие таск-менеджеры</li>
                  <li>Собрали базовую иерархию сущностей (проекты, задачи, статусы, роли)</li>
                  <li>Провели интервью и неформальные обсуждения с коллегами — будущими пользователями продукта</li>
                  <li>Сформировали джобы и CJM для ключевых ролей: менеджеров и дизайнеров.</li>
                </ul>
                <p>
                  Было очень удобно, все будущие пользователи находились в одном офисе.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">
                  2. Проектирование MVP
                </h3>
                <ul className="list-disc pl-8">
                  <li>Спроектировали минимальный функционал, достаточный для воспроизведения реальной работы студии</li>
                  <li>Осознанно заимствовали знакомые UX-паттерны ClickUp, чтобы переход был максимально мягким</li>
                  <li>Подготовили прототипы и дизайн в Figma</li>
                  <li>Синхронизировался с разработчиками, привели наши идеи в реализуемые решения</li>
                </ul>
                <p className="font-medium">
                  В результате MVP был запущен во внутренний доступ и начал использоваться в реальных проектах студии.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">
                  3. Итеративное развитие после запуска
                </h3>
                <div>
                  <p className="mb-0">После релиза MVP я:</p>
                  <ul className="list-disc pl-8">
                    <li>организовал сбор багов и фидбэка от пользователей;</li>
                    <li>проводил интервью с менеджерами и дизайнерами;</li>
                    <li>собирал пожелания и боли, проверял гипотезы;</li>
                    <li>готовил прототипы улучшений и передавал их в разработку.</li>
                  </ul>
                </div>
                <p>
                  Далее продукт развивался уже на основе реального использования.
                </p>
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
                Студия полностью перешла на использование собственного таск-менеджера.
              </p>
              <p>
                В системе теперь ведется проектная отчетность, трекается время, ставятся и контролируются задачи, поддерживаются студийные процессы.
              </p>
              <p>
                Продукт продолжает развиваться: фиксятся баги и выходят апдейты.
              </p>
              <p className="font-medium">
                Задача создания и внедрения внутреннего продуктового решения была выполнена полностью — студия получила рабочий инструмент, адаптированный под реальные процессы.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
