import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { content } from '../config/content';

const Shop: React.FC = () => {
    return (
        <div className="pt-10 pb-20 px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moss dark:text-white mb-6">{content.shop.title}</h1>
            <p className="text-xl text-moss/70 dark:text-white/70 mb-12 max-w-2xl">
                {content.shop.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.shop.items.map((item) => (
                    <div key={item.id} className="group relative">
                        <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-moss/5 dark:bg-white/5 mb-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <button className="absolute bottom-4 right-4 bg-white dark:bg-background-dark p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <ShoppingCart size={20} className="text-moss dark:text-primary" />
                            </button>
                        </div>
                        <h3 className="text-lg font-bold text-moss dark:text-white">{item.name}</h3>
                        <p className="text-moss/60 dark:text-white/60">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
