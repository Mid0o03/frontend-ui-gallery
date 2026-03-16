
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-3xl">deployed_code</span>
          <span className="text-xl font-bold tracking-tighter italic">SIGMA<span className="text-primary">PROTEIN</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Molecular Science', 'Performance', 'Testimonials', 'Protocol'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="bg-primary text-background-dark text-[10px] font-black tracking-[0.15em] uppercase px-6 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(37,175,244,0.5)] transition-all">
            OPTIMIZE SYSTEM
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
