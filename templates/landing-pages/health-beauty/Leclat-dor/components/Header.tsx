import React from 'react';
import { branding } from '../config/branding';

interface HeaderProps {
  isScrolled: boolean;
}

/**
 * Header component for the landing page.
 * Features a sticky navigation with backdrop blur and scroll-based background transition.
 */
const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background-dark/90 backdrop-blur-lg h-20 border-b border-white/5 shadow-2xl' : 'bg-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="text-primary w-8 h-8 transition-transform duration-500 group-hover:rotate-180">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h1 className="text-white text-xl md:text-2xl font-serif font-bold tracking-widest uppercase">{branding.name}</h1>
        </div>

        <nav className="hidden lg:flex items-center gap-12 font-display text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/70">
          <a className="hover:text-primary transition-colors relative group" href="#">
            Accueil
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="hover:text-primary transition-colors relative group" href="#services">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="hover:text-primary transition-colors relative group" href="#institut">
            L’Institut
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a className="hover:text-primary transition-colors relative group" href="#contact">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <button className="bg-primary hover:bg-primary/90 text-background-dark font-display font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] px-6 md:px-8 py-3 rounded-md transition-all active:scale-95">
          Prendre RDV
        </button>
      </div>
    </header>
  );
};

export default Header;
