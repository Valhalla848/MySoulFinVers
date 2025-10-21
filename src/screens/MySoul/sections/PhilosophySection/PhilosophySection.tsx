import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "О НАС", href: "#about" },
  { label: "ОСОБЕННОСТИ", href: "#features" },
  { label: "ГАЛЕРЕЯ", href: "#gallery" },
  { label: "КОНТАКТЫ", href: "#contacts" },
];

export const PhilosophySection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  return (
    <section className="relative w-full min-h-[982px] flex flex-col [background:url(..//macbook-pro-14----1.png)_50%_50%_/_cover]">
      <header className="flex items-center justify-between px-[60px] py-[30px]">
        <img
          className="w-[151px] h-[63px]"
          alt="My Soul Logo"
          src="/group-2.png"
        />

        <nav className="flex items-center gap-[54px]">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-extrabold text-black text-base whitespace-nowrap font-heading tracking-[0] leading-[normal] hover:opacity-70 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center relative">
        <img
          className="w-[734px] h-[307px]"
          alt="My Soul Coffee & Kitchen"
          src="/group-1.png"
        />

        <Button 
          onClick={handleMenuClick}
          className="mt-[50px] bg-[#c69d7f] hover:bg-[#b58d6f] text-white font-extrabold text-2xl font-heading tracking-[0] leading-[normal] px-[11px] py-[10px] w-[285px] h-[70px]"
        >
          ПОСМОТРЕТЬ МЕНЮ
        </Button>
      </div>
    </section>
  );
};
