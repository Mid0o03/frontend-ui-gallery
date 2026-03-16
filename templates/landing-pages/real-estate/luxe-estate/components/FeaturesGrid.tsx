
import React from 'react';
import { FEATURES } from '../constants';

const FeaturesGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 border-t border-black/5 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
        {FEATURES.map((feature, idx) => (
          <div 
            key={feature.id} 
            className="flex flex-col gap-6 group animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <span className="material-symbols-outlined opacity-30 group-hover:opacity-100 group-hover:text-primary transition-all duration-500">
              {feature.icon}
            </span>
            <div>
              <h5 className="font-bold text-[11px] uppercase tracking-widest-xl mb-4 text-black/80">
                {feature.title}
              </h5>
              <p className="text-sm opacity-60 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
