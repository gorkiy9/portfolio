import imgImageWithFallback from "figma:asset/d5939842d9b12d7db3c0839a534c6fec5ca522d4.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none relative shrink-0 text-[60px] text-black tracking-[-2.4px] w-full">Привет! Я UX/UI дизайнер</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.24] max-w-[640px] relative shrink-0 text-[#3d8bff] text-[40px] tracking-[-1.1289px] w-full">люблю мобилки, нагруженные интерфейсы и собирать компоненты</p>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] not-italic pb-[80px] pt-[120px] px-[64px] relative w-full whitespace-pre-wrap">
        <Heading />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.48] max-w-[640px] relative shrink-0 text-[24px] text-black w-full">Сочетаю продуктовый, аналитический и креативный подход. В работе учитываю потребности и боли пользователей, бизнес-цели и технические ограничения.</p>
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[326px] relative rounded-[24px] shrink-0 w-full" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[24px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[24px] size-full" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start leading-[1.2] not-italic relative text-black w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px]">Case Title</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">Description</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start justify-center relative w-full">
        <ImageWithFallback />
        <Container4 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] max-w-[644px] min-h-px min-w-px relative rounded-[36px]" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] p-[32px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[326px] relative rounded-[24px] shrink-0 w-full" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[24px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[24px] size-full" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start leading-[1.2] not-italic relative text-black w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px]">Case Title</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">Description</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start justify-center relative w-full">
        <ImageWithFallback1 />
        <Container7 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] max-w-[644px] min-h-px min-w-px relative rounded-[36px]" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] p-[32px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Container2 />
      <Container5 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[326px] relative rounded-[24px] shrink-0 w-full" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[24px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[24px] size-full" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start leading-[1.2] not-italic relative text-black w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[24px]">Case Title</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">Description</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start justify-center relative w-full">
        <ImageWithFallback2 />
        <Container10 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] max-w-[644px] min-h-px min-w-px relative rounded-[36px]" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] p-[32px] relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Container8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] pb-[80px] px-[32px] relative w-full">
        <Row />
        <Row1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-none not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold max-w-[800px] min-w-full relative shrink-0 text-[#3d8bff] text-[48px] tracking-[-0.48px] w-[min-content] whitespace-pre-wrap">Связаться со мной</p>
      <div className="font-['Inter:Medium',sans-serif] font-medium max-w-[800px] relative shrink-0 text-[32px] text-black tracking-[-0.3125px] whitespace-nowrap">
        <p className="mb-0">Я всегда рад новым возможностям</p>
        <p>и сотрудничеству</p>
      </div>
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

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] pb-[240px] pt-[80px] px-[64px] relative w-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Home Page">
      <Container />
      <Container1 />
      <Container11 />
    </div>
  );
}