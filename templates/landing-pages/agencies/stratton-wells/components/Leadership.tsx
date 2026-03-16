
import React from 'react';
import { PARTNERS } from '../constants';

const Leadership: React.FC = () => {
  return (
    <section class="py-28 px-6 lg:px-20 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 text-[#0e111b]">Distinguished Leadership</h2>
          <div class="w-20 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
          <p class="text-gray-500 max-w-xl mx-auto font-medium">
            Our partners bring centuries of combined experience from the highest levels of government and industry.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PARTNERS.map((partner) => (
            <div key={partner.name} class="group">
              <div class="relative overflow-hidden rounded-xl aspect-[4/5] mb-6 border-2 border-transparent group-hover:border-primary transition-all duration-500 shadow-lg">
                <img 
                  alt={partner.name} 
                  class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                  src={partner.imageUrl}
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                  <div class="flex gap-5">
                    <button class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <span class="material-symbols-outlined text-lg">mail</span>
                    </button>
                    <button class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <span class="material-symbols-outlined text-lg">share</span>
                    </button>
                  </div>
                </div>
              </div>
              <h5 class="text-xl font-black uppercase tracking-tight text-[#0e111b] mb-1">{partner.name}</h5>
              <p class="text-[10px] font-bold text-primary tracking-[0.25em] uppercase">{partner.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
