import React, { useState } from 'react';
import Button from './ui/Button';
import { branding } from '../config/branding';
import { content } from '../config/content';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 flex justify-center w-full">
      <div className="flex items-center justify-between w-full max-w-[1200px] bg-white border-[3px] border-black rounded-full px-6 py-3 shadow-neo">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-black text-primary rounded-full p-1 border-2 border-black group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-2xl font-bold">bolt</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-black uppercase hidden sm:block">{branding.name}</span>
          <span className="text-2xl font-black tracking-tighter text-black uppercase sm:hidden">{branding.initials}</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {content.navbar.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black font-bold text-sm tracking-widest hover:underline decoration-4 decoration-primary underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Button variant="secondary" className="hidden sm:flex rounded-full px-6 py-2 text-sm shadow-[4px_4px_0px_0px_#000]">
            {content.navbar.cta}
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-1 border-2 border-black rounded bg-primary shadow-neo-hover active:translate-y-[2px] active:shadow-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-black">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white border-[3px] border-black shadow-neo rounded-2xl p-6 flex flex-col gap-4 md:hidden">
          {content.navbar.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black font-black text-2xl uppercase hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-black w-full my-2"></div>
          <Button variant="black" className="rounded-xl py-4" onClick={() => setIsMobileMenuOpen(false)}>
            {content.navbar.cta}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;