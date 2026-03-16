import React from 'react';
import { content } from '../config';

const Pricing: React.FC = () => {
  const { pricing } = content;

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{pricing.title}</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12">{pricing.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricing.plans.map((plan, idx) => (
            <div key={idx} className={`relative bg-white dark:bg-card-dark/80 backdrop-blur-xl border ${plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-slate-200 dark:border-slate-700'} rounded-[3rem] p-10 md:p-14 shadow-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-8 py-2 rounded-bl-2xl">
                  MOST POPULAR
                </div>
              )}

              <div className="flex flex-col items-center">
                <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mb-2">{plan.name}</p>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">{plan.price}</span>
                  <span className="text-xl text-slate-500 mb-2">{plan.period}</span>
                </div>

                <button className={`w-full bg-accent hover:bg-orange-600 text-white text-xl font-bold py-5 px-8 rounded-full shadow-glow-accent transition-all transform hover:-translate-y-1 mb-8 flex items-center justify-center gap-3`}>
                  {plan.cta}
                  <span className="material-symbols-outlined">rocket_launch</span>
                </button>

                <div className="flex flex-col gap-3 text-left w-full">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-slate-500 text-sm">Secure payment via Stripe. Encrypted 256-bit connection.</p>
      </div>
    </section>
  );
};

export default Pricing;