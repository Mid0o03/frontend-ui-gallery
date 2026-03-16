import React, { useState } from 'react';
import { branding } from '../config/branding';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6">
      <div className="bg-[#1e1e1e]/80 backdrop-blur-md border border-[#333] rounded-full px-6 py-3 flex items-center justify-between gap-12 shadow-2xl transition-all duration-300 w-auto">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="size-8 bg-primary rounded-full flex items-center justify-center text-black font-bold text-xs tracking-tighter group-hover:scale-110 transition-transform duration-300">
            {branding.initials}
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Work', 'Services', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Status Indicator */}
        {branding.status.available && (
          <a
            href="#contact"
            className="hidden md:flex bg-white/10 hover:bg-primary hover:text-black transition-all duration-300 rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-widest items-center gap-2"
          >
            <span className="size-2 bg-primary rounded-full animate-pulse block group-hover:bg-black"></span>
            {branding.status.text}
          </a>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-24 left-6 right-6 bg-[#1e1e1e] border border-[#333] rounded-2xl p-6 md:hidden flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 fade-in duration-200">
          <nav className="flex flex-col gap-4">
            {['Work', 'Services', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <hr className="border-[#333] my-2" />
            {branding.status.available && (
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest"
              >
                <span className="size-2 bg-primary rounded-full animate-pulse block"></span>
                {branding.status.text}
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;