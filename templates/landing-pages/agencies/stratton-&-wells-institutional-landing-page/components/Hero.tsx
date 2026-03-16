
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section class="relative w-full py-12 lg:py-24 px-6 lg:px-20 bg-beige-light border-b border-gray-200">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-8">
          <span class="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
            Established 1924 — London & New York
          </span>
          <h1 class="text-5xl lg:text-7xl font-black text-[#0e111b] leading-[1.05] tracking-tight">
            Defining Excellence in <span class="text-primary">Global Strategy</span>
          </h1>
          <p class="text-lg text-gray-600 max-w-xl leading-relaxed font-medium">
            A heritage of trust and a future-focused perspective for the world's most prestigious institutions. We provide unparalleled corporate guidance through rigorous analysis.
          </p>
          <div class="flex flex-wrap gap-4 pt-4">
            <button class="bg-primary text-white px-8 py-4 rounded-lg font-bold uppercase tracking-[0.2em] text-[11px] hover:scale-105 transition-transform shadow-md">
              View Our Portfolio
            </button>
            <button class="bg-white border border-gray-300 px-8 py-4 rounded-lg font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-gray-50 transition-colors">
              The Partnership
            </button>
          </div>
        </div>
        <div class="lg:col-span-5 relative group">
          <div class="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative border-8 border-white bg-gray-200">
            <img 
              alt="Institutional Excellence" 
              class="w-full h-full object-cover grayscale-[0.3] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700" 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-multiply opacity-50"></div>
          </div>
          <div class="absolute -bottom-6 -left-6 bg-white p-8 rounded-lg shadow-2xl border border-gray-100 hidden sm:block animate-fade-in-up">
            <p class="text-4xl font-black text-primary leading-none">$420B+</p>
            <p class="text-[9px] uppercase font-bold tracking-[0.25em] text-gray-400 mt-2">Assets Under Advisory</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
