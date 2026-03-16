
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-olive text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="flex flex-wrap gap-32 p-10">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="material-symbols-outlined text-[10rem]">
              {i % 3 === 0 ? 'potted_plant' : i % 3 === 1 ? 'nature_people' : 'local_florist'}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Seed-to-Skin <br/>Philosophy
            </h2>
            <p className="text-xl text-cream/70 font-light leading-relaxed max-w-xl">
              Our process respects the rhythm of nature. We don't just manufacture beauty; we cultivate it. From the first organic sprout in our private gardens to the final cold-pressed bottle in your hand, every step is a labor of love.
            </p>
            
            <div className="grid gap-10">
              {[
                { icon: 'eco', title: 'Sustainably Sourced', desc: 'Harvested with respect for the earth and its biodiversity.' },
                { icon: 'front_hand', title: 'Artisan Crafted', desc: 'Small batches handmade by local artisans to ensure potency.' },
                { icon: 'water_drop', title: 'Purely Organic', desc: '100% certified organic botanical extracts, no synthetics ever.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 group-hover:bg-primary group-hover:text-olive transition-all duration-300">
                    <span className="material-symbols-outlined text-primary group-hover:text-inherit text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-cream/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-square organic-shape-2 bg-cream/10 border-4 border-cream/20 flex items-center justify-center p-8 group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2070&auto=format&fit=crop" 
                alt="Nature Hands" 
                className="w-full h-full object-cover organic-shape-2 group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Floating element */}
            <div className="absolute top-1/2 -left-10 bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl hidden md:block animate-bounce-slow">
              <span className="material-symbols-outlined text-primary text-6xl">energy_savings_leaf</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
