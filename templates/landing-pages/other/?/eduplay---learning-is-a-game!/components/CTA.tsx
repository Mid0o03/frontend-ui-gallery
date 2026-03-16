import React from 'react';
import { contentConfig } from '../src/config/content';

export const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -top-20 -left-10 floating opacity-50 hidden md:block">
          <span className="material-symbols-outlined text-8xl text-edu-yellow rotate-12">stars</span>
        </div>
        <div className="absolute -bottom-10 -right-10 floating opacity-50 hidden md:block" style={{ animationDelay: '1.5s' }}>
          <span className="material-symbols-outlined text-8xl text-edu-blue -rotate-12">school</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-8">{contentConfig.ctaSection.title}</h2>
        <p className="text-2xl font-medium text-gray-500 mb-12">{contentConfig.ctaSection.description}</p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="candy-button bg-primary text-white text-2xl font-black px-12 py-6 rounded-full">
            {contentConfig.ctaSection.primary}
          </button>
          <button className="candy-button bg-white text-primary border-4 border-primary text-2xl font-black px-12 py-6 rounded-full">
            {contentConfig.ctaSection.secondary}
          </button>
        </div>
      </div>
    </section>
  );
};
