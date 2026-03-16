
import React from 'react';
import { BONSAI_STYLES } from '../constants';
import { siteContent } from '../src/config/content';

const StylesGrid: React.FC = () => {
  return (
    <section id="styles" className="py-32 bg-stone-100 dark:bg-stone-900/50 transition-colors">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-20 text-center">
          <h2 className="font-display text-6xl md:text-8xl text-stone-800 dark:text-white uppercase tracking-tighter mb-4">
            {siteContent.styles.title}
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BONSAI_STYLES.map((style) => (
            <div key={style.id} className="group relative bg-white dark:bg-stone-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src={style.imageUrl}
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-primary uppercase">{style.name}</h3>
                    <p className="text-sm font-bold text-stone-400 dark:text-stone-500 tracking-widest">{style.japanese}</p>
                  </div>
                </div>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  {style.description}
                </p>
                <button className="mt-6 text-primary font-bold text-xs tracking-widest uppercase hover:underline">
                  Learn Technique →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylesGrid;
