function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[12px] items-center justify-center leading-none not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="relative shrink-0 text-[100px] text-black tracking-[-4px] w-full">Привет, я Игорь</p>
      <p className="relative shrink-0 text-[80px] text-[rgba(0,0,0,0.5)] tracking-[-3.2px] w-full">UX/UI дизайнер</p>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[24px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.2] not-italic px-[24px] py-[16px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px] text-black">Email</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)]">igorgalaxy50@gmail.com</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[24px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.2] not-italic px-[24px] py-[16px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px] text-black">Telegram</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)]">@gorkiy9</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-between min-h-px min-w-px relative self-stretch">
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.48] not-italic relative shrink-0 text-[20px] text-black w-full whitespace-pre-wrap">
        <p className="mb-0">Сочетаю продуктовый, аналитический и креативный подход.</p>
        <p>В работе учитываю потребности и боли пользователей, бизнес-цели и технические ограничения.</p>
      </div>
      <Container1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-none min-h-px min-w-px not-italic relative text-[#3d8bff] text-[52px] tracking-[-1.1289px] whitespace-pre-wrap">Люблю мобилки, нагруженные интерфейсы и собирать компоненты</p>
      <Frame1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <Frame2 />
      <Frame />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[80px] pt-[120px] px-[64px] relative size-full" data-name="Container">
      <Heading />
    </div>
  );
}