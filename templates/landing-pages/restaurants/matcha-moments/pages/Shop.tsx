import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../config/content';

export const Shop: React.FC = () => {
  return (
    <div className="bg-[#F5F5DC] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">

        {/* Page Heading */}
        <div className="flex flex-col gap-6 py-8">
          <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-[#333333]">{content.shopPage.title}</h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 pb-4 border-b border-[#3A5335]/20">
            {content.shopPage.filters.map((filter, idx) => (
              <button
                key={idx}
                className={`h-10 px-6 rounded-full text-sm font-bold shadow-sm transition-colors ${idx === 0 ? 'bg-[#3A5335] text-white' : 'bg-transparent border border-[#3A5335]/30 text-[#333333] hover:bg-[#3A5335]/10'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {content.products.map((product) => (
            <div key={product.id} className="flex flex-col gap-3 group">
              <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${product.image}")` }}
                />
                {/* Overlay CTA */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full h-10 bg-[#B28A3B] text-white text-sm font-bold rounded-lg shadow-lg hover:bg-[#9E7A33] transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="text-center pt-2">
                <Link to={`/product/${product.id}`} className="block text-lg font-bold text-[#333333] hover:text-[#3A5335] transition-colors leading-tight mb-1">
                  {product.name}
                </Link>
                <p className="text-sm text-[#3A5335] font-medium mb-1">{product.tagline}</p>
                <p className="text-base font-semibold text-[#333333]">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16 mb-8">
          <button className="h-12 px-10 rounded-full bg-[#3A5335] text-white text-base font-bold shadow-md hover:opacity-90 transition-opacity">
            {content.shopPage.loadMore}
          </button>
        </div>
      </div>
    </div>
  );
};