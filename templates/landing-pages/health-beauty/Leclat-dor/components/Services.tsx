import React from 'react';
import { branding } from '../config/branding';
import { content } from '../config/content';

/**
 * Services section displaying categorized beauty treatments.
 * Content is driven by the `content.services` configuration.
 */
const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-accent-dark/40 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-primary font-display uppercase tracking-[0.4em] text-xs font-bold">{content.services.badge}</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">{content.services.title}</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            {content.services.description}
          </p>
          <div className="flex justify-center">
            <div className="h-px w-24 bg-primary/40 mt-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.categories.map((service, idx) => (
            <div
              key={idx}
              className="group relative p-10 rounded-2xl border border-white/5 bg-card-dark transition-all duration-700 hover:border-primary/40 hover:-translate-y-3 shadow-xl"
            >
              {/* Background accent on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl"></div>

              <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-background-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <h4 className="text-white text-2xl font-serif mb-6 group-hover:text-primary transition-colors">{service.title}</h4>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light min-h-[80px]">
                {service.description}
              </p>

              <a
                className="inline-flex items-center gap-3 text-primary font-display text-[10px] uppercase tracking-[0.2em] font-bold group-hover:gap-5 transition-all"
                href="#"
              >
                Découvrir
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="text-gray-500 hover:text-white font-display text-xs uppercase tracking-[0.3em] flex items-center gap-3 mx-auto transition-colors group">
            Consulter la carte complète
            <div className="w-6 h-[1px] bg-gray-600 group-hover:bg-primary group-hover:w-12 transition-all"></div>
          </button>
        </div>
      </div>
    </section>
  );
};


export default Services;
