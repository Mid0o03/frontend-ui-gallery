
import React from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  shape: 'organic-shape' | 'organic-shape-2';
}

const products: Product[] = [
  {
    id: 1,
    name: 'Lavender Serum',
    category: 'Calming & Soothing',
    price: '$48.00',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1920&auto=format&fit=crop',
    shape: 'organic-shape-2'
  },
  {
    id: 2,
    name: 'Jojoba Facial Oil',
    category: 'Deep Hydration',
    price: '$52.00',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1920&auto=format&fit=crop',
    shape: 'organic-shape'
  },
  {
    id: 3,
    name: 'Pink Clay Mask',
    category: 'Purifying Glow',
    price: '$38.00',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1920&auto=format&fit=crop',
    shape: 'organic-shape-2'
  },
  {
    id: 4,
    name: 'Olive Leaf Cream',
    category: 'Revitalizing Protection',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1920&auto=format&fit=crop',
    shape: 'organic-shape'
  }
];

const Products: React.FC = () => {
  return (
    <section id="shop" className="py-24 px-4 md:px-10 lg:px-20 botanical-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-olive tracking-tight mb-3">Our Garden’s Favorites</h2>
            <p className="text-olive/60 text-lg">Most-loved botanical formulations for your daily ritual.</p>
          </div>
          <a href="#" className="flex items-center gap-2 text-terracotta font-bold hover:gap-4 transition-all decoration-2 underline-offset-8 decoration-terracotta/30">
            View full catalog <span className="material-symbols-outlined">trending_flat</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className={`relative aspect-[3/4] mb-6 overflow-hidden ${product.shape} bg-terracotta/5 shadow-inner transition-all duration-500 group-hover:shadow-2xl`}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <button className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-olive">
                  <span className="material-symbols-outlined font-bold">add_shopping_cart</span>
                </button>
              </div>
              <h3 className="text-2xl font-black mb-1 group-hover:text-terracotta transition-colors">{product.name}</h3>
              <p className="text-sm text-olive/50 font-bold uppercase tracking-widest mb-3">{product.category}</p>
              <p className="text-terracotta text-xl font-black">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
