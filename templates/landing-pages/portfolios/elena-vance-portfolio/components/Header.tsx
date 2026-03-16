import React from 'react';
import { branding } from '../config/branding';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex items-center justify-between pointer-events-none mix-blend-difference text-white">
      {/* Logo */}
      <div className="pointer-events-auto">
        <a href="#" className="group flex items-center gap-2">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight group-hover:opacity-80 transition-opacity text-white">
            {branding.name}
          </span>
        </a>
      </div>

      {/* Navigation */}
      <nav className="pointer-events-auto flex gap-6 md:gap-10">
        {['Work', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm uppercase tracking-widest font-bold hover:text-primary transition-colors text-white"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};