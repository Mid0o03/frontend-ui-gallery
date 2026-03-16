
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 hero-mesh">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-400">Now Accepting Private Beta</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
          The Future of Wealth, <span className="text-transparent bg-clip-text gold-gradient">Redefined.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Experience institutional-grade security with a seamless asset management interface designed for the modern high-net-worth investor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto gold-gradient text-black px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group">
            Open Private Account
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
            View Solutions
          </button>
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Placeholder logos */}
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                <div className="w-20 h-3 bg-white/20 rounded-full"></div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
