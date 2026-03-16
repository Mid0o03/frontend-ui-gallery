
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-background-dark/95 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-[1440px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">filter_frames</span>
          <h2 className="text-xl md:text-2xl font-black tracking-tighter italic">STENCIL</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-12">
          {['The Facility', 'Programs', 'Coaches'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-primary transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-primary text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-black hover:bg-white hover:text-black transition-all active:scale-95">
            Join Now
          </button>
        </nav>

        <button className="md:hidden text-white p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
