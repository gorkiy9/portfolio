import imgImage from "figma:asset/d5939842d9b12d7db3c0839a534c6fec5ca522d4.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[12px] items-center justify-center leading-none not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="relative shrink-0 text-[80px] text-black tracking-[-3.2px] w-full">Valor</p>
      <p className="relative shrink-0 text-[64px] text-[rgba(0,0,0,0.5)] tracking-[-2.56px] w-full">студийный таск-менеджер</p>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[675px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[675px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[675px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[675px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="h-[675px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="h-[675px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image6() {
  return (
    <div className="h-[675px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image7() {
  return (
    <div className="h-[675px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image8() {
  return (
    <div className="h-[675px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Image9() {
  return (
    <div className="h-[675px] relative rounded-[24px] shrink-0 w-[1200px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[24px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function ImageCarousel() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[80px] pt-[48px] relative shrink-0 w-full" data-name="Image Carousel">
      <Image />
      <Image1 />
      <Image2 />
      <Image3 />
      <Image4 />
      <Image5 />
      <Image6 />
      <Image7 />
      <Image8 />
      <Image9 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <Frame />
      <ImageCarousel />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pt-[120px] px-[64px] relative w-full">
        <Heading />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none max-w-[800px] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Контекст</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">В студии для управления проектами использовался один из трекеров, однако со временем стало понятно, что существующие таск-менеджеры не закрывают студийные сценарии полностью.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Это избыточная сложность для повседневной работы, слабая адаптация под внутренние процессы студии, ограничения в трекинге времени и отчетности под реальные проектные роли.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">В результате возникла идея создать собственный студийный таск-менеджер, который бы учитывал специфику работы студии и снижал операционные потери.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Проект реализовывался как внутренний продукт, в команде из меня, арт-директора и второго дизайнера.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Разработчики подключались по мере формирования продуктовых решений.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none max-w-[800px] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Задача</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] max-w-[800px] relative shrink-0 text-[20px] w-full">
        <p className="leading-[1.24] mb-0">Передо мной стояли следующие задачи:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.24]">спроектировать UX/UI нового таск-менеджера</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.24]">сохранить привычные паттерны ClickUp, чтобы минимизировать порог входа</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.24]">быстро собрать MVP и запустить его во внутреннее использование</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[1.24]">организовать процесс сбора обратной связи и итеративного улучшения продукта</span>
          </li>
        </ul>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Главной проблемой было выделить и решить существующие боли среди менеджеров, дизайнеров и других работников. Дать им то чего, не хватало в других трекерах.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-none relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Процесс</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px] tracking-[-0.24px] w-full">Работа велась в несколько этапов</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[800px] relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] max-w-[800px] relative shrink-0 w-full">1. Исследование и формирование базы</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc max-w-[800px] relative shrink-0 w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Проанализировали существующие таск-менеджеры</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Собрали базовую иерархию сущностей (проекты, задачи, статусы, роли)</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Провели интервью и неформальные обсуждения с коллегами — будущими пользователями продукта</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.24]">Сформировали джобы и CJM для ключевых ролей: менеджеров и дизайнеров.</span>
        </li>
      </ul>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 w-full">Было очень удобно, все будущие пользователи находились в одном офисе.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[800px] relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] max-w-[800px] relative shrink-0 w-full">2. Проектирование MVP</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc max-w-[800px] relative shrink-0 w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Спроектировали минимальный функционал, достаточный для воспроизведения реальной работы студии</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Осознанно заимствовали знакомые UX-паттерны ClickUp, чтобы переход был максимально мягким</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Подготовили прототипы и дизайн в Figma</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.24]">Синхронизировался с разработчиками, привели наши идеи в реализуемые решения</span>
        </li>
      </ul>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.24] max-w-[800px] relative shrink-0 w-full">В результате MVP был запущен во внутренний доступ и начал использоваться в реальных проектах студии.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[800px] relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] max-w-[800px] relative shrink-0 w-full">3. Итеративное развитие после запуска</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full">
        <p className="leading-[1.24] mb-0">После релиза MVP я:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.24]">организовал сбор багов и фидбэка от пользователей;</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.24]">проводил интервью с менеджерами и дизайнерами;</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.24]">собирал пожелания и боли, проверял гипотезы;</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[1.24]">готовил прототипы улучшений и передавал их в разработку.</span>
          </li>
        </ul>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 w-full">Далее продукт развивался уже на основе реального использования.</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[20px] w-full" data-name="List">
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame4 />
      <List />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none max-w-[800px] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Результат</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Студия полностью перешла на использование собственного таск-менеджера.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">В системе теперь ведется проектная отчетность, трекается время, ставятся и контролируются задачи, поддерживаются студийные процессы.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Продукт продолжает развиваться: фиксятся баги и выходят апдейты.</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Задача создания и внедрения внутреннего продуктового решения была выполнена полностью — студия получила рабочий инструмент, адаптированный под реальные процессы.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] not-italic pb-[80px] px-[64px] relative text-black w-full whitespace-pre-wrap">
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

export default function Case() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Case">
      <Container />
      <Container1 />
    </div>
  );
}