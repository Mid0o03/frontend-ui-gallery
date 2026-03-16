
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 pb-20">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Prêt à commencer ?</h2>
        <p className="text-white/50 text-sm">14 jours d'essai gratuit. Sans engagement.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        <button className="flex h-16 items-center justify-center rounded-full bg-white text-background-dark text-lg font-extrabold tracking-wide shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02] active:scale-95">
          Commencer l'essai
        </button>
        <button className="flex h-14 items-center justify-center rounded-full glass-card text-white text-sm font-bold tracking-wide transition-all hover:bg-white/10 active:scale-95">
          Découvrir nos séances
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
