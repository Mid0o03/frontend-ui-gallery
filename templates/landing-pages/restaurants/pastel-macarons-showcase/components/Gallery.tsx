
import React from 'react';
import { FLAVORS } from '../constants';
import { MacaronFlavor } from '../types';

const MacaronCard: React.FC<{ flavor: MacaronFlavor }> = ({ flavor }) => {
  const bgClass = flavor.bgColor === 'powder-pink' ? 'bg-powder-pink' : 'bg-sky-blue';
  
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className={`w-full aspect-square p-4 ${bgClass} rounded-lg border border-primary/20 wes-shadow mb-4 relative overflow-hidden transition-all duration-500 hover:p-2 macaron-card-hover`}>
        <img 
          alt={flavor.name} 
          className="w-full h-full object-cover rounded shadow-md" 
          src={flavor.image} 
        />
      </div>
      <h4 className="text-sm font-bold tracking-widest uppercase mb-1 text-dark text-center group-hover:text-primary transition-colors px-2">
        {flavor.name}
      </h4>
      <p className="text-[10px] md:text-xs text-primary font-bold tracking-tighter">
        {flavor.price} — {flavor.boxSize}
      </p>
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="w-full max-w-[1200px] mx-auto px-6 py-12 flex flex-col items-center">
      <h3 className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-primary mb-12">
        The Grand Collection
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
        {FLAVORS.map((flavor) => (
          <MacaronCard key={flavor.id} flavor={flavor} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
