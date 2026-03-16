import React from 'react';
import { content } from '../config/content';

const Hero: React.FC = () => {
  return (
    <header className="border-b border-border-color p-8 lg:p-16 relative overflow-hidden group min-h-[50vh] flex flex-col justify-center">
      {/* Background Texture Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
      ></div>

      <div className="flex flex-col gap-2 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-mono tracking-widest bg-primary/10">
            {content.hero.badge}
          </span>
          <div className="h-[1px] bg-border-color flex-1"></div>
        </div>

        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] uppercase text-white">
          {content.hero.title.line1}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 group-hover:text-primary transition-colors duration-500">
            {content.hero.title.line2}
          </span>
        </h1>

        <p className="max-w-xl text-lg text-gray-400 mt-8 leading-relaxed font-light">
          {content.hero.description}
        </p>
      </div>
    </header>
  );
};

export default Hero;