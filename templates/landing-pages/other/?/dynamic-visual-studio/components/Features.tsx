
import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-8 bg-gray-900/20 border border-gray-800 rounded-3xl hover:border-gray-700 transition-all hover:translate-y-[-4px]">
    <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center mb-6">
      <i className={`fas ${icon} text-indigo-500 text-xl`}></i>
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Powerful Capabilities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Seamlessly bridge the gap between imagination and web integration.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="fa-link" 
            title="Dynamic Image Linking" 
            desc="Use semantic URLs to request images. No more static file management or manual uploads."
          />
          <FeatureCard 
            icon="fa-bolt" 
            title="Real-Time Generation" 
            desc="Powered by Gemini 2.5 Flash for lightning-fast inference, bringing your visions to life in seconds."
          />
          <FeatureCard 
            icon="fa-layer-group" 
            title="Production Ready" 
            desc="High-fidelity outputs in flexible aspect ratios, optimized for modern high-DPI displays."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
