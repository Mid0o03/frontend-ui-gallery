
import React from 'react';
import { EXPERTISE_ITEMS } from '../constants';

const Expertise: React.FC = () => {
  return (
    <section class="py-24 px-6 lg:px-20 bg-background-light">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div class="max-w-2xl">
            <h2 class="text-4xl font-black uppercase tracking-tighter mb-4 text-[#0e111b]">Core Areas of Expertise</h2>
            <p class="text-gray-400 uppercase tracking-[0.25em] text-[10px] font-bold">Comprehensive solutions for complex institutional needs</p>
          </div>
          <div class="w-full md:w-auto h-px bg-gray-300 grow mx-8 hidden md:block"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden shadow-2xl">
          {EXPERTISE_ITEMS.map((item) => (
            <div key={item.title} class="bg-white p-10 hover:bg-primary transition-all group cursor-pointer">
              <span class="material-symbols-outlined text-primary text-4xl mb-8 group-hover:text-white transition-colors">
                {item.icon}
              </span>
              <h4 class="text-lg font-bold mb-4 uppercase tracking-tight group-hover:text-white transition-colors">
                {item.title}
              </h4>
              <p class="text-sm text-gray-500 leading-relaxed group-hover:text-white/80 transition-colors font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
