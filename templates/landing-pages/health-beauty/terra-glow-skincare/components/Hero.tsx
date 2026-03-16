
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center animate-pulse" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUZVQAvxhZU-JTbkafX9TfFeOauuEuo3-9dqreHLUig4QClREQMkxs1WgvSEOKcFbaJu97ETro7biHaRs79VNn21GMnrg2zN6hdNnHGfaxX4S0hvahDFlNzj0zEoh_VFA5KpG-gdwteXAv6rw54yyt1d1S0hsVZGKcMJnBxipBxr1rWRw_DhrCTWE6Sj4drdFC8Yc-VtRnX77F1pQcBzeeN8faswVOlVYY86OpyPxzFnAAHonXJnmCTl1wVs6xXYtvPRfNmk1HAtU')` }}
        />
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      <div className="relative z-10 text-center max-w-2xl px-4 flex flex-col items-center">
        <h1 className="font-serif text-6xl md:text-8xl mb-6 italic tracking-tight leading-none">Pure Radiance</h1>
        <p className="text-lg md:text-xl font-light mb-10 wide-tracking text-[#131811]/80 max-w-lg">
          Artisanal skincare handcrafted for the modern ritual. Inspired by earth, refined by science.
        </p>
        <button className="bg-primary hover:bg-[#52d011] text-black px-12 py-5 rounded-full font-bold uppercase wide-tracking text-sm transition-all hover:scale-105 active:scale-95 shadow-xl">
          Discover the Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
