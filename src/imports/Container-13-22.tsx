function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[12px] items-center justify-center leading-none not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="relative shrink-0 text-[48px] text-black tracking-[-1.92px] w-full">Привет, я Игорь</p>
      <p className="relative shrink-0 text-[36px] text-[rgba(0,0,0,0.5)] tracking-[-1.44px] w-full">UX/UI дизайнер</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium gap-[12px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="leading-[1.2] relative shrink-0 text-[#3d8bff] text-[20px] w-full">Люблю мобилки, нагруженные интерфейсы и собирать компоненты</p>
      <div className="leading-[1.32] relative shrink-0 text-[16px] text-black w-full">
        <p className="mb-0">Сочетаю продуктовый, аналитический и креативный подход.</p>
        <p>В работе учитываю потребности и боли пользователей, бизнес-цели и технические ограничения.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[24px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.2] not-italic px-[24px] py-[16px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px] text-black">Email</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)]">igorgalaxy50@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[24px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.2] not-italic px-[24px] py-[16px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px] text-black">Telegram</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)]">@gorkiy9</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <Frame2 />
      <Frame />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[80px] pt-[120px] px-[24px] relative size-full" data-name="Container">
      <Heading />
    </div>
  );
}