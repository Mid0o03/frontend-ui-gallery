import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { branding } from '../config/branding';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Our Story', path: '/about' },
    { label: 'Learn', path: '/about' }, // Mapping Learn to About for this demo
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background-light/95 backdrop-blur-sm shadow-sm' : 'bg-background-light/80 backdrop-blur-sm'
      } border-b border-black/5`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-primary transition-transform group-hover:rotate-12">
              <span className="material-symbols-outlined text-3xl">{branding.logo.icon}</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-800">{branding.logo.text}</h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 text-slate-600 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
            <Link to="/contact" className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 text-slate-600 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[22px]">person</span>
            </Link>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors relative">
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 text-slate-800"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light border-b border-black/5 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 py-2 border-b border-slate-100 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};