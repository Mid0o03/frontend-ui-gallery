import React from 'react';
import { BRANDING } from '../config/branding';
import { CONTENT } from '../config/content';

const ProductHighlight: React.FC = () => {
  const product = CONTENT.featuredProducts[1]; // Using the second product as highlight

  return (
    <section className="py-20 px-6 bg-secondary/30 dark:bg-surface-dark/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Image Side */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute -top-10 -left-10 size-64 bg-primary/20 rounded-full blur-3xl z-0"></div>
          <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Floating Info Card */}
          <div className="absolute -bottom-6 -right-6 z-20 bg-white dark:bg-surface-dark p-6 rounded-lg shadow-xl max-w-[200px] hidden md:block border border-gray-50 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
              <span className="text-xs font-bold">4.9/5 Rating</span>
            </div>
            <p className="text-xs text-gray-500 italic">"My skin has never felt this hydrated and alive."</p>
          </div>
        </div>

        {/* Content Side */}
        <div className="order-1 lg:order-2 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-green-700 dark:text-primary font-bold uppercase tracking-wider text-xs">
            <span className="w-8 h-px bg-current"></span>
            Best Seller
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-accent-text dark:text-white leading-tight">
            {product.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
            {product.subtitle}. Experience the pure botanical essence of {BRANDING.name}.
          </p>

          <div className="flex flex-wrap gap-3 my-4">
            {['Vitamin C', 'Hyaluronic Acid', 'Aloe Vera'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white dark:bg-background-dark border border-gray-200 dark:border-gray-700 text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 flex items-center gap-6">
            <button className="px-8 py-4 rounded-full bg-primary text-accent-text font-bold hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              Add to Cart - ${product.price}
            </button>
            <a href="#" className="text-sm font-bold border-b border-black dark:border-white pb-0.5 hover:text-green-700 dark:hover:text-primary transition-colors">
              View Full Ingredients
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;