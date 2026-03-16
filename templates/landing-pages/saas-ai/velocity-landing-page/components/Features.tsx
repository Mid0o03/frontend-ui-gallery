
import React from 'react';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description, icon }) => (
  <div className="p-12 bg-surface group hover:bg-primary transition-all duration-500 relative overflow-hidden cursor-default">
    <div className="absolute top-0 right-0 p-8">
      <span className="text-7xl font-black text-white/5 group-hover:text-carbon/10 transition-colors italic leading-none">{number}</span>
    </div>
    <div className="relative z-10">
      <div className="mb-12 w-16 h-16 flex items-center justify-center bg-primary/5 rounded-2xl group-hover:bg-carbon/5 transition-colors">
        <span className="material-symbols-outlined text-primary text-5xl group-hover:text-carbon transition-colors">{icon}</span>
      </div>
      <h4 className="text-3xl font-black uppercase mb-6 group-hover:text-carbon transition-colors tracking-tight leading-none">{title}</h4>
      <p className="text-slate-400 group-hover:text-carbon/70 transition-colors leading-relaxed text-lg max-w-xs font-medium">
        {description}
      </p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      number: '01',
      title: 'Ultra Performance',
      icon: 'bolt',
      description: 'Proprietary rendering engine built for consistent 120fps fluid motion even under heavy processing loads.'
    },
    {
      number: '02',
      title: 'Military-Grade Security',
      icon: 'shield_with_heart',
      description: 'End-to-end post-quantum encryption with zero-knowledge architecture. Your data is your business only.'
    },
    {
      number: '03',
      title: 'Fluid UX Interface',
      icon: 'gesture',
      description: 'Intuitive micro-gestures and high-contrast accessibility themes. Designed for one-handed operation.'
    },
    {
      number: '04',
      title: 'Zero-Lag Syncing',
      icon: 'sync_alt',
      description: 'Global edge network ensures real-time data synchronization across all devices in under 10 milliseconds.'
    }
  ];

  return (
    <section id="performance" className="py-48 bg-carbon relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-6">Core Advantage</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9]">
              Engineered for the <br />High-Intensity Edge
            </h3>
          </div>
          <div className="max-w-sm border-l-4 border-primary pl-8 pb-2">
             <p className="text-slate-400 text-xl font-medium leading-relaxed">
              Our architecture is designed to handle extreme loads without breaking a sweat. Optimized at every layer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-[2rem] shadow-2xl">
          {features.map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
