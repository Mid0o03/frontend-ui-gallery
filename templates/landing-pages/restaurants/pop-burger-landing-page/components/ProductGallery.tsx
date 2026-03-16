
import React from 'react';

const products = [
  {
    name: 'Double Trouble',
    desc: 'Twice the beef, twice the cheese, zero regrets.',
    color: 'bg-white',
    imgColor: 'bg-[#FFD700]',
    rotate: 'rotate-1',
    img: 'https://picsum.photos/seed/double/400/400'
  },
  {
    name: 'Inferno Burger',
    desc: 'Handle with care. This one packs a punch!',
    color: 'bg-[#0df259]',
    imgColor: 'bg-white',
    rotate: '-rotate-2',
    img: 'https://picsum.photos/seed/inferno/400/400'
  },
  {
    name: 'Plant Power',
    desc: "Tastes so real, you won't believe it's green.",
    color: 'bg-[#0099FF]',
    imgColor: 'bg-[#E31B23]',
    rotate: 'rotate-2',
    img: 'https://picsum.photos/seed/plant/400/400'
  }
];

const ProductGallery: React.FC = () => {
  return (
    <section className="relative z-10 py-32 px-6 lg:px-20 bg-[#f5f8f6]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <div 
            key={idx}
            className={`${product.color} p-8 border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] transform ${product.rotate} hover:rotate-0 transition-transform duration-300 group`}
          >
            <div className={`${product.imgColor} aspect-square border-4 border-black rounded-2xl overflow-hidden mb-6 relative`}>
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 halftone-pattern opacity-10 pointer-events-none"></div>
            </div>
            <h3 className={`text-3xl font-black uppercase mb-3 ${product.name === 'Plant Power' ? 'text-white' : 'text-black'}`}>
              {product.name}
            </h3>
            <p className={`text-lg font-bold leading-tight ${product.name === 'Plant Power' ? 'text-white/90' : 'text-gray-800'}`}>
              {product.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
