
import React from 'react';
import { PRODUCTS } from '../constants';

const ShopSection: React.FC = () => {
  return (
    <section id="products" className="py-32 bg-coffee-black/50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-white text-5xl md:text-6xl font-black stamped-text mb-6 italic">The Roastery Shop</h2>
          <p className="text-primary font-bold uppercase tracking-widest flex items-center gap-3 bg-primary/10 px-6 py-2 rounded-full border border-primary/20">
            <span className="material-symbols-outlined text-sm animate-spin-slow">precision_manufacturing</span> 
            Direct from the furnace
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col weathered-paper p-6 rounded-lg border-b-8 border-brick-red relative overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              {product.isNew && (
                <div className="absolute top-4 right-4 bg-primary text-white font-black px-4 py-1 text-xs rounded shadow-lg stamped-text z-10 animate-pulse">
                  NEW
                </div>
              )}
              
              <div className="aspect-[3/4] mb-8 bg-coffee-black/10 rounded-lg border border-black/5 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.alt}
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              <h3 className="text-coffee-black text-2xl font-black leading-tight mb-2 uppercase tracking-tight font-display">
                {product.name}
              </h3>
              <p className="text-coffee-black/60 text-sm font-medium italic mb-8 border-l-2 border-brick-red/30 pl-3">
                {product.description}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <div className="bg-coffee-black text-white px-5 py-2 rounded-sm font-black text-xl shadow-inner copper-glow transition-colors group-hover:bg-primary">
                  {product.price}
                </div>
                <button className="size-14 bg-brick-red text-white flex items-center justify-center rounded-full hover:bg-coffee-black transition-all duration-300 shadow-lg transform active:scale-95">
                  <span className="material-symbols-outlined text-2xl">add_shopping_cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
