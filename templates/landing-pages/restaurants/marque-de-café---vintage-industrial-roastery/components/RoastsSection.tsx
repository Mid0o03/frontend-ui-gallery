
import React from 'react';
import { ROASTS } from '../constants';

const RoastsSection: React.FC = () => {
  return (
    <section id="roasts" className="py-32 bg-background-dark px-4 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-primary/40"></div>
          <h2 className="text-white text-4xl font-black stamped-text px-6 italic whitespace-nowrap">Nos Grains</h2>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-primary/40"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {ROASTS.map((roast) => (
            <div key={roast.id} className="group flex flex-col items-center text-center gap-8">
              <div className="relative p-3 rounded-full border-4 border-primary/40 copper-glow transition-all duration-700 group-hover:border-primary group-hover:rotate-6 bg-coffee-black/40">
                <div 
                  className="size-48 lg:size-64 rounded-full bg-cover bg-center overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                  style={{ backgroundImage: `url(${roast.image})` }}
                  aria-label={roast.title}
                ></div>
              </div>
              <div className="transform transition-all duration-500 group-hover:translate-y-[-5px]">
                <h3 className="text-primary text-2xl font-black uppercase tracking-widest stamped-text">
                  {roast.title}
                </h3>
                <p className="text-gray-400 mt-3 font-medium italic text-lg">{roast.description}</p>
                <div className="mt-6 h-1 w-12 bg-brick-red mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoastsSection;
