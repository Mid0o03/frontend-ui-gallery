
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative overflow-hidden pt-6 pb-20 px-4 md:px-10 lg:px-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[15rem]">filter_vintage</span>
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 pointer-events-none rotate-45">
        <span className="material-symbols-outlined text-[15rem]">spa</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content Card */}
        <div className="bg-terracotta text-white p-10 md:p-16 rounded-[3rem] organic-shape-2 shadow-2xl flex flex-col justify-center gap-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
            Purely Artisanal. <br/>Naturally You.
          </h1>
          <p className="text-lg md:text-xl text-cream/90 font-light max-w-md">
            Experience handcrafted luxury with our seed-to-skin organic collection. Harvested with love, bottled with care.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-primary text-olive px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Shop the Harvest
            </button>
            <button className="border-2 border-cream/30 hover:bg-cream/10 px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Our Story
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative group">
          <div className="absolute -inset-6 bg-primary/20 organic-shape blur-3xl group-hover:bg-primary/30 transition-all"></div>
          <div className="relative w-full aspect-square organic-shape overflow-hidden shadow-2xl border-[10px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecee?q=80&w=2070&auto=format&fit=crop" 
              alt="Organic Skincare" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          
          {/* Badge */}
          <div className="absolute -bottom-8 -left-4 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4">
            <div className="size-14 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-olive text-3xl">verified</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-black opacity-40">Certified</p>
              <p className="font-bold text-xl">100% Organic</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
