
import React from 'react';

const FeaturedImage: React.FC = () => {
  return (
    <section className="px-6 lg:px-20 pb-24">
      <div className="max-w-6xl mx-auto relative group">
        {/* Decorative thin border */}
        <div className="absolute -inset-4 border border-primary/10 rounded-lg pointer-events-none transition-transform duration-500 group-hover:scale-[1.01]"></div>
        
        <div className="aspect-[21/9] w-full bg-cover bg-center rounded-lg shadow-2xl overflow-hidden ring-1 ring-black/5">
          <img 
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2000" 
            alt="Pristine golf course at sunset"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
