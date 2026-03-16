
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-44 pb-20 overflow-hidden">
      {/* Background Accent Text */}
      <div className="absolute top-20 -left-10 opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[20rem] font-bold leading-none uppercase -rotate-12">ESTATE</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <p className="text-[10px] uppercase font-bold tracking-widest-xl text-primary mb-6">The Specification</p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.9] max-w-5xl">
            Refined luxury in <br/> 
            <span className="italic font-normal text-black/90">every square inch.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
