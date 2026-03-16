
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../constants';

const Navbar: React.FC = () => {
  return (
    <header className="z-20 flex items-center justify-between px-6 md:px-12 py-8 w-full max-w-screen-2xl mx-auto">
      <div className="flex-1 hidden md:block">
        <span className="text-[10px] tracking-[0.4em] uppercase text-silver-dark font-medium">Established MMXXIV</span>
      </div>

      <div className="flex flex-col items-center gap-1 group cursor-default">
        <div className="text-silver-light group-hover:scale-110 transition-transform duration-500">
          <Logo />
        </div>
        <h1 className="text-xl font-bold tracking-[0.5em] silver-text uppercase">V1 Luxe</h1>
      </div>

      <div className="flex-1 flex justify-end gap-10 items-center">
        <nav className="hidden lg:flex gap-8">
          {['Concierge', 'Global', 'Bespoke'].map((item) => (
            <a
              key={item}
              className="text-[11px] uppercase tracking-[0.2em] text-silver-dark hover:text-white hover:italic transition-all"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block h-10 w-[1px] bg-silver-dark/30 mx-4"></div>
        <button className="material-symbols-outlined text-silver-dark hover:text-white transition-colors">menu</button>
      </div>
    </header>
  );
};

export default Navbar;
