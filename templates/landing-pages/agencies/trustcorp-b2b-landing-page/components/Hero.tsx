
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-white dark:bg-background-dark">
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent dark:from-background-dark dark:via-background-dark/95 z-10"></div>
        <img 
          alt="Corporate Team" 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-[650px] py-20 lg:py-32">
          <span className="inline-block py-1.5 px-4 mb-8 text-xs font-extrabold tracking-widest uppercase bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light rounded-full border border-primary/20">
            Partenaire de Confiance B2B
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tight">
            Solutions de confiance pour <span className="text-primary">votre entreprise</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
            Optimisez vos opérations avec une plateforme B2B robuste, sécurisée et conçue pour propulser la croissance de votre entreprise vers de nouveaux sommets.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="px-10 py-5 bg-primary text-white font-bold rounded-2xl text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/30">
              Commencer maintenant
            </button>
            <button className="px-10 py-5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-2xl text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">play_circle</span>
              Voir la démo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
