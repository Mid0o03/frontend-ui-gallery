import React, { useState } from 'react';
import { CONTENT, BRANDING } from '../config';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b-3 border-black bg-neo-yellow px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-3 border-black bg-white shadow-neo">
            <span className="material-symbols-outlined text-black" style={{ fontSize: '24px' }}>bolt</span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-black uppercase">{BRANDING.siteName}</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {CONTENT.navigation.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-black decoration-4 underline-offset-4 hover:underline decoration-black"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" className="px-6 py-2.5">
            <span className="text-sm font-black tracking-wide">Start Project</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border-3 border-black bg-white shadow-neo active:translate-y-1 active:shadow-none transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-black">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b-3 border-black bg-neo-yellow p-6 md:hidden flex flex-col gap-4 shadow-neo-lg">
          {CONTENT.navigation.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xl font-black uppercase text-black hover:text-neo-pink"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="black" className="w-full py-4 mt-2" onClick={() => setIsMenuOpen(false)}>
            Start Project
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;