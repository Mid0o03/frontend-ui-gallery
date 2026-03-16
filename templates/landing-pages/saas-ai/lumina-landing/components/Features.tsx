
import React from 'react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="p-8 bg-white rounded-3xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all group">
    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
      <span className="text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-4">Features</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Built for the modern web, powered by intelligence.
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="⚡"
            title="Blazing Fast"
            desc="Optimized delivery pipeline ensures your landing page loads in milliseconds, keeping bounce rates low."
          />
          <FeatureCard 
            icon="🤖"
            title="AI Integration"
            desc="Leverage the power of Gemini to generate dynamic content and real-time personalization for every visitor."
          />
          <FeatureCard 
            icon="🎨"
            title="Customizable UI"
            desc="Extensive set of components designed to be flexible and perfectly match your brand's unique identity."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
