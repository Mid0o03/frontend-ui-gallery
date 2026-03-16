import React from 'react';
import { content } from '../config/content';

export const Hero: React.FC = () => {
  return (
    <>
      {/* Massive Title Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 swiss-border-b">
        <div className="col-span-12 p-4 md:p-10 lg:p-16 overflow-hidden">
          <h1 className="text-[18vw] leading-[0.8] font-bold tracking-tighter uppercase text-white break-words -ml-1 md:-ml-2 select-none animate-in fade-in duration-1000 slide-in-from-bottom-4">
            {content.hero.title.line1}<br />
            <span className="text-primary">{content.hero.title.line2}</span>
          </h1>
        </div>
      </div>

      {/* Content Split Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 swiss-border-b">
        {/* Left: The "Void" (Negative Space) */}
        <div className="hidden md:block md:col-span-4 lg:col-span-6 swiss-border-r bg-swiss-surface relative overflow-hidden group">
          {/* Decorative Grid Lines */}
          <div className="absolute top-10 left-10 w-px h-32 bg-swiss-line group-hover:h-48 transition-all duration-700"></div>
          <div className="absolute top-10 left-10 w-32 h-px bg-swiss-line group-hover:w-48 transition-all duration-700"></div>
          <span className="absolute bottom-6 left-6 font-mono text-[10px] text-[#326747] uppercase rotate-90 origin-bottom-left tracking-widest">
            {content.hero.subtitle}
          </span>
        </div>

        {/* Right: Content Column */}
        <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col">

          {/* Upper Right: Intro & Image */}
          <div className="grid grid-cols-2 h-full">
            {/* Text Block */}
            <div className="col-span-2 md:col-span-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#234832] flex flex-col justify-between min-h-[300px]">
              <div>
                <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-widest">{content.hero.intro.tag}</h2>
                <p className="text-xl md:text-2xl font-normal leading-tight text-neutral-300">
                  {content.hero.intro.text}
                </p>
              </div>
              <div className="mt-12">
                <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors group">
                  <span className="uppercase text-xs font-bold tracking-widest">{content.hero.intro.cta}</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Image Block */}
            <div className="col-span-2 md:col-span-1 relative min-h-[300px] md:min-h-auto bg-[#193324] overflow-hidden group cursor-none">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url('${content.hero.featuredImage.url}')` }}
              ></div>
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                <span className="text-[10px] font-mono uppercase text-white">{content.hero.featuredImage.label}</span>
              </div>
            </div>
          </div>

          {/* Lower Right: Mini Grid Features */}
          <div className="grid grid-cols-2 swiss-border-t">
            {content.hero.features.map((feature, idx) => (
              <div key={idx} className={`p-6 md:p-8 ${idx === 0 ? 'border-r border-[#234832]' : ''} hover:bg-[#193324] transition-colors group cursor-default`}>
                <span className="material-symbols-outlined text-primary mb-4 block group-hover:scale-110 transition-transform origin-left">{feature.icon}</span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-1">{feature.title}</h3>
                <p className="text-xs text-neutral-400">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};