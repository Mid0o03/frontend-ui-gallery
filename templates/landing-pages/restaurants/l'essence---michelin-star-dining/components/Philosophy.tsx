
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="story" className="max-w-7xl mx-auto px-6 py-24 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-6 lg:col-span-5">
          <h2 className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
            <span className="w-12 h-[1px] bg-primary"></span> Our Philosophy
          </h2>
          <h3 className="text-charcoal text-4xl md:text-5xl font-light leading-tight mb-10 italic font-display">
            A sensory journey through the terroir, where tradition meets refinement.
          </h3>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-lg font-serif italic">
            Rooted in the poetic rhythm of the seasons, our kitchen celebrates the raw beauty of local ingredients transformed through precise technique and artistic vision. We believe that true luxury lies in simplicity and the honest expression of the earth.
          </p>
          <a href="#" className="inline-flex items-center gap-3 text-charcoal font-bold uppercase tracking-[0.2em] text-[10px] border-b border-primary/30 pb-2 hover:text-primary transition-colors">
            The Story of L'Essence
          </a>
        </div>

        <div className="md:col-span-6 lg:col-span-7 grid grid-cols-2 gap-6 relative">
          <div className="pt-16">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                alt="Chef Plating" 
              />
            </div>
          </div>
          <div className="pb-16">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
                alt="Interior Dining" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
