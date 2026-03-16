import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { branding } from '../config/branding';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-gradient-to-br from-primary to-green-700 flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-primary/20">
              {branding.siteName.charAt(0)}
            </div>
            <span className="text-xl font-bold tracking-tight text-white">{branding.siteName}</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Work', 'Stack', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href={`mailto:${branding.email}`} className="hidden md:flex bg-primary hover:bg-green-400 text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(70,236,19,0.3)] transform hover:scale-105">
            Contact Me
          </a>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0a0a0a] border-b border-white/5 p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {['Work', 'Stack', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-gray-300 hover:text-primary transition-colors block p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-primary text-black px-6 py-3 rounded-full text-sm font-bold w-full mt-2">
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
};