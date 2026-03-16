
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="flex flex-col gap-4 mb-20">
      <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] text-center mb-2">
        Pourquoi nous choisir
      </h4>
      
      {BENEFITS.map((benefit) => (
        <div 
          key={benefit.id}
          className="glass-card flex items-center gap-4 p-4 rounded-full transition-all hover:bg-white/10 cursor-default group"
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-2xl">{benefit.icon}</span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-base font-bold text-white/90">{benefit.title}</h3>
            <p className="text-white/50 text-xs">{benefit.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
