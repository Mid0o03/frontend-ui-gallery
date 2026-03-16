
import React from 'react';

const partners = [
  { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Slack', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Shopify', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' }
];

export const SocialProof: React.FC = () => {
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-sm mb-12">Ils nous font confiance</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, idx) => (
            <img 
              key={idx} 
              src={partner.url} 
              alt={partner.name} 
              className="h-6 md:h-8 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
