
import React from 'react';

const features = [
  {
    title: 'Secure Trading',
    description: 'Every transaction is protected by our hero-grade security, escrow systems, and verified identity checks.',
    icon: 'shield',
    bgColor: 'bg-violet-accent/30',
    iconColor: 'text-white'
  },
  {
    title: 'Expert Support',
    description: 'Our community leads are here to help you 24/7. Get advice from people who actually use the platform.',
    icon: 'headset_mic',
    bgColor: 'bg-primary/20',
    iconColor: 'text-primary'
  },
  {
    title: 'Growth Tools',
    description: 'Scale your side hustle with our advanced analytics, CRM integrations, and marketing automation tools.',
    icon: 'insights',
    bgColor: 'bg-violet-accent/30',
    iconColor: 'text-white'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black mb-4">Designed for the Community</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Explore a marketplace built on trust, creativity, and shared success with tools that help you grow.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div 
            key={feature.title} 
            className="bg-white/[0.02] border border-white/[0.05] p-10 rounded-[2.5rem] hover:border-primary/30 hover:bg-white/[0.04] transition-all group"
          >
            <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center ${feature.iconColor} mb-8 group-hover:scale-110 transition-transform`}>
              <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
