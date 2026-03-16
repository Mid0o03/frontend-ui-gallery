
import React from 'react';

const FeatureItem: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col gap-6 text-center md:text-left p-8 rounded-2xl transition-colors hover:bg-white/50 group">
    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary mx-auto md:mx-0 shadow-sm border border-charcoal/5 group-hover:border-primary/20 transition-all">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h4 className="text-2xl font-light italic tracking-tight font-display">{title}</h4>
    <p className="text-charcoal/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-serif">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="bg-sage-light/50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem 
            icon="eco" 
            title="Provenance" 
            description="Sourcing exclusively from biodynamic farms and coastal foragers within a 50-mile radius of our kitchen."
          />
          <FeatureItem 
            icon="palette" 
            title="Artistry" 
            description="Each plate is a canvas of texture, temperature, and flavor, composed with meticulous intent and precision."
          />
          <FeatureItem 
            icon="wine_bar" 
            title="Experience" 
            description="An intimate atmosphere designed for mindful appreciation and the celebration of the fleeting present moment."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
