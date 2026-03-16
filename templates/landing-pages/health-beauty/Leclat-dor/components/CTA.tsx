import React from 'react';
import { branding } from '../config/branding';
import { content } from '../config/content';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-background-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-[3rem] bg-accent-dark p-12 md:p-24 text-center border border-white/5 shadow-2xl">
          {/* Ambient light effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight">
                {content.cta.title.split('<br/>').map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i === 0 && <br className="hidden md:block" />}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                {content.cta.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <button className="w-full sm:w-auto bg-primary text-background-dark font-display font-bold text-xs uppercase tracking-widest px-14 py-6 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95">
                {content.cta.ctaPrimary}
              </button>
              <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white font-display font-bold text-xs uppercase tracking-widest px-14 py-6 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all active:scale-95">
                {content.cta.ctaSecondary}
              </button>
            </div>

            <div className="pt-8 flex items-center justify-center gap-8 text-gray-500 text-xs uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {content.cta.availability}
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/10"></div>
              <div>{branding.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default CTA;
