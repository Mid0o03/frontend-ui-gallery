
import React from 'react';
import heroImage from '../src/assets/images/hero_bonsai.png';
import { siteContent } from '../src/config/content';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="lg:w-5/12 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Timeless</span>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Elegant</span>
            </div>

            <h1 className="font-display text-[8rem] md:text-[12rem] text-primary uppercase tracking-tighter leading-[0.8] mb-8 select-none">
              {siteContent.hero.title}
            </h1>

            <p className="mt-6 mb-12 max-w-lg mx-auto lg:mx-0 text-stone-600 dark:text-stone-400 leading-relaxed text-lg italic">
              {siteContent.hero.description}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-primary text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all">
                {siteContent.hero.cta}
              </button>
              <button className="bg-white/50 dark:bg-stone-700/50 text-stone-800 dark:text-white font-bold py-4 px-10 rounded-full backdrop-blur-sm hover:bg-white dark:hover:bg-stone-700 transition-all">
                The Gallery
              </button>
            </div>
          </div>

          <div className="lg:w-6/12 relative">
            <div className="absolute -bottom-6 -right-6 lg:-right-12 z-20 bg-primary px-10 py-6 rounded-3xl shadow-2xl float-anim">
              <p className="text-white text-7xl font-display tracking-widest leading-none">盆栽</p>
              <p className="text-white/70 text-xs font-bold mt-2 tracking-[0.4em] uppercase">Spirit of Nature</p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
              <img
                alt="Majestic Bonsai"
                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                src={heroImage}
              />
            </div>

            {/* Side Labels */}
            <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 hidden xl:flex items-center space-x-4 -rotate-90 origin-center pointer-events-none">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-stone-300 dark:text-stone-700">Miniature</span>
              <div className="w-12 h-px bg-stone-300 dark:text-stone-700"></div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-stone-300 dark:text-stone-700">Eternal</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
