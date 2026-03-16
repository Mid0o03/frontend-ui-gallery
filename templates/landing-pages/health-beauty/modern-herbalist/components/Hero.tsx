
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/70 via-background-dark/40 to-background-dark z-10"></div>
        <img 
          alt="Botanical Texture" 
          className="h-full w-full object-cover scale-105 animate-pulse-slow" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD08Rn8-zHBO-sBNhEQG1Nfd39qzdlj401gO5zKXPsyDp-VJB_4CVm9qehvLyUB8jY0s13snJKQvg68bRhtbct449Ak8AH6inuZ0i9qjJEHBIINIHpgOOexlrA4j2yVN2m2nBCSeWq9ZH6LmdFAKKmuqPDpMg60ckBQwUlLhYliGT0eQkV3dJPgcJ63liL8292j1Jrw2hOdlAH4q9AEKuYiV5XrdAA8mnb-w7VWszo6olxLxuYz4xEvfDiN98xBD6-m0M5fX26C54U"
        />
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">Ethically Distilled • Lab Certified</span>
        <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight font-display">
          The Science of <br/> <span className="italic font-light">Botanical Purity</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Harnessing the potent intelligence of nature through precise, cold-pressed distillation techniques. Discover our curated collection of therapeutic oils.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-primary text-background-dark font-bold rounded-lg hover:shadow-[0_0_25px_rgba(23,207,54,0.4)] transition-all transform hover:-translate-y-1">
            Explore the Collection
          </button>
          <button className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm">
            Our Extraction Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
