
import React from 'react';

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Le Défi : Avant",
    description: "Perte de temps sur des tâches manuelles et manque de visibilité sur les projets clés."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "La Solution : Pendant",
    description: "Mise en place de notre plateforme centralisée pour automatiser les flux de travail et collaborer efficacement."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    ),
    title: "Les Résultats : Après",
    description: "Augmentation de 200% de la productivité et réduction de 15 heures de travail administratif par semaine."
  }
];

export const Process: React.FC = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">La transformation, étape par étape</h2>
          <p className="text-slate-600 text-lg">Voici comment Jean a surmonté ses défis et atteint des résultats exceptionnels.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-gray-100 bg-bg-light/50 hover:shadow-xl hover:shadow-primary/5 transition-all group">
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
