
import React from 'react';

const plans = [
  {
    id: '01',
    name: 'Rawhide',
    tier: 'Basic',
    price: 45,
    features: ['24/7 Access', 'Standard Equipment', 'Locker Room'],
    unavailable: ['Personal Coaching', 'Recovery Lounge'],
    featured: false
  },
  {
    id: '02',
    name: 'Industrial',
    tier: 'Standard',
    price: 85,
    features: ['24/7 Access', 'Specialized Gear', '2 Monthly Classes', 'Recovery Lounge'],
    unavailable: ['Personal Coaching'],
    featured: true
  },
  {
    id: '03',
    name: 'Titanium',
    tier: 'Premium',
    price: 150,
    features: ['Unlimited Classes', 'Personal Coach', 'Recovery Lounge', 'Bio-Metric Analysis'],
    unavailable: [],
    featured: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-32 bg-white/[0.02] border-y border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Membership</span>
          <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-6 leading-none">Choose Your Tier</h2>
          <p className="text-white/40 tracking-[0.2em] uppercase text-[10px] max-w-sm mx-auto">No long-term contracts. No hidden fees. Just total annihilation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className={`p-12 flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group ${plan.featured ? 'bg-primary shadow-[0_30px_60px_-15px_rgba(242,13,13,0.3)]' : 'border border-white/10 bg-background-dark'}`}>
              
              <div className={`absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none select-none ${plan.featured ? 'text-white' : 'text-white'}`}>
                <span className="text-[10rem] font-black italic leading-none">{plan.id}</span>
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <h4 className={`text-[10px] font-black tracking-[0.3em] uppercase mb-2 ${plan.featured ? 'text-white/60' : 'text-white/40'}`}>
                  {plan.tier}
                </h4>
                <h3 className="text-4xl font-black uppercase mb-10 italic">{plan.name}</h3>
                
                <div className="flex items-baseline gap-2 mb-12">
                  <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                  <span className={`uppercase text-[10px] font-bold tracking-widest ${plan.featured ? 'text-white/60' : 'text-white/40'}`}>/ Month</span>
                </div>

                <ul className="space-y-5 mb-16 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-4 text-xs font-black uppercase tracking-tight">
                      <span className={`material-symbols-outlined text-xl ${plan.featured ? 'text-black' : 'text-primary'}`}>check_circle</span> 
                      {f}
                    </li>
                  ))}
                  {plan.unavailable.map(f => (
                    <li key={f} className={`flex items-center gap-4 text-xs font-black uppercase tracking-tight opacity-20`}>
                      <span className="material-symbols-outlined text-xl">cancel</span> 
                      {f}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 uppercase font-black tracking-[0.2em] text-[10px] transition-all active:scale-95 ${plan.featured ? 'bg-black text-white hover:bg-white hover:text-black' : 'border border-white/20 hover:bg-white hover:text-black'}`}>
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
