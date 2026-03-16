
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center pb-12">
      {/* Breathing Circle Container */}
      <div className="relative flex items-center justify-center mb-16">
        {/* Animated Rings */}
        <div className="breathing-effect absolute size-[320px] rounded-full bg-white/5 border border-white/10"></div>
        <div className="breathing-effect absolute size-[260px] rounded-full bg-white/5 border border-white/10 [animation-delay:-2s]"></div>
        
        {/* Core Circle */}
        <div className="relative size-48 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.05)]">
          <span className="material-symbols-outlined text-white/40 text-6xl">spa</span>
        </div>
      </div>

      <div className="space-y-4 max-w-sm">
        <h1 className="text-4xl font-black leading-tight tracking-tight">
          Retrouvez votre calme intérieur
        </h1>
        <p className="text-white/60 text-lg font-light leading-relaxed px-4">
          Une expérience de méditation fluide pour apaiser votre esprit au quotidien.
        </p>
      </div>
    </section>
  );
};

export default Hero;
