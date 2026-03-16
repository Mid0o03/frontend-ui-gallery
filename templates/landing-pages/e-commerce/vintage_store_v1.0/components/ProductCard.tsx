import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col items-center gap-2 cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-colors">
      <div className="bg-retro-gray p-1 shadow-win95 w-full aspect-square relative">
        <div className="bg-white shadow-win95-in w-full h-full p-2 flex items-center justify-center overflow-hidden relative">
          <img 
            className="w-full h-full object-cover" 
            src={product.image} 
            alt={product.alt} 
          />
          <div className="absolute top-2 right-2 bg-primary text-black px-1 font-mono-retro text-lg shadow-win95 border border-black">
            ${product.price.toFixed(2)}
          </div>
        </div>
      </div>
      <div className="text-center w-full">
        <p className="font-mono-retro text-xl text-white bg-black px-1 mb-1 truncate w-full mx-auto inline-block">
          {product.filename}
        </p>
        <p className="text-gray-400 text-xs mb-2">
          {product.size} • {product.type}
        </p>
        <button className="w-full bg-primary rounded-full py-1 px-4 text-black font-bold text-xs hover:bg-white hover:scale-105 transition-all shadow-lg">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};