
import React from 'react';
import { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const isForge = plan.id === 'forge';

  return (
    <div 
      className={`relative group flex flex-col p-8 overflow-hidden transition-all duration-500 border-2
        ${isForge 
          ? 'border-primary bg-zinc-950/95 md:-mt-4 md:mb-[-1rem] z-30 shadow-[0_0_60px_rgba(242,13,13,0.3)] scale-[1.02]' 
          : 'border-white/10 bg-zinc-950/80 hover:border-primary/50'
        }
      `}
    >
      {/* Featured Badge */}
      {plan.isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black uppercase px-4 py-1 tracking-[0.2em] italic z-20">
          MOST POPULAR
        </div>
      )}

      {/* Background Image Layer */}
      <div className={`absolute inset-0 transition-all duration-700 pointer-events-none
        ${isForge ? 'opacity-30 grayscale-0' : 'opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20'}
      `}>
        <img 
          className="w-full h-full object-cover" 
          src={plan.bgImage} 
          alt={plan.name} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-8">
          <h3 className={`font-black uppercase italic mb-2 ${isForge ? 'text-3xl text-white' : 'text-2xl text-white/90'}`}>
            {plan.name}
          </h3>
          <div className="flex items-baseline gap-1">
            <span className={`text-primary font-black leading-none ${isForge ? 'text-7xl' : 'text-6xl'}`}>
              {plan.price}
            </span>
            <span className="text-white/40 text-sm font-bold uppercase">{plan.subtitle}</span>
          </div>
          <p className={`text-xs font-black uppercase mt-2 tracking-widest ${isForge ? 'text-white/70' : 'text-white/40'}`}>
            {plan.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-white/90">
              <span className="material-symbols-outlined text-primary text-xl">
                {plan.icon}
              </span>
              {feature}
            </div>
          ))}
        </div>

        <button 
          className={`mt-auto w-full font-black py-4 uppercase italic tracking-tighter transition-all duration-300
            ${isForge 
              ? 'bg-primary text-white text-lg hover:bg-white hover:text-primary' 
              : 'bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary'
            }
          `}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
