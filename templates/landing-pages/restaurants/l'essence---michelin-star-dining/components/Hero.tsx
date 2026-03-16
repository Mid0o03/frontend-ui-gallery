
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550966841-3ee3ad359051?q=80&w=2071&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <span className="text-white/90 text-sm uppercase tracking-[0.5em] mb-6 block animate-fade-in">
          Summer Harvest Season
        </span>
        <h1 className="text-white text-5xl md:text-8xl font-light italic leading-tight mb-10 max-w-5xl font-display">
          The Art of the Season
        </h1>
        <div className="w-px h-24 bg-white/40 mb-10"></div>
        <button className="group flex items-center gap-3 text-white border border-white/40 rounded-full px-10 py-4 backdrop-blur-md hover:bg-white hover:text-charcoal transition-all">
          <span className="text-xs font-bold uppercase tracking-widest">Explore the Journey</span>
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
