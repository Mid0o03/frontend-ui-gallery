
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 pb-64 overflow-visible">
      {/* Background Skew */}
      <div className="absolute inset-0 bg-surface skew-bg origin-top-left -z-10 border-b-4 border-primary"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center skew-content">
        <div className="flex flex-col gap-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full w-fit">
            <span className="material-symbols-outlined text-primary text-sm">rocket_launch</span>
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Version 2.0 Now Live</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic leading-[0.85] uppercase tracking-tighter">
            Speed <br />
            <span className="text-primary">Redefined</span><br />
            The Future Is <br />
            <span className="text-primary">Fast</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-medium">
            Experience the world's most responsive interface. Built for high-performance users who demand zero latency and maximum impact.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-carbon px-12 py-5 rounded-xl font-black uppercase text-lg tracking-wider hover:scale-105 transition-transform shadow-[0_0_30px_rgba(249,231,31,0.3)]">
              Download Now
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-xl font-black uppercase text-lg tracking-wider hover:bg-white/10 transition-all">
              View Specs
            </button>
          </div>
          
          <div className="flex gap-16 mt-6">
            <div>
              <p className="text-primary text-4xl font-black tracking-tight">0.01s</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black mt-1">Latency</p>
            </div>
            <div>
              <p className="text-white text-4xl font-black tracking-tight">1.2M+</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black mt-1">Active Users</p>
            </div>
            <div>
              <p className="text-white text-4xl font-black tracking-tight">50GB/s</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black mt-1">Data Speed</p>
            </div>
          </div>
        </div>

        {/* Device Showcase */}
        <div className="relative perspective h-[500px] flex items-center justify-center">
          <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -z-10 animate-pulse"></div>
          
          <div className="relative w-full h-full flex items-center justify-center group animate-float">
            {/* Left Phone */}
            <div className="absolute w-60 h-[480px] bg-slate-800 rounded-[2.5rem] border-4 border-white/10 shadow-2xl phone-left overflow-hidden transition-all duration-700 group-hover:rotate-y-[40deg]">
              <img 
                src="https://picsum.photos/seed/tech1/600/1200" 
                alt="UI" 
                className="w-full h-full object-cover grayscale brightness-50 contrast-125"
              />
            </div>
            {/* Right Phone */}
            <div className="absolute w-60 h-[480px] bg-slate-800 rounded-[2.5rem] border-4 border-white/10 shadow-2xl phone-right overflow-hidden transition-all duration-700 group-hover:rotate-y-[-40deg]">
              <img 
                src="https://picsum.photos/seed/tech2/600/1200" 
                alt="UI" 
                className="w-full h-full object-cover grayscale brightness-50 contrast-125"
              />
            </div>
            {/* Center Phone */}
            <div className="absolute w-64 h-[520px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.8)] phone-center z-10 overflow-hidden ring-4 ring-primary/20">
              <div className="w-full h-full bg-gradient-to-br from-carbon to-slate-800 p-6 flex flex-col gap-4">
                <div className="w-full h-40 bg-primary/20 rounded-2xl flex items-center justify-center overflow-hidden border border-primary/20">
                  <div className="w-32 h-32 bg-primary rounded-full blur-3xl opacity-40"></div>
                  <span className="material-symbols-outlined text-primary text-5xl">trending_up</span>
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-white/20 rounded-full"></div>
                  <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-3">
                   <div className="h-20 bg-white/5 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">data_usage</span>
                   </div>
                   <div className="h-20 bg-white/5 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                   </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-0 w-full h-10 flex justify-center items-start pt-2">
                <div className="w-24 h-6 bg-slate-800 rounded-full border-2 border-white/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
