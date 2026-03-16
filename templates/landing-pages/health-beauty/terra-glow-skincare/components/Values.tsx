
import React from 'react';
import { VALUES } from '../constants';

const Values: React.FC = () => {
  return (
    <section className="py-24 px-8 border-b border-sage-soft bg-stone-soft/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {VALUES.map((value, idx) => (
          <div key={idx} className="text-center group">
            <span className="material-symbols-outlined text-4xl mb-6 text-primary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              {value.icon}
            </span>
            <h3 className="font-serif text-2xl mb-4 italic">{value.title}</h3>
            <p className="text-sm font-light leading-relaxed text-black/60 max-w-xs mx-auto">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
