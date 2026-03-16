
import React from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  tag?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ceremonial Matcha Blend",
    category: "Stone-ground • Uji, Japan",
    price: "$42.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWPgJOZiPZMEPdWT9kT50fnIO4MFeVFbUSDs3GqUYbsOml29jracmTuttRn7iJETprGHGl6gxGYgaDOoL52sfDUXOc-Mge2N9qLpGQ0cdR3POeszIFxUz13Qdm6wrEL-WviXkbM-s4i85It4RFpveWnNGvVdkpl5U-KVKZ5qmi5FfwiiXUervLq0WXMz8Abz6zvEvGrqTrQmj7EMnpznrbvQgcWxaca-3cs0DoXbyVCTpZKMX1B2VEUT-TU4hJoIgvsQYZpkx9NKEM",
    tag: "Limited Edition"
  },
  {
    id: 2,
    name: "Hand-poured Soy Candle",
    category: "Hinoki & Sandalwood",
    price: "$34.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuFW5PxnGGCogcPOu5T4H9YWOw_-XkJuH6GS1madPC8t8d4_8qQKGMhIk6_POJ27IVoT1E3bBsnrL8L6cK-dhO46vDKugWwp6GjTH2G_JYeKo255g5y9D65b_YvgZ-hVYypgzgwwhgxwOG54Irfrj3dGj1_Opr9YMCt0EcNDIc3imXuA86_AVdOKhl32NOo3hgsp2eul0Jzmyor8eHTh0Jy5P0DesRT3SMKfrFdjA22U4IdazlRO2XhXdLNITuLqOev9gsUlcR-o5O",
  },
  {
    id: 3,
    name: "Ethereal Botanical Face Oil",
    category: "Neroli & Rosehip",
    price: "$58.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbPrs53lJGApVGNsFsdNRJyFdjFEncP5yU_vPkMofUAwHyuvknymnHAB4L7JmHIFWui1o8_LoFF8ozNoIVPTHo7DusFIIa0iOhS3g7-CGIcAVj7rtwL5UPzMADO61Uxo2BWd9TIId_m3B_du4AlRbUONok1JvKPEqXj0b-EsSgju9tmmBff3di-drz6f9-Cwls7W9UT2FpUBOvlGkTzQTlrAJ0FKXtOzy8OAMZAPdVX_SL8o6GlgSemTSmzwutBWNwuaJLO4RrEA0F",
    tag: "New Release"
  }
];

const Collection: React.FC = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-black/5 dark:bg-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-light text-zen-black dark:text-white mb-2">The Collection</h2>
            <p className="text-matcha font-light italic">Hand-selected for your ritual.</p>
          </div>
          <a href="#" className="text-sm font-medium border-b border-zen-black dark:border-white pb-1 hover:text-matcha hover:border-matcha transition-all uppercase tracking-widest text-[10px]">
            View All Products
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {products.map((product, idx) => (
            <div 
              key={product.id} 
              className={`group cursor-pointer flex flex-col gap-6 ${idx === 1 ? 'lg:translate-y-12' : ''}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/40 dark:bg-white/5 transition-all duration-700 group-hover:shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                {product.tag && (
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/80 dark:bg-zen-black/80 backdrop-blur px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-medium shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-matcha/0 group-hover:bg-matcha/5 transition-colors duration-500" />
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-light mb-1 group-hover:text-matcha transition-colors">{product.name}</h3>
                <p className="text-matcha/60 text-[10px] font-medium uppercase tracking-[0.2em] mb-4">{product.category}</p>
                <p className="text-lg font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
