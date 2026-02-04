import image_b8983e31879c57a15ef143d3210ce6b16f4bcf42 from 'figma:asset/b8983e31879c57a15ef143d3210ce6b16f4bcf42.png';
import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  useLayoutEffect(() => {
    const savedPosition = sessionStorage.getItem('homePageScrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }

    return () => {
      sessionStorage.setItem('homePageScrollPosition', window.scrollY.toString());
    };
  }, []);

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full min-h-screen" data-name="Home Page">
      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-start max-w-[inherit] not-italic pb-[40px] md:pb-[80px] pt-[80px] md:pt-[120px] px-[24px] md:px-[64px] relative w-full whitespace-pre-wrap">
          {/* Top Headers */}
          <div className="flex flex-col font-semibold gap-[12px] leading-none relative shrink-0 w-full">
            <h1 className="text-[48px] md:text-[100px] text-black tracking-[-1.92px] md:tracking-[-4px] w-full">Привет, я Игорь</h1>
            <p className="text-[36px] md:text-[80px] text-black/50 tracking-[-1.44px] md:tracking-[-3.2px] w-full">UX/UI дизайнер</p>
          </div>

          {/* Content Row */}
          <div className="flex flex-col md:flex-row gap-[24px] items-start relative shrink-0 w-full mt-0">
            {/* Left: Blue Text */}
            <p className="flex-1 font-medium leading-none text-[#3d8bff] text-[20px] md:text-[52px] tracking-normal md:tracking-[-1.13px]">
              Люблю мобилки, нагруженные интерфейсы и собирать компоненты
            </p>

            {/* Right: Bio & Links */}
            <div className="flex flex-col flex-1 gap-[24px] justify-between h-full min-w-0 w-full">
              <div className="font-medium leading-[1.32] md:leading-[1.48] text-[16px] md:text-[20px] text-black w-full">
                <p className="mb-0">Сочетаю продуктовый, аналитический и креативный подход.</p>
                <p>В работе учитываю потребности и боли пользователей, бизнес-цели и технические ограничения.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1440px] mx-auto relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-col gap-6 md:gap-[24px] items-start max-w-[inherit] pb-[80px] md:pb-[80px] px-0 md:px-[48px] relative w-full pt-[0px]">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-[16px] md:gap-y-8" data-name="Grid">
            {/* Valor Card */}
            <div className="w-full relative rounded-[36px]">
              <Link to="/case1" className="group flex flex-col items-center w-full bg-transparent hover:bg-[rgba(0,0,0,0.04)] transition-colors rounded-[24px] p-[24px] md:p-[16px] text-left cursor-pointer">
                <div className="flex flex-col gap-6 md:gap-[24px] w-full">
                  <div className="h-[240px] md:h-[326px] relative rounded-[16px] w-full overflow-hidden shrink-0">
                    <ImageWithFallback 
                      src={image_b8983e31879c57a15ef143d3210ce6b16f4bcf42}
                      alt="Valor"
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full">
                    <p className="font-medium text-[20px] md:text-[24px] text-black">Valor</p>
                    <p className="font-normal text-[16px] md:text-[16px] text-black">Студийный таск-менеджер</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* ASOCKS Card */}
            <div className="w-full relative rounded-[36px]">
              <Link to="/case2" className="group flex flex-col items-center w-full bg-transparent hover:bg-[rgba(0,0,0,0.04)] transition-colors rounded-[24px] p-[24px] md:p-[16px] text-left cursor-pointer">
                <div className="flex flex-col gap-6 md:gap-[24px] w-full">
                  <div className="h-[240px] md:h-[326px] relative rounded-[16px] w-full overflow-hidden shrink-0">
                    <ImageWithFallback 
                      src="https://sun9-80.userapi.com/s/v1/ig2/Iqzu7h7aKAp-J9KKeZA4P_mowiA6ZvYNt7kVgobbTa3hCY0QZiL1fK5lvTWTwxCdHQkzqI_baviyfGlWDvZzuZ2H.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,2560x1440&from=bu&cs=2560x0"
                      alt="ASOCKS"
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full">
                    <p className="font-medium text-[20px] md:text-[24px] text-black">ASOCKS</p>
                    <p className="font-normal text-[16px] md:text-[16px] text-black">Прокси-сервис</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* AEZAKMI Card */}
            <div className="w-full relative rounded-[36px]">
              <Link to="/case3" className="group flex flex-col items-center w-full bg-transparent hover:bg-[rgba(0,0,0,0.04)] transition-colors rounded-[24px] p-[24px] md:p-[16px] text-left cursor-pointer">
                <div className="flex flex-col gap-6 md:gap-[24px] w-full">
                  <div className="h-[240px] md:h-[326px] relative rounded-[16px] w-full overflow-hidden shrink-0">
                    <ImageWithFallback 
                      src="https://sun9-63.userapi.com/s/v1/ig2/wVFqHaQ_pbYxSnhHzxJzytMoNRU-oiCSatL4W4lUYqu8oQbpnSSwt1-sTvOB7UvaQuWkPsC15ntAJRtE7wzK2gly.jpg?quality=95&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,2560x1440&from=bu&cs=2560x0"
                      alt="AEZAKMI Group"
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] w-full">
                    <p className="font-medium text-[20px] md:text-[24px] text-black">AEZAKMI Group</p>
                    <p className="font-normal text-[16px] md:text-[16px] text-black">7 из 400+ iOS приложений, над которыми я работал</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-[1440px] mx-auto relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-start max-w-[inherit] pb-[80px] md:pb-[240px] pt-[40px] md:pt-[80px] px-[24px] md:px-[64px] relative w-full">
          
          <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start leading-none not-italic relative shrink-0 w-full" data-name="Container">
            <h2 className="font-semibold max-w-[800px] min-w-full relative shrink-0 text-[#3d8bff] text-[32px] md:text-[48px] tracking-[-0.48px] w-full whitespace-pre-wrap">
              Связаться со мной
            </h2>
            <div className="font-medium max-w-[800px] relative shrink-0 text-[24px] md:text-[32px] text-black tracking-[-0.3125px]">
              <p className="mb-0">Я всегда рад новым возможностям</p>
              <p>и сотрудничеству</p>
            </div>
          </div>

          <div className="content-stretch flex flex-wrap gap-[12px] md:gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
            <a href="mailto:igorgalaxy50@gmail.com" className="group bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.08)] transition-colors relative rounded-[24px] shrink-0 cursor-pointer w-full md:w-auto" data-name="Link">
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.2] not-italic px-[24px] py-[16px] relative">
                <p className="font-medium relative shrink-0 text-[20px] md:text-[24px] text-black group-hover:text-[#3d8bff] transition-colors">Email</p>
                <p className="font-normal relative shrink-0 text-[14px] md:text-[16px] text-[rgba(0,0,0,0.5)]">igorgalaxy50@gmail.com</p>
              </div>
            </a>

            <a href="https://t.me/gorkiy9" target="_blank" rel="noopener noreferrer" className="group bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.08)] transition-colors relative rounded-[24px] shrink-0 cursor-pointer w-full md:w-auto" data-name="Link">
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.2] not-italic px-[24px] py-[16px] relative">
                <p className="font-medium relative shrink-0 text-[20px] md:text-[24px] text-black group-hover:text-[#3d8bff] transition-colors">Telegram</p>
                <p className="font-normal relative shrink-0 text-[14px] md:text-[16px] text-[rgba(0,0,0,0.5)]">@gorkiy9</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}