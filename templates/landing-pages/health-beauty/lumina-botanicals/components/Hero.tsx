import React from 'react';
import { CONTENT } from '../config/content';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmnRzYY-_1HkKZrN96CtfgMow3nWgMJMImzH778ZADjFkWSQ8IoEdTexoGVuCXcgiJHB4-nlGYFqyp8l9mjDGbJ7fJ0RtgG2X3oEG8is7BWNPolZDdp_Yg90rNTgmDXwJTi7oD1pbfk8M16NO9l5ECw8Aff76gGo-kzqpl1Dhv0WABt4I0zuIKa66zRpxJnIZwIP1FkqFkxs3CFn35dCA_y97nAmPtTvx3Vb-o5QXIbXKQMVTPExEAcdF54Xfz4OVPJXFF6GSHA4E"
          alt="Woman with glowing natural skin surrounded by green leaves"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 text-center max-w-3xl px-6 flex flex-col items-center gap-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold tracking-wider uppercase animate-fade-in-up">
          New Summer Collection
        </span>
        <h2 className="text-5xl md:text-7xl font-display font-medium text-white leading-[1.1] tracking-tight drop-shadow-md">
          {CONTENT.hero.title}
        </h2>
        <p className="text-lg md:text-xl text-white/90 font-light max-w-xl mx-auto leading-relaxed drop-shadow-sm">
          {CONTENT.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="px-8 py-3.5 rounded-full bg-white text-accent-text font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-lg">
            {CONTENT.hero.cta}
          </button>
          <button className="px-8 py-3.5 rounded-full bg-transparent border border-white text-white font-bold text-sm hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
            {CONTENT.hero.secondaryCta}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;