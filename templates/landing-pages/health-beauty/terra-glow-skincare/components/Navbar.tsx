
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-sage-soft py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8">
        <div className="flex items-center gap-12">
          <Link to="#" className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-3xl text-primary">eco</span>
            <h2 className="text-xl font-bold tracking-tight uppercase wide-tracking">Terra Glow</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="#shop" className="text-xs font-semibold uppercase wide-tracking hover:text-primary transition-colors">Shop</Link>
            <Link to="#story" className="text-xs font-semibold uppercase wide-tracking hover:text-primary transition-colors">Our Story</Link>
            <Link to="#consultation" className="text-xs font-semibold uppercase wide-tracking hover:text-primary transition-colors">Consultation</Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-2xl hover:text-primary transition-colors">search</button>
          <button className="relative material-symbols-outlined text-2xl hover:text-primary transition-colors">
            shopping_bag
            <span className="absolute -top-1 -right-1 bg-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold text-black">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
