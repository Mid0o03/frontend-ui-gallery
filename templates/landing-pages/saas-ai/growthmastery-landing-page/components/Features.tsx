import React from 'react';
import { content } from '../config';

const Features: React.FC = () => {
  const { features } = content;

  return (
    <section className="py-20 bg-white dark:bg-card-dark/50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{features.title}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.items.map((feature, idx) => (
            <div key={idx} className="bg-background-light dark:bg-card-dark p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors group">
              <div className="size-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Last feature is the callout card */}
          <div className="bg-gradient-to-br from-primary to-blue-700 p-8 rounded-2xl flex flex-col justify-center items-center text-center text-white shadow-glow">
            <h3 className="text-2xl font-bold mb-2">And much more...</h3>
            <p className="opacity-90 mb-6">50+ hours of content awaits.</p>
            <a href="#curriculum" className="bg-white text-primary px-6 py-2 rounded-full text-sm font-bold hover:bg-slate-100 transition-colors">
              View Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;