import React from 'react';
import { CONTENT } from '../config/content';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-background-dark" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-display font-semibold mb-4 text-green-900 dark:text-primary">Our Promise</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Pure ingredients for a guilt-free glow. We believe in transparency and sustainability in every drop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {CONTENT.benefits.map((benefit) => (
            <div key={benefit.id} className="flex flex-col items-center text-center group">
              <div className="size-24 rounded-full bg-secondary dark:bg-surface-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <span className="material-symbols-outlined text-4xl text-green-700 dark:text-primary">{benefit.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed px-4">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;