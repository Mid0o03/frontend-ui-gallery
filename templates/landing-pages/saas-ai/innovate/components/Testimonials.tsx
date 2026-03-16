
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="temoignages" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
            Les pionniers <span className="text-primary">nous adorent.</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Ils ont osé faire le saut. Leurs résultats parlent d'eux-mêmes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-background-card p-8">
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="h-14 w-14 rounded-full border-2 border-primary object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-white/50">{t.role}, {t.company}</p>
                </div>
              </div>
              <blockquote className="text-xl font-medium italic text-white/90">
                "{t.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
