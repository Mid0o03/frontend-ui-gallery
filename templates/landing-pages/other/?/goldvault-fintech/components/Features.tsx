
import React from 'react';

interface FeatureProps {
  icon: string;
  bgIcon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, bgIcon, title, description }) => (
  <div className="group bg-slate-card border border-white/5 p-10 rounded-[2.5rem] hover:border-primary/40 transition-all duration-700 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
      <span className="material-symbols-outlined text-8xl text-primary">{bgIcon}</span>
    </div>
    <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 border border-primary/20 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
    </div>
    <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-400 leading-relaxed font-light text-lg">
      {description}
    </p>
  </div>
);

export const Features: React.FC = () => {
  const features = [
    {
      icon: 'verified_user',
      bgIcon: 'shield_person',
      title: 'Secure Custody',
      description: 'Military-grade multi-signature cold storage for all digital and fiat assets, audited by top-tier global security firms.'
    },
    {
      icon: 'query_stats',
      bgIcon: 'monitoring',
      title: 'Real-time Analytics',
      description: 'Deep insights into your portfolio performance with sub-millisecond latency and advanced predictive modeling.'
    },
    {
      icon: 'language',
      bgIcon: 'public',
      title: 'Global Transfers',
      description: 'Move capital across borders instantly with the efficiency of a domestic wire, powered by our proprietary global network.'
    }
  ];

  return (
    <section id="security" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8">
              Institutional-Grade <br/>
              <span className="text-slate-500">Features for Everyone.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              Our platform combines cutting-edge technology with high-end minimalism to provide an unmatched financial experience, once reserved for the 1%.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="size-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-primary transition-all active:scale-90">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-primary transition-all active:scale-90">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
