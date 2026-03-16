
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-like feel */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecee?auto=format&fit=crop&q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-forest/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block text-primary font-bold uppercase tracking-[0.4em] mb-6 text-xs sm:text-sm animate-fade-in">
          Est. 2018 — Small Batch Only
        </span>
        <h2 className="font-serif text-5xl md:text-8xl text-white mb-8 leading-[1.1] max-w-5xl mx-auto">
          Beauty, Guided by Hands. <br/>
          <span className="italic">Not Machines.</span>
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Experience the slow-beauty philosophy through our hand-poured botanical blends, cured in sunlight and bottled with intention.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button className="bg-primary hover:bg-white text-forest px-10 py-5 rounded-lg font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all duration-300">
            Shop the Current Batch
          </button>
          <button className="border border-white/40 hover:border-white text-white px-10 py-5 rounded-lg font-bold text-xs uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            Discover Our Process
          </button>
        </div>
      </div>
      
      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
