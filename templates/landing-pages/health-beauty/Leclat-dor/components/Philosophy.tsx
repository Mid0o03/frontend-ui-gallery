import React from 'react';
import { branding } from '../config/branding';
import { content } from '../config/content';

/**
 * Philosophy section highlighting the brand's mission and expertise.
 * Uses images and floating badges for a dynamic visual experience.
 */
const Philosophy: React.FC = () => {
  return (
    <section id="institut" className="py-32 bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-4">
            <h2 className="text-primary font-display uppercase tracking-[0.3em] text-xs font-bold">{content.philosophy.badge}</h2>
            <h3 className="text-4xl md:text-6xl font-serif leading-[1.2] text-white">{content.philosophy.title}</h3>
          </div>

          <p className="text-gray-400 leading-relaxed text-lg font-light italic border-l-2 border-primary/20 pl-8">
            "{content.philosophy.quote}"
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {content.philosophy.features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group cursor-default">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <svg className="w-3 h-3 text-primary group-hover:text-background-dark" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <span className="text-gray-300 font-display text-sm uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-8 border border-primary/10 rounded-2xl translate-x-4 translate-y-4 pointer-events-none hidden md:block"></div>
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl group">
            <img
              alt="Professional beauty facial treatment"
              className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
              <div className="text-white space-y-2">
                <p className="text-primary font-display text-xs uppercase tracking-[0.2em]">{content.philosophy.experienceImageLabel}</p>
                <p className="font-serif text-2xl italic">{branding.name} {content.philosophy.experienceImageSuffix}</p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-10 -left-10 bg-accent-dark border border-white/5 p-8 rounded-2xl shadow-2xl hidden md:block animate-pulse">
            <div className="text-center">
              <p className="text-primary text-4xl font-serif font-bold">{content.philosophy.experienceBadgeValue}</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">{content.philosophy.experienceBadgeLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
