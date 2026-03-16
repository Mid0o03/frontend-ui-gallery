
import React from 'react';
import { BENEFITS } from '../constants';
import Icon from './Icon';

const Benefits: React.FC = () => {
  return (
    <section id="benefices" className="px-6 py-20 bg-black/30">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
            Des bénéfices qui <span className="text-primary">changent la donne.</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Ce n'est pas juste mieux. C'est une toute nouvelle dimension de performance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-background-card p-8 transition-all hover:border-primary/50 hover:bg-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary transition-transform group-hover:scale-110">
                <Icon name={benefit.icon} size={28} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-black text-white">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
