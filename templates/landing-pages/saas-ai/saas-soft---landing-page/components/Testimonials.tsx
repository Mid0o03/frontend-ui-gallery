
import React from 'react';

const testimonials = [
  {
    name: "Alex Martin",
    role: "Design Lead @ Pixel",
    text: "L'interface est d'une douceur incroyable. On ne sent plus la fatigue après une longue journée de gestion de projet. C'est l'outil que nous attendions tous.",
    img: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sophie Durand",
    role: "Fondatrice @ Horizon",
    text: "La synchronisation en temps réel est bluffante. Nous avons réduit nos réunions de moitié depuis que nous utilisons SaaS Soft pour collaborer.",
    img: "https://i.pravatar.cc/150?u=sophie"
  },
  {
    name: "Marc Lévy",
    role: "CTO @ FlowState",
    text: "La clarté des analytiques nous a permis d'identifier des goulots d'étranglement que nous n'avions jamais vus auparavant. Indispensable.",
    img: "https://i.pravatar.cc/150?u=marc"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-pastel-blue/30 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-4 text-text-dark">Aimé par les équipes créatives</h2>
          <p className="text-gray-500 font-medium">Plus de 2 000 entreprises nous font confiance pour leur gestion quotidienne.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-soft-raised border border-white/40 flex flex-col items-start gap-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full shadow-soft-pressed p-1 bg-white overflow-hidden">
                  <img className="w-full h-full rounded-full object-cover" src={t.img} alt={t.name} />
                </div>
                <div>
                  <h4 className="font-extrabold text-text-dark">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
