
import React from 'react';
import { Bolt, BarChart2, CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 space-y-32">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold">
            <Bolt className="w-4 h-4" />
            <span>Performance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-text-dark">
            Collaboration en <br /> temps réel
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Échangez, commentez et modifiez vos projets instantanément. Notre moteur de synchronisation ultra-rapide garantit que tout le monde reste sur la même longueur d'onde, sans latence.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3 font-semibold text-gray-700">
              <CheckCircle2 className="text-primary w-5 h-5" />
              Édition multi-utilisateurs
            </li>
            <li className="flex items-center gap-3 font-semibold text-gray-700">
              <CheckCircle2 className="text-primary w-5 h-5" />
              Commentaires contextuels
            </li>
          </ul>
        </div>
        <div className="flex-1 w-full">
          <div className="bg-white p-8 rounded-[2rem] shadow-soft-card border border-white/50">
            <div className="rounded-2xl shadow-soft-pressed bg-[#f6f7f8] aspect-video flex items-center justify-center overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                alt="Collaboration illustration" 
                src="https://picsum.photos/seed/collab/800/600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-bold">
            <BarChart2 className="w-4 h-4" />
            <span>Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-text-dark">
            Analytiques <br /> avancées
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Visualisez vos données avec une clarté exceptionnelle. Transformez vos métriques complexes en tableaux de bord élégants et exploitables pour prendre de meilleures décisions.
          </p>
          <button className="px-8 py-3 bg-white font-bold rounded-full shadow-soft-raised hover:shadow-soft-pressed transition-all">
            Explorer les outils
          </button>
        </div>
        <div className="flex-1 w-full">
          <div className="bg-white p-8 rounded-[2rem] shadow-soft-card border border-white/50">
            <div className="rounded-2xl shadow-soft-pressed bg-[#f6f7f8] aspect-video flex items-center justify-center overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                alt="Analytics dashboard illustration" 
                src="https://picsum.photos/seed/stats/800/600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
