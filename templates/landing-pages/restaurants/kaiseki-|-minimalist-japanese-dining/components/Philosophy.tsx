
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-40 flex flex-col lg:flex-row gap-20 items-center bg-background-dark overflow-hidden">
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <div className="relative">
          {/* Decorative brackets */}
          <div className="absolute -top-12 -left-12 w-48 h-48 border-l border-t border-primary/20 pointer-events-none"></div>
          
          <div className="w-[320px] h-[320px] lg:w-[500px] lg:h-[500px] bg-cedar overflow-hidden rounded-full border border-white/5 shadow-[0_0_100px_rgba(232,79,48,0.05)]">
            <div 
              className="w-full h-full bg-center bg-cover scale-110 hover:scale-100 transition-transform duration-[3000ms] ease-out" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfz__Bpl83W5Rk6ZZKi5yqPm2YXPnG4esR76-hQvLV4_x4mk0MNfYaRqUoi8gSQr3_2_5ZiiggYjoh97XsXASAwWtLckPRWbrCKLEDMuzeS70tV6BMwQw8yWrC5_Kyq2wHGLMip75rnjbsEnqqiHRrKK-rP9kXmKuO0mTTlzTDcNG29brbtxTXQdJwkkxfnmBHj95b_5AvMr0-iSViwHo8uc-uP7_R0l4xwUnpiafNUUwMcLukNkYYJML4HNKnBd70VSgHzozKPaO2")' }}
            ></div>
          </div>

          <div className="absolute -bottom-12 -right-12 w-48 h-48 border-r border-b border-primary/20 pointer-events-none"></div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-10">
        <div className="space-y-4">
          <span className="text-primary text-[10px] tracking-[0.6em] uppercase font-bold block">Wabi-Sabi</span>
          <h2 className="text-5xl lg:text-7xl font-serif-jp leading-tight text-white">
            La beauté de <br/>
            <span className="text-white/40 italic font-light">l'imperfection</span>
          </h2>
        </div>
        
        <p className="text-gray-400 font-light text-xl leading-relaxed max-w-xl">
          Chez KAISEKI, nous célébrons le naturel. Chaque ingrédient est servi à son apogée, respectant son cycle naturel et sa forme originelle. Notre cuisine ne cherche pas à impressionner, mais à toucher l'âme par sa simplicité.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 pt-6">
          <button className="bg-primary hover:bg-primary/80 text-white font-bold py-5 px-14 rounded text-[10px] uppercase tracking-[0.4em] transition-all transform hover:-translate-y-1 shadow-xl">
            Notre Histoire
          </button>
          <a href="#" className="text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-3 group text-white/70 hover:text-white transition-colors">
            Voir le lieu 
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">north_east</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
