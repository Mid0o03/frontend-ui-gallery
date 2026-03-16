
import React from 'react';
import { TICKETS } from '../constants';

const Tickets: React.FC = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto" id="tickets">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">Select Your Entry</h2>
        <p className="text-white/40 max-w-lg mx-auto">All passes include full access to the Neo-Tokyo festival grounds, standard restrooms, and water stations.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {TICKETS.map((tier) => (
          <div 
            key={tier.id} 
            className={`relative flex flex-col p-10 rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${
              tier.isPopular 
                ? 'bg-primary/5 border-primary shadow-[0_0_40px_rgba(19,127,236,0.1)]' 
                : tier.color === 'neon-pink' 
                  ? 'bg-white/[0.02] border-neon-pink/30 hover:border-neon-pink shadow-none'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/30 shadow-none'
            }`}
          >
            {tier.isPopular && (
              <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 bg-primary text-[10px] font-black uppercase px-6 py-2 rounded-full tracking-[0.2em] shadow-lg">
                Popular
              </div>
            )}

            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-1">{tier.name}</h3>
                <span className={`${tier.color === 'neon-pink' ? 'text-neon-pink' : 'text-primary'} font-bold text-[10px] uppercase tracking-[0.3em]`}>
                  {tier.tagline}
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-4xl font-mono font-bold">${tier.price}</span>
              </div>
            </div>

            <ul className="space-y-5 mb-12 flex-grow">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <svg className={`w-5 h-5 flex-shrink-0 ${tier.color === 'neon-pink' ? 'text-neon-pink' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="opacity-80 font-medium leading-tight">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full py-5 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 ${
                tier.isPopular 
                  ? 'bg-primary text-white hover:bg-primary/80 shadow-[0_0_20px_rgba(19,127,236,0.4)]' 
                  : tier.color === 'neon-pink'
                    ? 'border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white'
                    : 'bg-white/5 border border-white/20 hover:bg-white hover:text-black'
              }`}
            >
              {tier.id === 'ultra' ? 'Inquire Now' : 'Purchase Pass'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tickets;
