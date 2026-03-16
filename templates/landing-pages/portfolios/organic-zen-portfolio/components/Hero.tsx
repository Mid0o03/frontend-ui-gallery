
import React from 'react';
import { HERO_VIDEO_PLACEHOLDER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center scale-110 animate-fade-in"
        style={{ backgroundImage: `url("${HERO_VIDEO_PLACEHOLDER}")` }}
      />
      
      <div className="relative z-20 text-center max-w-4xl px-6 animate-slide-up">
        <h1 className="text-white text-6xl md:text-[9rem] font-extralight italic leading-tight mb-4 tracking-tighter font-display">
          Quietly Crafted
        </h1>
        <p className="text-white/90 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          A sanctuary for creative vision and organic growth. We believe in the beauty of the intentional.
        </p>
        
        <div className="flex flex-col items-center gap-6 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-full text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-700 font-bold group">
            Explore Works
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
          <div className="mt-20 animate-float">
            <span className="material-symbols-outlined text-white font-extralight text-3xl">expand_more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
