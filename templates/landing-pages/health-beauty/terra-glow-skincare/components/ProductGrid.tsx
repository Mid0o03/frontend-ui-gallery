
import React from 'react';
import { PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <section id="shop" className="py-32 px-8 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
        <h2 className="font-serif text-4xl md:text-5xl italic">The Essentials</h2>
        <a href="#" className="text-xs font-bold uppercase wide-tracking border-b border-primary pb-1 hover:text-primary transition-colors">View All Products</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-stone-soft mb-6 relative shadow-sm">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                style={{ backgroundImage: `url('${product.image}')` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <button className="w-full bg-white text-black py-4 rounded-md font-bold text-xs uppercase wide-tracking hover:bg-black hover:text-white transition-colors">
                  Quick Add — ${product.price.toFixed(2)}
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start px-1">
              <div className="flex-1 mr-4">
                <h4 className="font-serif text-2xl italic group-hover:text-primary transition-colors">{product.name}</h4>
                <p className="text-[10px] font-bold uppercase wide-tracking text-black/50 mt-1">{product.category}</p>
                <p className="text-xs font-light text-black/60 mt-3 line-clamp-2 leading-relaxed">{product.descriptionShort}</p>
              </div>
              <p className="font-bold text-sm whitespace-nowrap">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
