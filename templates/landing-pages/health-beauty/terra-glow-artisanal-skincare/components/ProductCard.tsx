
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-clay">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        {/* Badges */}
        <div className="absolute top-5 left-5 bg-primary text-forest text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em] shadow-sm">
          {product.category}
        </div>
        <div className="absolute bottom-5 right-5 bg-white/80 backdrop-blur-md text-forest text-[10px] font-bold px-3 py-1.5 rounded-lg border border-forest/5 shadow-sm">
          Batch No. {product.batchNo}
        </div>
      </div>
      <div className="mt-8 px-1">
        <h4 className="font-serif text-2xl group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h4>
        <p className="text-forest/50 text-sm mt-2 font-medium tracking-tight">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-forest/5">
          <span className="text-forest text-lg font-extrabold">${product.price.toFixed(2)}</span>
          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-forest hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
