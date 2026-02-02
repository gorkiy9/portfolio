import React from 'react';
import { useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[64px] py-[16px] flex items-center justify-between">
        <span className="text-sm tracking-wide text-[#3D8BFF]">Связаться со мной</span>
        <div className="flex items-center gap-6">
          <a 
            href="mailto:igorgalaxy50@gmail.com"
            className="text-sm tracking-wide opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          >
            Email
          </a>
          <a 
            href="https://t.me/gorkiy9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          >
            Telegram
          </a>
        </div>
      </div>
    </nav>
  );
}