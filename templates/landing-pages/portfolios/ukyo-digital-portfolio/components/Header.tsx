
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference text-white">
      <div className="flex items-center gap-2">
        <div className="border border-white p-1 md:p-1.5 flex items-center justify-center">
          <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">Portfolio</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-vermilion transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
        <button className="bg-primary px-6 py-2 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-vermilion transition-all duration-300 shadow-lg hover:shadow-vermilion/20">
          Hire Me
        </button>
      </nav>

      <button className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
