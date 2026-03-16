import React from 'react';
import { content } from '../config/content';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center items-center pt-32 pb-20 px-6 min-h-screen overflow-hidden">

      {/* Decorative Side Text */}
      <div className="absolute top-1/3 left-8 lg:left-12 text-[10px] font-mono text-gray-600 rotate-90 origin-left hidden lg:block tracking-widest">
        {content.hero.sideText.top}
      </div>
      <div className="absolute bottom-20 right-8 lg:right-12 text-[10px] font-mono text-gray-600 hidden lg:block tracking-widest">
        {content.hero.sideText.bottom}
      </div>

      {/* Main Content */}
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-8 z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#333] rounded-full px-3 py-1 bg-[#1a1a1a] hover:border-primary/50 transition-colors duration-300">
          <span className="material-symbols-outlined text-primary text-sm">terminal</span>
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{content.hero.badge}</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-600 animate-text-shimmer bg-[length:200%_auto]">
          {content.hero.title.line1}<br />
          <span className="text-white">{content.hero.title.line2}</span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed font-light">
          {content.hero.description}
        </p>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <a href="#work" className="bg-primary hover:bg-primary-dark text-black h-12 px-8 rounded-full font-bold text-sm uppercase tracking-wide transition-all hover:scale-105 flex items-center gap-2">
            {content.hero.cta}
            <span className="material-symbols-outlined text-lg">arrow_downward</span>
          </a>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;