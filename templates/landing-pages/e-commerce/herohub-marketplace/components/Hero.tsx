
import React from 'react';

const stats = [
  { label: 'Active Heroes', value: '25k+' },
  { label: 'Total Trades', value: '100k+' },
  { label: 'Rating', value: '4.9/5' },
  { label: 'Regions', value: '120+' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 md:pt-20 pb-32 px-6 lg:px-20 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] -z-10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-accent/20 blur-[120px] -z-10 rounded-full animate-pulse-slow delay-700"></div>

      {/* Floating Bubbles */}
      <div className="absolute hidden xl:block top-20 left-[10%] animate-float">
        <div className="w-24 h-24 rounded-full border-4 border-violet-accent overflow-hidden bg-slate-800 shadow-2xl">
          <img 
            className="w-full h-full object-cover" 
            alt="Creator avatar" 
            src="https://picsum.photos/seed/hero1/200/200"
          />
        </div>
      </div>
      <div className="absolute hidden xl:block top-60 left-[5%] animate-float delay-1000">
        <div className="w-16 h-16 rounded-full border-4 border-primary overflow-hidden bg-slate-800 shadow-2xl">
          <img 
            className="w-full h-full object-cover" 
            alt="Creator avatar" 
            src="https://picsum.photos/seed/hero2/200/200"
          />
        </div>
      </div>
      <div className="absolute hidden xl:block top-40 right-[15%] animate-float delay-500">
        <div className="w-28 h-28 rounded-full border-4 border-violet-accent overflow-hidden bg-slate-800 shadow-2xl">
          <img 
            className="w-full h-full object-cover" 
            alt="Creator avatar" 
            src="https://picsum.photos/seed/hero3/200/200"
          />
        </div>
      </div>
      <div className="absolute hidden xl:block bottom-40 right-[8%] animate-float delay-1500">
        <div className="w-20 h-20 rounded-full border-4 border-primary overflow-hidden bg-slate-800 shadow-2xl">
          <img 
            className="w-full h-full object-cover" 
            alt="Creator avatar" 
            src="https://picsum.photos/seed/hero4/200/200"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 hover:bg-primary/20 transition-colors cursor-pointer group">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-primary text-xs font-bold uppercase tracking-widest">New: Hero Drops Live</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-6 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
          Empowering the <span className="text-primary italic">Hero</span> in Every Maker
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
          Join a vibrant community of creators and collectors. Buy, sell, and grow together in the most friendly marketplace on the web.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-20 group">
          <div className="flex items-center p-2 rounded-full bg-white/5 border border-white/10 group-focus-within:border-primary/50 group-hover:border-white/20 transition-all shadow-2xl backdrop-blur-sm">
            <div className="flex-1 flex items-center px-4 gap-3">
              <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors">search</span>
              <input 
                className="w-full bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-500 text-base md:text-lg" 
                placeholder="What are you looking for today, Hero?" 
                type="text"
              />
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-[1.02] active:scale-95">
              Find Now
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Trending:</span>
            {['Handmade', 'TechGear', 'VintageArt', 'DigitalGoods'].map(tag => (
              <a 
                key={tag}
                className="text-xs font-bold text-slate-400 hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4" 
                href="#"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-primary/20 hover:bg-white/[0.05] transition-all group cursor-default">
              <p className="text-slate-500 text-xs font-bold uppercase mb-1 tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-black text-white group-hover:text-primary transition-colors">{stat.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
