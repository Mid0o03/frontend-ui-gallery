
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {STATS.map((stat, idx) => (
          <div 
            key={stat.id} 
            className="group border-t border-black/10 pt-10 hover:border-primary transition-all duration-700 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <span className="material-symbols-outlined mb-8 block group-hover:text-primary group-hover:translate-y-[-4px] transition-all duration-500">
              {stat.icon}
            </span>
            <h3 className="text-5xl font-extralight mb-3 tracking-tight">{stat.value}</h3>
            <p className="text-[10px] uppercase font-bold tracking-widest-xl opacity-50 group-hover:opacity-100 transition-opacity">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
