
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary flex items-center justify-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Stylized Waves Mask/Pattern */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[60%] opacity-30 bg-repeat-x bg-bottom bg-contain"
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/wave-cut.png')` }}
        />
        {/* Red Sun */}
        <div className="absolute top-[20%] right-[15%] w-40 h-40 md:w-64 md:h-64 bg-vermilion rounded-full mix-blend-screen opacity-80 blur-sm animate-pulse" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-6 opacity-70">
          Graphic Design & Illustration
        </h2>
        <h1 className="text-6xl md:text-[10rem] font-black leading-none tracking-tighter mb-10 select-none">
          UKYO <span className="text-vermilion">DIGITAL</span>
        </h1>
        
        <div className="flex items-center justify-center gap-6">
          <div className="hidden sm:block h-[1px] w-12 bg-white/30" />
          <p className="text-xs md:text-sm font-light tracking-[0.3em] uppercase max-w-lg leading-relaxed text-white/80">
            Bridging Edo-period aesthetics with modern digital precision
          </p>
          <div className="hidden sm:block h-[1px] w-12 bg-white/30" />
        </div>
      </div>

      {/* Vertical Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
        <span className="writing-vertical text-[10px] font-bold text-white/40 tracking-[0.4em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-vermilion animate-scroll-line" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
