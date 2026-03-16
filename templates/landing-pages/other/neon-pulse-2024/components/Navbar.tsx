
import React, { useState, useEffect } from 'react';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background-dark/90 backdrop-blur-lg py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <svg className="w-8 h-8 text-primary group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 10V3L4 14H11V21L20 10H13Z" />
          </svg>
          <h1 className="text-xl font-black tracking-tighter uppercase">Neon Pulse</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['Lineup', 'Experience', 'Tickets', 'Info'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(19,127,236,0.3)]">
          Get Tickets
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
