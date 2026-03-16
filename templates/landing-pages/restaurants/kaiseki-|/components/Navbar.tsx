
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
    <header className={`flex items-center justify-between px-6 py-6 lg:px-12 border-b border-white/5 bg-background-dark/50 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 shadow-xl' : 'py-6'}`}>
      <Link to="/" className="flex items-center gap-3">
        <div className="text-primary">
          <span className="material-symbols-outlined text-4xl">filter_vintage</span>
        </div>
        <h2 className="text-xl font-bold tracking-[0.2em] font-serif-jp text-white">懐石 KAISEKI</h2>
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {['La Carte', 'Philosophie', 'L\'Artisanat', 'Accès'].map((item) => (
          <Link
            key={item}
            to="#"
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-primary transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <button className="hidden sm:block border border-primary/40 hover:bg-primary hover:text-white transition-all px-8 py-2.5 rounded text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
          Réserver
        </button>
        <button className="w-10 h-10 rounded-full bg-cedar flex items-center justify-center overflow-hidden hover:bg-primary transition-colors group">
          <span className="material-symbols-outlined text-sm group-hover:text-white">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
