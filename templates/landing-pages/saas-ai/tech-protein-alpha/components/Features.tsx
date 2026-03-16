
import React from 'react';

const featureList = [
  {
    icon: 'memory',
    title: 'Nano-Filtration',
    description: 'Cross-flow micro-filtration at the sub-micron level removes all impurities, ensuring the highest protein-to-weight ratio in its class.'
  },
  {
    icon: 'bolt',
    title: 'Rapid Delivery',
    description: 'Hydrolyzed peptide chains bypass complex digestion stages, delivering essential amino acids to muscle tissue within minutes.'
  },
  {
    icon: 'verified_user',
    title: 'Ionic Purity',
    description: 'Zero added sugars, no metallic residue, and no artificial thickening agents. Just the molecular building blocks of power.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="w-full bg-surface-dark py-24 px-6 border-y border-border-dark">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {featureList.map((feature, i) => (
          <div key={i} className="flex flex-col gap-4 group">
            <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </span>
            <h4 className="text-white text-xl font-bold uppercase tracking-widest border-l-2 border-primary pl-4">
              {feature.title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
