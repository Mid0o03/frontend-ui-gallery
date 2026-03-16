
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center bg-white relative">
      <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <span className="text-[11px] uppercase tracking-[0.4em] opacity-60 font-medium">
          Volume No. 42 / Autumn 2024
        </span>
      </div>
      
      <div className="relative mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] font-light uppercase letter-spacing-extra leading-tight ml-[0.8em]">
          The<br/>Modern<br/>Era
        </h1>
      </div>

      <div className="mt-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <p className="text-sm md:text-lg leading-relaxed tracking-wider opacity-80 italic font-serif px-4">
          "A curation of architectural silence and the poetry of form. We explore the intersection of minimalist design and the human experience in the 21st century."
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-[9px] uppercase tracking-[0.3em] font-semibold opacity-40">Scroll to Explore</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-brand-black to-transparent opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;
