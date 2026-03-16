
import React from 'react';

interface NavbarProps {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleMenu, isMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-[110] flex justify-between items-center px-8 py-8 md:px-12 md:py-10 pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto">
        <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          Estate 01
        </span>
      </div>

      <button 
        onClick={onToggleMenu}
        className="group flex flex-col items-end gap-1.5 focus:outline-none bg-transparent p-2 rounded-lg hover:bg-white/5 transition-all duration-300 pointer-events-auto"
        aria-label="Toggle Menu"
      >
        <span className={`h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
        <span className={`h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'opacity-0 w-0' : 'w-5'}`}></span>
        <span className={`h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-[2px]' : 'w-8'}`}></span>
      </button>
    </header>
  );
};
