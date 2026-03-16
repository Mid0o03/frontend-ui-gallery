
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-20 py-4 flex items-center justify-between ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-charcoal/5' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-2xl">eco</span>
        <h2 className="text-xl font-bold uppercase tracking-widest text-charcoal">L'Essence</h2>
      </div>

      <nav className="hidden md:flex flex-1 justify-center gap-12">
        {['Menu', 'Story', 'The Farm', 'Visit'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-charcoal text-xs font-semibold uppercase tracking-widest hover:text-primary transition-colors italic"
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-sm">
        Reserve
      </button>
    </header>
  );
};

export default Header;
