
import React from 'react';

const Benefits: React.FC = () => {
  const features = [
    {
      icon: 'bolt',
      title: 'INSTANT SYNC',
      description: 'Our proprietary engine synchronizes your data across every device in under 100 milliseconds. No waiting, no loading spinners, just raw speed.'
    },
    {
      icon: 'speed',
      title: 'ZERO LATENCY',
      description: 'Experience sub-millisecond response times with our edge-optimized infrastructure. Every tap feels instantaneous and fluid.'
    },
    {
      icon: 'grid_view',
      title: 'AGRESSIVE ARCHITECTURE',
      description: 'Built with a carbon-black aesthetic and a modular core designed to withstand extreme workloads without breaking a sweat.'
    }
  ];

  return (
    <section id="features" className="bg-background-dark py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-primary/20"></div>
          <img 
            alt="High tech interface" 
            className="rounded-xl border border-white/10 w-full object-cover h-[500px] grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://picsum.photos/800/800?random=3" 
          />
          <div className="absolute bottom-6 right-6 bg-carbon/90 backdrop-blur border border-primary/30 p-6 rounded-lg max-w-xs shadow-2xl">
            <div className="flex items-center gap-3 mb-2 text-primary">
              <span className="material-symbols-outlined">verified</span>
              <span className="font-bold text-sm tracking-widest uppercase">Certified Speed</span>
            </div>
            <p className="text-white/70 text-sm italic">"The only app that keeps up with my workflow without a single hiccup. Absolute game changer."</p>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-primary text-lg font-bold tracking-[0.3em] uppercase">Built for Performance</h2>
            <h3 className="text-white text-5xl font-black tracking-tighter italic leading-none">
              UNCOMPROMISING <br /> CAPABILITIES
            </h3>
          </div>

          <div className="flex flex-col gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-carbon border border-white/10 rounded flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-white text-xl font-bold italic tracking-tight uppercase">{f.title}</h4>
                  <p className="text-white/50 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
