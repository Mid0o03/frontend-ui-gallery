
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-ink-dark/30 z-10"></div>
      
      {/* Background Image / Placeholder for video */}
      <div 
        className="h-full w-full bg-cover bg-center" 
        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAk96v95pHLJMeTtcN2TGpWIQ-X_VP0brV3XNcKnhP-FrjiAW7o3mMUCyxO7zCjV0mybuDccwPrLrmb0FPeluVwffnh3lLWQuznDpjdC-KoF0awgnlESQmpIiQV2pA6HTc6W5J9fSW4b6vTz9umlrmuoRK0Pwhc7VyQ3te0pKWg_05w0Fkeb53KcAy8corjsHCdw-u1AsW1X-lmyyZFCydxJY4mY_L_Hr7AlagSf277GCZ8U_EdXkhxTBT-KLpMwOD3yylkT_CymD_V')` }}
      ></div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-5xl md:text-7xl font-light italic mb-6 max-w-4xl leading-tight">
          Crafted with <span className="font-bold not-italic">Time</span> & Patience
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-xl mb-8 font-light">
          Slow-fermented organic breads, stone-ground flours, and the rhythm of traditional artisan hands.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-white px-8 py-3 rounded-lg text-base font-bold transition-all hover:shadow-xl hover:-translate-y-0.5">
            Explore the Menu
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-lg text-base font-bold hover:bg-white/20 transition-all">
            Our Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
