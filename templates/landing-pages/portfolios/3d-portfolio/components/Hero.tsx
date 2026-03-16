import React from 'react';
import { content } from '../config/content';
import { branding } from '../config/branding';

/**
 * Hero Component
 * The main introductory section of the website.
 * features a 3D-like floating layout.
 * 
 * Content is managed in `src/config/content.ts` under the `hero` key.
 * Branding (status) is in `src/config/branding.ts`.
 */
const Hero: React.FC = () => {
  return (
    <header className="flex flex-col items-center text-center gap-8 py-20 md:py-32 max-w-4xl relative mx-auto">
      {/* Floating 3D Graphic Left */}
      <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 animate-float pointer-events-none">
        <div
          aria-label="Floating pink sphere"
          className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-400 rounded-full shadow-floating opacity-80"
          role="img"
          style={{ background: 'radial-gradient(circle at 30% 30%, #fbcfe8, #c084fc)' }}
        ></div>
      </div>

      {/* Floating 3D Graphic Right */}
      <div className="hidden lg:block absolute -right-20 top-1/3 -translate-y-1/2 w-32 h-32 animate-float-delayed pointer-events-none">
        <div
          aria-label="Floating blue cube"
          className="w-full h-full bg-gradient-to-br from-blue-300 to-primary rounded-[2rem] transform rotate-12 shadow-floating opacity-80"
          role="img"
          style={{ background: 'radial-gradient(circle at 30% 30%, #bae6fd, #4299f0)' }}
        ></div>
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-100 dark:border-slate-700 mb-4 animate-bounce">
        <span className="material-symbols-outlined text-primary text-xl">waving_hand</span>
        <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{branding.availability.text}</span>
      </div>

      <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
        {content.hero.title.line1} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">
          {content.hero.title.highlight}
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
        {content.hero.description}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <a
          href={content.hero.primaryButton.href}
          className="flex items-center gap-2 h-14 px-8 bg-primary text-white text-lg font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all active:scale-95 active:shadow-inner"
        >
          <span>{content.hero.primaryButton.label}</span>
          <span className="material-symbols-outlined">arrow_downward</span>
        </a>
        <button className="flex items-center gap-2 h-14 px-8 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-lg font-bold rounded-full shadow-clay dark:shadow-clay-dark hover:-translate-y-1 transition-all active:scale-95">
          <span>{content.hero.secondaryButton.label}</span>
          <span className="material-symbols-outlined text-primary">download</span>
        </button>
      </div>
    </header>
  );
};

export default Hero;