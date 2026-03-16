import React from 'react';
import { CONTENT } from '../config/content';

const ProductGrid: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-background-dark" id="shop">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-display font-semibold">Curated for You</h3>
            <p className="text-gray-500 mt-2">Discover our most loved essentials.</p>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all hover:text-green-700">
            See All Products <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTENT.featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-surface-dark mb-4 aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-primary text-xs font-bold px-2 py-1 rounded-full text-accent-text">
                    New
                  </div>
                )}

                <button className="absolute bottom-4 right-4 size-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gray-50">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold mb-1 group-hover:text-green-700 transition-colors">{product.name}</h4>
                  <p className="text-sm text-gray-500">{product.subtitle}</p>
                </div>
                <span className="font-medium">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;