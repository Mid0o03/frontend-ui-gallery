import React from 'react';
import { contentConfig } from '../src/config/content';

export const StatsSection: React.FC = () => {

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto bg-primary rounded-xl p-1 md:p-10 shadow-2xl transform -rotate-1">
        <div className="bg-white rounded-lg p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center rotate-1 border-4 border-black/10">
          {contentConfig.stats.map((stat) => (
            <div key={stat.label}>
              <p className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>{stat.value}</p>
              <p className="font-bold text-gray-400 uppercase text-[10px] md:text-xs tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
