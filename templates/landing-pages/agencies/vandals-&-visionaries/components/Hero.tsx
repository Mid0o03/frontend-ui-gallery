
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Textures */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmRewnWPdldOWZzcP9TsJVdP5IHJmnrXIGAbHYSf4GsHpJb37Li2_7Mt6cu_DB_efmy1U2otaykot8xIUJiEALFtPzGFDPoelNpa6dynHVnJD-PUOqSO-A5wcT67gZzxWJpYSCD4fl1VnoY9H-kWTAomg_7G8f2nDXK13uQhwN79jKAycVERdLbJFTYIQW5WoHVdgDFNDcf4G4cG78Thsy5HlHksNY9Yq3V0YkLS3vHrOnFG9P9fJES4a2u0CNCfXLJhL6tzPYi_oh')" }}
      />
      
      {/* Graffiti Mural Overlay */}
      <div 
        className="absolute inset-0 z-10 flex items-center justify-center opacity-70 pointer-events-none mix-blend-screen grayscale"
        style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWGr8rmfdaGoTPodEg1_kJ3vLRGKWGqd7Zb0DPnpgFVO5lyT_Z7-e6YqORs4FMdi5sxZiJi5PiCd2nHxPjs2j-w38qd-P_hSnqaet31CFnUcZEsUrly2STepBxpsmmhzjW-eCU6pqNIqBpfa2RO_-kFTOutrto7KDF_S36_VAXfrBnMhymT7OgyTJxknCHbtFZlySia_lxgLudX9RJDDal0aXqBgmARZzlcIro7yHSqD5eQ2jWT7_DyOxs84t4XZudptEQKaG363R_')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <div className="inline-block bg-primary text-white px-4 py-1 mb-6 text-sm font-black uppercase skew-x-[-10deg] animate-pulse">
          Underground Exhibition 2024
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black stencil-text leading-[0.9] drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          VANDALS &<br />
          <span className="text-primary">VISIONARIES</span>
        </h1>
        
        <p className="mt-8 text-lg md:text-xl font-medium max-w-2xl mx-auto text-zinc-300 bg-black/40 backdrop-blur-sm p-4 border-l-4 border-primary">
          A gritty urban exhibition by the world's premier street art collective. Concrete, spray, and soul in the heart of the concrete jungle.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-10 py-4 bg-primary text-white font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">
            Enter the Void
          </button>
          <button className="px-10 py-4 border-4 border-white text-white font-black text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95">
            View Gallery
          </button>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-dark to-transparent z-30" />
    </section>
  );
};

export default Hero;
