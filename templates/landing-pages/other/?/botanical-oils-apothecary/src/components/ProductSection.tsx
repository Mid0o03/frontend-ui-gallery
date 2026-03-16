import React, { useState } from 'react';
import { ArrowRight, ShoppingCart, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTENT } from '../config/content';

const ProductSection: React.FC<{ onAddToCart: () => void }> = ({ onAddToCart }) => {
    const [activeCategory, setActiveCategory] = useState('Essential Oils');

    return (
        <section className="py-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h2 className="text-forest-green dark:text-white text-4xl font-extrabold tracking-tight mb-2">The Apothecary Collection</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Single-origin botanical distillations for clinical efficacy.</p>
                </div>
                <div className="flex items-center gap-4 bg-white dark:bg-white/5 p-1.5 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm overflow-x-auto no-scrollbar">
                    {['Essential Oils', 'Carrier Oils', 'Blends'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {CONTENT.products.filter(p => p.category === activeCategory).map((product) => (
                    <div key={product.id} className="group bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-500">
                        <div className="relative aspect-square overflow-hidden bg-slate-50">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {product.badge && (
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-tighter text-amber-brown shadow-sm">
                                    {product.badge}
                                </div>
                            )}
                        </div>
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">{product.scientificName}</span>
                                <span className="text-xl font-black text-forest-green dark:text-white">${product.price.toFixed(2)}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-forest-green dark:text-white mb-2">{product.name}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                {product.description}
                            </p>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={onAddToCart}
                                    className="flex-1 bg-forest-green dark:bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2"
                                >
                                    <ShoppingCart size={18} /> Add to Cart
                                </button>
                                <button className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-white/20 rounded-lg text-slate-400 hover:text-primary hover:border-primary transition-all">
                                    <Microscope size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <Link to="/products" className="group inline-flex items-center gap-2 text-forest-green dark:text-primary font-extrabold text-lg transition-all hover:gap-4">
                    View Entire Pharmacopoeia
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
};

export default ProductSection;
