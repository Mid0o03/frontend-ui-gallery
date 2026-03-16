
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onInquire: () => void;
}

const Header: React.FC<HeaderProps> = ({ onInquire }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8 mix-blend-difference">
      <div className="flex items-center gap-4 group cursor-pointer">
        <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-45 transition-transform duration-500">
          architecture
        </span>
        <h1 className="text-xl font-bold tracking-[0.3em] uppercase hidden sm:block">
          The Obsidian House
        </h1>
      </div>

      <nav className="flex items-center gap-6 md:gap-12">
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link to="#overview" className="text-[10px] uppercase tracking-[0.25em] hover:text-primary transition-colors">Overview</Link>
          </li>
          <li>
            <Link to="#gallery" className="text-[10px] uppercase tracking-[0.25em] hover:text-primary transition-colors text-primary font-bold">Gallery</Link>
          </li>
          <li>
            <Link to="#spaces" className="text-[10px] uppercase tracking-[0.25em] hover:text-primary transition-colors">Spaces</Link>
          </li>
        </ul>
        <button
          onClick={onInquire}
          className="bg-primary text-background-dark px-6 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-white hover:scale-105 transition-all duration-300"
        >
          Inquire
        </button>
      </nav>
    </header>
  );
};

export default Header;
