
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 text-center">
      <div className="bg-white p-12 md:p-24 rounded-[3rem] shadow-soft-card relative overflow-hidden">
        <div className="soft-bg-blob bg-primary/10 w-[300px] h-[300px] -top-20 -right-20"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-text-dark">Prêt à transformer votre quotidien ?</h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">
            Rejoignez des milliers d'utilisateurs satisfaits et commencez votre période d'essai gratuite de 14 jours.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95">
              Démarrer maintenant
            </button>
            <button className="px-10 py-4 bg-white text-text-dark font-bold rounded-full shadow-soft-raised hover:shadow-soft-pressed transition-all">
              Contacter la vente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
