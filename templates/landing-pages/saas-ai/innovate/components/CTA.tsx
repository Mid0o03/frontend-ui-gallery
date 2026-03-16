
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-primary p-12 text-center text-white shadow-2xl md:p-20">
        <h2 className="font-heading text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
          Assez parlé.<br />
          <span className="text-secondary">Passez à l'action.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-white/90 md:text-xl">
          La révolution ne vous attendra pas. Réservez votre démo et découvrez la puissance de la véritable différenciation.
        </p>
        <button className="mt-12 rounded-full bg-secondary px-12 py-5 text-xl font-black uppercase tracking-widest text-black shadow-xl transition-all hover:scale-105 hover:brightness-110 active:scale-95">
          Je veux ma démo
        </button>
      </div>
    </section>
  );
};

export default CTA;
