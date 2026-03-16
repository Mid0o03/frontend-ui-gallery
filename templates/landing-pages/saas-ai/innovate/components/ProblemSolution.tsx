
import React from 'react';
import Icon from './Icon';

const ProblemSolution: React.FC = () => {
  return (
    <section id="probleme" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
            Le conformisme est votre<br />
            <span className="text-primary">plus grand ennemi.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            Le marché est saturé de solutions fades qui vous maintiennent dans la moyenne. Nous existons pour briser ce statu quo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Problem Card */}
          <div className="rounded-2xl border border-white/10 bg-background-card p-8">
            <Icon name="cancel" className="mb-4 text-secondary" size={40} />
            <h3 className="mb-3 text-2xl font-black text-white">Le Problème Commun</h3>
            <p className="text-lg text-white/60">
              Des outils rigides et sans inspiration qui brident votre potentiel et vous forcent à vous adapter à leurs limites.
            </p>
          </div>

          {/* Solution Card */}
          <div id="solution" className="relative rounded-2xl border border-primary/50 bg-background-card p-8 shadow-[0_0_30px_rgba(248,0,88,0.15)]">
            <Icon name="rocket_launch" className="mb-4 text-primary" size={40} />
            <h3 className="mb-3 text-2xl font-black text-white">Notre Solution Radicale</h3>
            <p className="text-lg text-white/60">
              Une plateforme dynamique, conçue pour l'audace et la performance, qui libère votre créativité et amplifie votre impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
