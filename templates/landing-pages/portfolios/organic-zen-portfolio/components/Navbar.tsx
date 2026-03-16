
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-beige/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'
        }`}
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className={`material-symbols-outlined transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`}>
          eco
        </span>
        <h2 className={`text-xl font-light tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-[#171412]' : 'text-white'}`}>
          Organic Zen
        </h2>
      </div>

      <nav className="hidden md:flex items-center gap-12">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.href === '#' ? '/' : item.href}
            className={`text-sm tracking-widest uppercase transition-colors duration-500 hover:text-primary ${isScrolled ? 'text-[#171412]' : 'text-white'
              }`}
          >
            {item.label}
          </Link>
        ))}
        <button className="bg-primary text-white px-8 py-2.5 rounded-full text-xs tracking-widest uppercase font-bold hover:bg-dark-clay transition-all transform hover:scale-105 active:scale-95">
          Connect
        </button>
      </nav>

      <button className={`md:hidden transition-colors ${isScrolled ? 'text-[#171412]' : 'text-white'}`}>
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
};

export default Navbar;
