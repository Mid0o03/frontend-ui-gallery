
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center z-10 relative">
        <span className="inline-block text-[10px] uppercase tracking-[0.4em] font-medium text-matcha mb-6 animate-fade-in">
          Pure • Organic • Mindful
        </span>
        <h1 className="text-5xl md:text-8xl font-extralight text-zen-black dark:text-white leading-[1.1] mb-8">
          Nature's Calm, <br />
          <span className="italic font-light">Delivered.</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-matcha/80 dark:text-gray-400 font-light leading-relaxed mb-12">
          Curated botanicals and artisanal wellness essentials designed for a balanced and mindful life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-12 py-4 bg-zen-black dark:bg-primary-leaf text-white dark:text-zen-black rounded-full text-sm font-medium tracking-wide hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            Explore the Collection
          </button>
          <button className="w-full sm:w-auto px-12 py-4 bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md rounded-full text-sm font-medium tracking-wide hover:bg-white transition-all duration-300">
            Our Philosophy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
