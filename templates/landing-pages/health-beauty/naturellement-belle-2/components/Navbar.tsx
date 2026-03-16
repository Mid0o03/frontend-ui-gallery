
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 px-4 md:px-10 lg:px-20 py-4 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/40 backdrop-blur-sm rounded-full border border-terracotta/10 px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-terracotta text-3xl">eco</span>
          <span className="text-xl font-extrabold tracking-tight text-olive">Naturellement Belle</span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {['Shop', 'Ingredients', 'Philosophy', 'Sustainability'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="text-sm font-semibold hover:text-terracotta transition-colors">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full ring-2 ring-white"></span>
          </button>
          <button className="hidden sm:flex items-center gap-2 bg-olive text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-terracotta transition-all shadow-md">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
