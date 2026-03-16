
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-16 flex flex-col items-center text-center">
      <div className="relative w-full max-w-4xl">
        <div className="ornate-border rounded-xl p-6 md:p-8 bg-sky-blue flex flex-col items-center gap-10">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-lg shadow-inner bg-white/50 relative">
            <img 
              alt="Overhead view of a perfectly symmetrical box of colorful macarons" 
              className="w-full h-full object-cover mix-blend-multiply" 
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200" 
            />
            <div className="absolute inset-0 border-[10px] md:border-[20px] border-white/20 pointer-events-none"></div>
          </div>
          
          <div className="flex flex-col items-center gap-4 max-w-2xl px-2">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-tight text-dark">
              Meticulously Crafted,<br/>
              <span className="text-primary">Perfectly Sweet</span>
            </h2>
            <p className="text-sm md:text-base font-medium text-[#87646f] max-w-lg leading-relaxed italic">
              A whimsical journey through symmetry and flavor, inspired by the art of the traditional French patisserie.
            </p>
            <button className="mt-4 flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-sm font-bold uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-transform active:scale-95">
              Enter the Patisserie
            </button>
          </div>
        </div>

        {/* Decorative Corner Stars */}
        <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 size-10 md:size-12 bg-powder-pink rounded-full border-2 border-primary flex items-center justify-center text-primary shadow-sm z-10">
          <span className="material-symbols-outlined text-sm md:text-base">star</span>
        </div>
        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 size-10 md:size-12 bg-powder-pink rounded-full border-2 border-primary flex items-center justify-center text-primary shadow-sm z-10">
          <span className="material-symbols-outlined text-sm md:text-base">star</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
