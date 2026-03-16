
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative h-screen w-full flex items-end p-8 md:p-24 overflow-hidden bg-background-dark">
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-[0.4] scale-110 animate-fade-in"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvtRO2n_IEFMWmh-iLbb_mN6razL4u76-9byz0xIf1ckW_0eFAwBH7YQeVVLqA_8LjdExXQz6OjABmogY3G9vPrDHeo0qyokwNU8zlP8riRIlMCQA3LUSS4IdVvq6fyGocQDE0S8Wb5E1FaIORYXcBsFz8nlc-5Il8EFWzcIwG3Nq7vfDftx2W_pJyEWEJt5ZEJMhiVcQJ6xfSkBF5eb3LEZ5F7iz-ikl52XD8QbExjKsQCRoA3KZuj2_JakPGDF1n8o-etEczHWk')" }}
      />
      
      <div className="relative z-10 max-w-5xl animate-slide-up">
        <span className="text-primary text-xs md:text-sm uppercase tracking-[0.6em] mb-6 block font-light">
          A Study in Light and Shadow
        </span>
        <h2 className="text-7xl md:text-[12rem] font-extrabold leading-[0.85] tracking-tighter mb-10 select-none">
          IMMERSE <br />
          <span className="text-transparent border-t-0 bg-clip-text bg-gradient-to-b from-white to-white/20">YOURSELF</span>
        </h2>
        
        <div className="flex flex-wrap items-center gap-10 mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Location</span>
            <span className="text-sm font-medium tracking-wide">Reykjavík, Iceland</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10"></div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Completed</span>
            <span className="text-sm font-medium tracking-wide">2024</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10"></div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Architecture</span>
            <span className="text-sm font-medium tracking-wide">Obsidian Atelier</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 flex flex-col items-center gap-4">
        <span className="text-[8px] uppercase tracking-[0.5em] vertical-text text-white/50 animate-pulse">Scroll to explore</span>
        <span className="material-symbols-outlined text-3xl font-thin text-white/30 animate-bounce">
          keyboard_double_arrow_down
        </span>
      </div>
    </section>
  );
};

export default Hero;
