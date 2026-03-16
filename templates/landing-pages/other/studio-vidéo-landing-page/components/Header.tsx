
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled ? 'bg-black/80 border-white/10 backdrop-blur-md py-4' : 'bg-transparent border-transparent py-6'} px-6 lg:px-20`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tighter uppercase">Studio Vidéo</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          {['Showreel', 'Projets', 'Équipe', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
        </nav>

        <button className="bg-primary text-black px-6 py-2 rounded-lg font-bold text-xs tracking-widest uppercase hover:bg-white hover:scale-105 transition-all">
          DÉMARRER
        </button>
      </div>
    </header>
  );
};

export default Header;
