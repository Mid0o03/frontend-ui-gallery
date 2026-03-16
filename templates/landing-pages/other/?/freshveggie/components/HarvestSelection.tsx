
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

const HarvestSelection: React.FC = () => {
  return (
    <section className="py-24 cookbook-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-end mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Current Selection</span>
            <h2 className="text-4xl font-black tracking-tight italic">Today's Harvest</h2>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-primary font-bold cursor-pointer group hover:opacity-80 transition-opacity">
            <span>View the Full Garden</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="flex flex-col gap-4 bg-white p-4 rounded-xl border-b-4 border-sage-soft hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-start px-2 pb-2">
                <div>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{product.name}</h4>
                  <p className="text-sm text-gray-500">{product.origin}</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-primary">${product.price.toFixed(2)}</span>
                  <p className="text-[10px] font-normal text-gray-400">/ {product.unit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HarvestSelection;
