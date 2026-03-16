
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b-[0.5px] border-brand-black/20' : 'bg-transparent'}`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xl">menu_book</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">Luxury Magazine</span>
        </div>

        <nav className="hidden lg:flex items-center gap-12 text-[10px] uppercase font-medium tracking-[0.2em]">
          <Link className="hover:opacity-50 transition-opacity" to="#archive">Archive</Link>
          <Link className="hover:opacity-50 transition-opacity" to="#editions">Editions</Link>
          <Link className="hover:opacity-50 transition-opacity" to="#philosophy">Philosophy</Link>
          <Link className="hover:opacity-50 transition-opacity" to="#bespoke">Bespoke</Link>
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-[10px] uppercase font-bold tracking-widest px-8 py-2.5 border-[0.5px] border-brand-black hover:bg-brand-black hover:text-white transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
