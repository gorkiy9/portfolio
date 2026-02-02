function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none max-w-[800px] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Задачи</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc max-w-[800px] relative shrink-0 text-[20px] w-full">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">проектировать iOS-приложения, опираясь на экспертизу и потребности бизнеса</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">создавать интерфейсы, соответствующие Human Interface Guidelines</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">повышать привлекательность приложений в App Store за счёт визуальной коммуникации</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[1.24]">обеспечивать качественную передачу дизайна в разработку</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[1.24]">соблюдать уникальность приложений для успешного прохождения модерации в App Store</span>
        </li>
      </ul>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none max-w-[800px] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Процесс</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Ежедневно проектирую приложения отталкиваясь от базовой идеи переданной проджектом и требований бизнеса к тому или иному приложению. Подготавливаю флоу, часто карандашом на бумаге. Собираю макеты, опираясь на нативные iOS-компоненты и распространенные паттерны поведения пользователей. На этапе реализации передаю макеты в разработку, обсуждаю технические ограничения и компромиссы, контролирую соответствие финального результата дизайн-решениям.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none max-w-[800px] relative shrink-0 text-[32px] tracking-[-0.32px] w-full">Приложения</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.24] max-w-[800px] relative shrink-0 text-[20px] w-full">Далее несколько приложений из более 400 созданных мной за время работы в студии (2024-2026).</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start not-italic pb-[80px] px-[64px] relative size-full text-black whitespace-pre-wrap" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}