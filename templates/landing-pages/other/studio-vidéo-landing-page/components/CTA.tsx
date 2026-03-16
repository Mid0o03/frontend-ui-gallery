
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-6 lg:px-20 text-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-16 leading-tight">
          Prêt à créer le <br /><span className="text-primary italic">futur?</span>
        </h2>
        
        <button className="w-full md:w-auto bg-primary text-black text-2xl md:text-4xl lg:text-5xl font-black py-10 px-16 rounded-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_60px_rgba(56,249,26,0.4)]">
          DÉMARRER UN PROJET
        </button>
        
        <p className="mt-16 text-white/40 uppercase tracking-[0.3em] text-xs md:text-sm">
          Basé à Paris — Disponible partout dans le monde
        </p>
      </div>
    </section>
  );
};

export default CTA;
