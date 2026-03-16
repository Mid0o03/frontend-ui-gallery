
import React from 'react';
import { PHILOSOPHY } from '../constants';

const Philosophy: React.FC = () => {
  return (
    <section className="w-full bg-powder-pink py-24 px-6 mt-12">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-primary">
            Our Philosophy
          </h3>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight max-w-2xl leading-tight text-dark">
            Every macaron is baked with <span className="italic">theatrical precision</span> and a touch of dreaminess.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {PHILOSOPHY.map((point, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-4 p-8 bg-white rounded-xl border border-primary/10 wes-shadow hover:-translate-y-1 transition-transform"
            >
              <span className="material-symbols-outlined text-4xl text-primary">
                {point.icon}
              </span>
              <h4 className="font-bold tracking-widest uppercase text-xs md:text-sm text-dark">
                {point.title}
              </h4>
              <p className="text-sm text-[#87646f] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
