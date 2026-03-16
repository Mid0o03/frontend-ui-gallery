
import React from 'react';
import { GAZETTE_ARTICLES } from '../constants';

const Gazette: React.FC = () => {
  return (
    <section class="py-20 px-6 lg:px-20 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="border-y-2 border-black py-4 mb-12 flex justify-between items-center px-2">
          <span class="text-[10px] font-bold uppercase tracking-[0.5em]">The Institutional Gazette</span>
          <span class="text-[10px] font-bold uppercase tracking-[0.2em]">Autumn Edition — Vol. XLVIII</span>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {GAZETTE_ARTICLES.map((article, idx) => (
            <div key={idx} className={`space-y-6 flex flex-col ${idx === 0 ? 'md:pr-10' : idx === 1 ? 'md:px-10' : 'md:pl-10'} py-8 md:py-0`}>
              <div>
                <span class="inline-block bg-primary/10 text-primary px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded mb-6">
                  {article.category}
                </span>
                <h3 class="text-2xl font-bold leading-tight mb-4 tracking-tight">
                  {article.title}
                </h3>
                <p class="text-sm leading-relaxed text-gray-500 font-medium">
                  {article.excerpt}
                </p>
              </div>

              {article.cta && (
                <a href="#" class="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-primary pb-1 group w-fit mt-auto">
                  {article.cta}
                  <span class="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              )}

              {article.quote && (
                <div class="pt-6 border-t border-dashed border-gray-300 mt-auto">
                  <p class="italic text-[11px] text-gray-500 leading-relaxed font-medium">
                    "{article.quote}"
                  </p>
                </div>
              )}

              {article.stats && (
                <div class="grid grid-cols-2 gap-4 mt-auto">
                  {article.stats.map((stat) => (
                    <div key={stat.label} class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <p class="text-2xl font-black text-[#0e111b]">{stat.value}</p>
                      <p class="text-[8px] uppercase font-bold tracking-[0.1em] text-gray-400 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gazette;
