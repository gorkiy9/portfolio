function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-black w-full whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none max-w-[800px] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Контекст</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">У ASOCKS был устаревший интерфейс и разрозненный пользовательский опыт, что негативно влияло на удержание пользователей в первый месяц использования.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Интерфейс не масштабировался под разные устройства, а отсутствие единой дизайн-системы замедляло развитие продукта и усложняло работу с разработкой.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-black w-full whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none max-w-[800px] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Задача</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] max-w-[800px] relative shrink-0 text-[20px] w-full">
        <p className="leading-[1.24] mb-0">Моей задачей было:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.24]">спроектировать редизайн сервиса с нуля, улучшив пользовательский опыт и понятность ключевых сценариев</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.24]">создать масштабируемую дизайн-систему на базе VK UI;</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.24]">обеспечить консистентность интерфейса на трех типах устройств</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[1.24]">сопровождать продукт на этапе разработки и контролировать качество реализации</span>
          </li>
        </ul>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Критерием успеха я выделил повышение удержания пользователей в течение первых месяцев, увеличение количества сделок и снижение обращений в тех поддержку, которые касались пользовательских сценариев.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[32px] text-black tracking-[-0.32px] w-full whitespace-pre-wrap">Что делал?</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[800px] relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] max-w-[800px] relative shrink-0 w-full">Проектирование редизайна</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc max-w-[800px] relative shrink-0 w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Пересобрал UX ключевых сценариев покупки и управления PROXY-адресами.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Упростил навигацию и структуру экранов, убрав избыточные элементы.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.24]">Поменял визуальные акценты, чтобы пользователь быстрее доходил до целевых действий.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[800px] relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] max-w-[800px] relative shrink-0 w-full">Дизайн система</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc max-w-[800px] relative shrink-0 w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Собрал дизайн-систему на основе VK UI:</span>
        </li>
        <ul className="mb-0">
          <li className="mb-0 ms-[60px]">
            <span className="leading-[1.24]">использовал существующие компоненты</span>
          </li>
          <li className="mb-0 ms-[60px]">
            <span className="leading-[1.24]">разработал кастомные компоненты под специфику продукта</span>
          </li>
          <li className="ms-[60px]">
            <span className="leading-[1.24]">задал правила адаптивности и поведения состояний</span>
          </li>
        </ul>
        <li className="ms-[30px]">
          <span className="leading-[1.24]">Дизайн-система позволила ускорить разработку и упростить дальнейшее масштабирование продукта.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[800px] relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] max-w-[800px] relative shrink-0 w-full">Адаптивность</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc max-w-[800px] relative shrink-0 w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Адаптировал компоненты и макеты под три типа устройств (desktop / tablet / mobile).</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.24]">Проверял сценарии использования в разных контекстах, чтобы сохранить целостность UX.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[800px] relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.24] max-w-[800px] relative shrink-0 w-full">Работа с разработкой</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc max-w-[800px] relative shrink-0 w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Отслеживал процесс реализации дизайна.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">Проводил регулярные дизайн-ревью, выявлял расхождения с макетами и предлагал корректировки.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.24]">Выступал связующим звеном между дизайном и разработкой.</span>
        </li>
      </ul>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[20px] text-black w-full whitespace-pre-wrap" data-name="List">
      <Frame />
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <List />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-black w-full whitespace-pre-wrap" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none max-w-[800px] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Результат</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">После внедрения редизайна коэффициент удержания пользователей в первый месяц вырос с ~21% до ~38%.</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] max-w-[800px] relative shrink-0 text-[20px] w-full">
        <p className="leading-[1.24] mb-0">Продукт получил:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.24]">единый визуальный язык,</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[1.24]">масштабируемую дизайн-систему,</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[1.24]">стабильный UX на разных устройствах.</span>
          </li>
        </ul>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Команда разработки стала быстрее и увереннее работать с интерфейсом за счёт системности решений.</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start pb-[80px] px-[64px] relative size-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}