import React from 'react';
import { CONTENT } from '../config';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <header className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden border-b-3 border-black bg-neo-yellow px-4 py-20">

      {/* Decorative Floating Elements */}
      <div className="absolute left-[5%] top-[15%] hidden lg:flex animate-bounce-slow">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-3 border-black bg-white shadow-neo-lg">
          <span className="material-symbols-outlined text-5xl">visibility</span>
        </div>
      </div>

      <div className="absolute right-[10%] bottom-[20%] hidden lg:block animate-pulse">
        <div className="h-32 w-32 rotate-12 rounded-xl border-3 border-black bg-neo-green shadow-neo-lg"></div>
      </div>

      <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 inline-block -rotate-2 rounded-full border-3 border-black bg-black px-6 py-2 shadow-neo">
          <span className="text-sm font-bold uppercase tracking-widest text-white">{CONTENT.hero.badge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-8 text-6xl font-black uppercase leading-[0.9] tracking-tighter text-black sm:text-8xl md:text-9xl">
          {CONTENT.hero.title.line1} <br />
          <span className="text-stroke-3">{CONTENT.hero.title.line2}</span>
        </h1>

        {/* Subheading */}
        <p className="mb-10 max-w-2xl -rotate-1 border-3 border-black bg-white/50 p-4 text-lg font-bold uppercase leading-relaxed tracking-tight text-black backdrop-blur-sm shadow-neo sm:text-xl">
          {CONTENT.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Button variant="black" className="h-14 min-w-[200px] px-8 text-lg group">
            <span>{CONTENT.hero.cta.primary}</span>
            <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-y-1">arrow_downward</span>
          </Button>

          <Button variant="white" className="h-14 min-w-[200px] px-8 text-lg">
            {CONTENT.hero.cta.secondary}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;