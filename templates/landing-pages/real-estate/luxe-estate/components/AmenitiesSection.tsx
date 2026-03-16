
import React from 'react';
import { AMENITIES } from '../constants';

const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="max-w-7xl mx-auto px-6 md:px-12 mb-44">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left column: Text list */}
        <div className="order-2 lg:order-1">
          <div className="flex flex-col gap-16">
            {AMENITIES.map((amenity, idx) => (
              <div 
                key={amenity.id} 
                className="flex gap-10 group animate-in fade-in slide-in-from-left-8 fill-mode-both"
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className="shrink-0">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform duration-500">
                    {amenity.icon}
                  </span>
                </div>
                <div>
                  <h4 className="text-2xl font-light mb-3 tracking-tight group-hover:text-primary transition-colors">{amenity.title}</h4>
                  <p className="text-sm text-black/60 leading-relaxed font-light max-w-sm">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Large Image */}
        <div className="order-1 lg:order-2 relative group">
          <div className="aspect-[4/5] bg-neutral-100 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 grayscale group-hover:grayscale-0">
            <img 
              alt="Luxury minimalist living room with high ceilings" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3000ms]" 
              src="https://picsum.photos/seed/estate-luxury/1200/1500"
            />
          </div>
          
          {/* Architecture Tag */}
          <div className="absolute -bottom-10 -left-10 bg-white p-10 border border-black/5 shadow-xl hidden md:block transform transition-transform group-hover:translate-x-2 group-hover:translate-y-[-4px]">
            <p className="text-[10px] uppercase font-bold tracking-widest-xl mb-2 text-primary">Architecture</p>
            <p className="text-2xl italic font-light">K. Miller Studio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
