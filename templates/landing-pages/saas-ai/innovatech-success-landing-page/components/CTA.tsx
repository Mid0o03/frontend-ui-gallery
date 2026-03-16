
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-black mb-6 max-w-3xl mx-auto leading-tight">
            Prêt(e) à écrire votre propre histoire de succès ?
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Rejoignez des centaines d'entreprises qui, comme Innovatech, ont transformé leur façon de travailler. Obtenez des résultats similaires.
          </p>
          <button className="bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 px-8 py-4 rounded-2xl font-black text-slate-900 text-lg shadow-2xl shadow-primary/20">
            Découvrez votre propre succès
          </button>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
      </div>
    </section>
  );
};
