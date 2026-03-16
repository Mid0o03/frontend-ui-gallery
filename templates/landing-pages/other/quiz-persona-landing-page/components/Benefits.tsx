
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Une expérience conçue pour vous</h2>
          <p className="text-xl text-text-muted-light">Découvrez pourquoi notre approche personnalisée fait toute la différence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-10 bg-surface-light rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                <span className="material-symbols-outlined !text-4xl">{benefit.icon}</span>
              </div>
              <h3 className="font-bold text-2xl mb-4 leading-tight">{benefit.title}</h3>
              <p className="text-text-muted-light leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
