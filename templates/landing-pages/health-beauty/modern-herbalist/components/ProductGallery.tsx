
import React from 'react';
import { PRODUCTS } from '../constants';

const ProductGallery: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-background-dark">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-xs">The Apothecary</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 italic font-display">Curated Botanicals</h2>
          </div>
          <div className="flex gap-4">
            <button className="p-2 rounded-full border border-forest-muted text-white/40 hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="p-2 rounded-full border border-forest-muted text-white/40 hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col bg-forest-muted/10 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={product.imageUrl}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-background-dark/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                    {product.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white font-display">{product.name}</h3>
                  <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-white/50 text-sm mb-6 leading-relaxed min-h-[3rem]">
                  {product.description}
                </p>
                <button className="w-full py-3 rounded-lg border border-primary/40 text-primary font-bold text-sm hover:bg-primary hover:text-background-dark transition-all flex items-center justify-center gap-2 group/btn">
                  <span className="material-symbols-outlined text-lg group-hover/btn:rotate-12 transition-transform">add_shopping_cart</span>
                  Add to Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
