import React, { useState } from 'react';
import { content } from '../config/content';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full grid grid-cols-12 swiss-border-b sticky top-0 z-50 bg-swiss-black/95 backdrop-blur-sm">
      {/* Logo Area */}
      <div className="col-span-12 md:col-span-3 lg:col-span-2 p-4 md:p-6 swiss-border-r flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="material-symbols-outlined text-primary group-hover:rotate-90 transition-transform duration-300">grid_view</span>
          <span className="font-bold tracking-tight text-sm uppercase text-white">{content.header.logo}</span>
        </div>
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:col-span-7 lg:col-span-8 md:flex items-center px-0">
        <nav className="flex h-full w-full">
          {content.header.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="h-full flex items-center px-6 hover:bg-[#193324] hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest swiss-border-r border-r last:border-r-0 md:last:border-r text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Ticket CTA */}
      <div className="hidden md:col-span-2 lg:col-span-2 md:flex items-center justify-center p-4 lg:border-l border-[#234832]">
        <button className="w-full bg-primary hover:bg-white text-swiss-black font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
          {content.header.ctaButton}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="col-span-12 md:hidden swiss-border-t bg-swiss-black">
          <nav className="flex flex-col">
            {content.header.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="p-4 border-b border-[#234832] text-sm font-bold uppercase tracking-widest hover:text-primary hover:pl-6 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="p-4">
              <button className="w-full bg-primary text-swiss-black font-bold text-xs uppercase tracking-widest py-4 rounded-full">
                {content.header.ctaButton}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};