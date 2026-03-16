
import React from 'react';
import { ChapterData } from '../types';

interface ChapterProps {
  data: ChapterData;
  reversed?: boolean;
}

const Chapter: React.FC<ChapterProps> = ({ data, reversed }) => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 mb-32 md:mb-52" id={data.id}>
      <div className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Content Side */}
        <div className="w-full md:w-1/2">
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.3em] mb-6 block font-sans">
            {data.chapterNumber}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {data.title}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-12 opacity-80 text-accent-green italic font-medium">
            {data.intro}
          </p>
          
          <div className="space-y-12 md:space-y-16">
            {data.dishes.map((dish, index) => (
              <div key={index} className="group">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="italic opacity-70 text-lg mb-3">
                  {dish.description}
                </p>
                {dish.pairing && (
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-px bg-primary/30"></span>
                    <span className="text-[10px] uppercase tracking-[0.15em] font-sans font-bold opacity-40">
                      Paired with: {dish.pairing}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/5] bg-white/50 overflow-hidden shadow-2xl group">
            <img 
              alt={data.imageAlt} 
              className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" 
              src={data.imageUrl} 
            />
            {data.imageCaption && (
              <div className={`absolute ${reversed ? 'top-8 left-8 transform rotate-180' : 'bottom-8 right-8'} text-white/40 text-[9px] uppercase tracking-[0.4em] vertical-text font-sans font-bold pointer-events-none`}>
                {data.imageCaption}
              </div>
            )}
            <div className="absolute inset-0 bg-text-dark/5 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapter;
