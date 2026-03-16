
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PricingCard: React.FC<{ 
  tier: string, 
  price: string, 
  features: string[], 
  isPopular?: boolean,
  ctaText: string
}> = ({ tier, price, features, isPopular, ctaText }) => (
  <div className={`glass-effect p-10 rounded-[2.5rem] flex flex-col relative transition-all duration-300 ${isPopular ? 'border-2 border-primary/40 shadow-2xl shadow-primary/10 scale-105 z-10' : 'hover:scale-[1.02]'}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase px-5 py-2 rounded-full tracking-widest shadow-lg shadow-primary/30">
        Most Popular
      </div>
    )}
    
    <div className="mb-10">
      <h4 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-3">{tier}</h4>
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-black">${price}</span>
        <span className="opacity-40 font-bold">/mo</span>
      </div>
    </div>

    <ul className="space-y-5 mb-12 flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-3 text-sm font-medium">
          <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
          <span className="opacity-80">{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-4 rounded-2xl font-black text-sm transition-all active:scale-95 ${isPopular ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/90' : 'border border-primary/30 text-primary hover:bg-primary/5'}`}>
      {ctaText}
    </button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="px-6 py-32 lg:px-20 bg-primary/[0.03]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">Transparent Pricing</h2>
          <p className="opacity-60 text-lg max-w-xl mx-auto">
            Choose the plan that fits your current stage. No hidden fees, no long-term contracts, just clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <PricingCard 
            tier="Starter"
            price="49"
            features={["5 Projects included", "Basic Support", "Community Access", "Public Templates"]}
            ctaText="Select Starter"
          />
          <PricingCard 
            tier="Growth"
            price="99"
            isPopular
            features={["Unlimited Projects", "Priority Support", "Custom Design System", "API Integration", "Advanced Analytics"]}
            ctaText="Go Growth"
          />
          <PricingCard 
            tier="Enterprise"
            price="249"
            features={["Everything in Growth", "Dedicated Manager", "Custom Legal Agreements", "White-label Options"]}
            ctaText="Contact Sales"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
