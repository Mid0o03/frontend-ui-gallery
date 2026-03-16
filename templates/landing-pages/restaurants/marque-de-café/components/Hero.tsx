
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex flex-col items-center justify-center bg-coffee-black px-4 overflow-hidden">
      {/* Background Decoration */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none grayscale contrast-125 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coffee-black/50 to-coffee-black"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 p-8 border-4 border-primary rounded-xl rotate-[-2deg] bg-coffee-black/40 backdrop-blur-sm shadow-2xl">
          <h1 className="text-white text-6xl md:text-9xl font-black leading-none tracking-tighter opacity-90 stamped-text">
            ROASTED<br/><span className="text-primary italic">UNION</span>
          </h1>
          <p className="mt-4 text-primary text-xl font-bold tracking-[0.5em] uppercase border-t border-primary/40 pt-4">EST. 1924</p>
        </div>
        
        <h2 className="text-gray-300 text-lg md:text-2xl font-normal max-w-2xl italic mt-6 leading-relaxed">
          Vintage Industrial Coffee Roasters supplying the hard-working soul since the turn of the century.
        </h2>
        
        <div className="mt-16 animate-bounce">
          <a href="#roasts" className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-primary text-4xl">settings</span>
            <span className="text-[10px] text-primary uppercase font-bold tracking-widest">Scroll to explore</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
