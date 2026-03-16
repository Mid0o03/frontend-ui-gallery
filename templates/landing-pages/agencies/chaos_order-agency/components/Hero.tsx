import React from 'react';
import Button from './ui/Button';
import { content } from '../config/content';

const Hero: React.FC = () => {
  return (
    <header className="relative pt-40 pb-20 px-4 min-h-[95vh] flex flex-col items-center justify-center overflow-hidden">

      {/* Abstract Background Elements */}
      <div className="absolute top-32 left-[-2%] md:left-[5%] w-24 h-24 md:w-32 md:h-32 rounded-full border-[3px] border-black bg-white opacity-60 z-0 animate-bounce delay-700 duration-3000"></div>
      <div className="absolute bottom-40 right-[-5%] md:right-[10%] w-36 h-36 md:w-48 md:h-48 border-[3px] border-black bg-white opacity-60 rotate-12 z-0"></div>

      <div className="relative z-10 w-full max-w-[1100px] text-center flex flex-col gap-6 items-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border-[3px] border-black bg-white px-4 py-1 rounded-full shadow-neo rotate-[-2deg] hover:rotate-0 transition-transform cursor-default">
          <span className="w-3 h-3 bg-red-500 rounded-full border-2 border-black animate-pulse"></span>
          <span className="font-bold text-sm tracking-widest">{content.hero.badge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-black">
          <span className="block mix-blend-multiply">{content.hero.title.line1}</span>
          <span className="text-transparent text-stroke-3 block relative">
            {content.hero.title.line2}
            {/* Outline effect tweak for better accessibility/visual if stroke isn't supported perfectly */}
            <span className="absolute top-0 left-0 -z-10 text-white w-full h-full text-stroke-3" aria-hidden="true">{content.hero.title.line2}</span>
          </span>
        </h1>

        {/* Subheading */}
        <div className="bg-white border-[3px] border-black p-4 md:p-6 shadow-neo-lg rotate-[1deg] mt-8 max-w-2xl transform hover:scale-105 transition-transform">
          <p className="text-black text-lg md:text-xl font-bold leading-tight">
            {content.hero.subtitle}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12 items-center">
          <Button variant="black" className="rounded-full px-8 py-4 text-lg border-[3px] shadow-neo-lg hover:shadow-neo hover:translate-x-1 hover:translate-y-1">
            {content.hero.cta_primary}
          </Button>

          <button className="flex items-center gap-2 px-8 py-4 font-bold text-lg hover:underline decoration-4 underline-offset-4 group">
            {content.hero.cta_secondary}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;