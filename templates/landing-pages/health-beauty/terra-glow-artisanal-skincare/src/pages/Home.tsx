
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ProcessTimeline from '../../components/ProcessTimeline';
import ProductCard from '../../components/ProductCard';
import RitualAlchemist from '../../components/RitualAlchemist';
import { PRODUCTS, TESTIMONIALS, INGREDIENTS } from '../../constants';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main>
                <Hero />

                {/* Letter from the Maker */}
                <section className="py-32 px-6 textured-paper grainy-overlay relative">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ochre/10 mb-8">
                                <svg className="w-8 h-8 text-ochre" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-4xl md:text-5xl text-forest italic">A Note from the Maker</h3>
                        </div>
                        <div className="space-y-10 text-xl md:text-2xl text-forest/80 leading-[1.7] font-light text-center lg:text-left">
                            <p>
                                Our philosophy is simple: we believe in the power of touch. In a world of mass production and digital haste, Terra Glow exists as a sanctuary for the slow, the deliberate, and the real. Every bottle of our botanical oil is a testament to the patient art of artisanal alchemy.
                            </p>
                            <p>
                                We don't source from industrial suppliers; we source from ethical growers who know the names of their trees. Each batch is stirred by hand, infused for six weeks under the rhythm of the moon, and hand-poured into glass that protects the vital energy of every leaf and root.
                            </p>
                            <p>
                                When you apply these oils, you aren't just using a product. You are touching the earth, and the hands that tended to it.
                            </p>
                        </div>
                        <div className="mt-20 flex flex-col items-center lg:items-end">
                            <div className="text-ochre font-serif text-5xl italic lg:pr-12">Elena Moretti</div>
                            <div className="text-forest/40 text-xs font-bold uppercase tracking-[0.3em] mt-4">Founder & Master Formulator</div>
                        </div>
                    </div>
                </section>

                {/* Active Batches Section */}
                <section className="py-32 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                            <div>
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Seasonal Releases</span>
                                <h2 className="font-serif text-5xl text-forest">Active Batches</h2>
                            </div>
                            <a href="#" className="text-ochre border-b-2 border-ochre/20 pb-1 font-black text-xs uppercase tracking-[0.25em] hover:text-primary hover:border-primary transition-all duration-300">
                                View All 12 Products
                            </a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
                            {PRODUCTS.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>

                <ProcessTimeline />

                <RitualAlchemist />

                {/* Ingredient Spotlight */}
                <section className="py-32 px-6 textured-paper grainy-overlay overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
                        <div className="lg:w-5/12 text-center lg:text-left">
                            <span className="text-ochre font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Nature's Archive</span>
                            <h2 className="font-serif text-5xl md:text-7xl text-forest mb-10 leading-[1.1]">
                                Grown in Sunlight,<br />
                                <span className="italic">Harvested with Care</span>
                            </h2>
                            <p className="text-forest/60 text-xl font-light mb-12 leading-relaxed">
                                We believe that the terroir—the earth, the climate, and the human care—matters as much for skincare as it does for fine wine. Explore our vault of wild-harvested botanicals.
                            </p>
                            <button className="bg-forest hover:bg-ochre text-white px-10 py-5 rounded-lg font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl">
                                Explore the Library
                            </button>
                        </div>

                        <div className="lg:w-7/12 grid grid-cols-2 gap-8 md:gap-12">
                            {INGREDIENTS.map((ing, idx) => (
                                <div
                                    key={ing.id}
                                    className={`bg-white p-10 rounded-2xl border border-forest/5 shadow-sm text-center flex flex-col items-center group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${idx % 2 === 1 ? 'mt-12' : ''}`}
                                >
                                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-8 border-4 border-clay grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <img src={ing.image} alt={ing.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <h5 className="font-serif text-2xl text-forest">{ing.name}</h5>
                                    <p className="text-[10px] text-ochre font-black uppercase tracking-[0.2em] mt-3">
                                        {ing.origin}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-32 px-6 bg-white">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="font-serif text-4xl md:text-5xl mb-24">Stories from the Ritual</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {TESTIMONIALS.map(t => (
                                <div key={t.id} className="p-10 border border-forest/5 rounded-2xl hover:shadow-2xl transition-all duration-500 bg-linen/50 group flex flex-col items-center">
                                    <div className="flex gap-1 mb-8">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="italic text-forest/60 font-light mb-10 text-lg leading-relaxed group-hover:text-forest transition-colors">
                                        "{t.quote}"
                                    </p>
                                    <div className="mt-auto pt-8 border-t border-forest/5 w-full">
                                        <p className="font-black text-[10px] uppercase tracking-[0.2em] text-forest">
                                            — {t.author}, {t.location}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-forest text-white py-24 px-6 grainy-overlay relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                            </svg>
                            <h1 className="text-xl font-extrabold tracking-tighter uppercase">Terra Glow</h1>
                        </div>
                        <p className="text-white/30 text-sm leading-relaxed mb-10 max-w-xs font-light">
                            Preserving the ancient art of botanical alchemy through slow, hand-crafted beauty rituals.
                        </p>
                        <div className="flex gap-5">
                            {[1, 2, 3].map(i => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-forest hover:border-primary transition-all duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 16H9V8h2v8zm4 0h-2V8h2v8z" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif text-2xl mb-10 italic">Workshop</h4>
                        <ul className="space-y-6 text-sm text-white/40 uppercase tracking-[0.15em] font-bold">
                            <li><a href="#" className="hover:text-primary transition-colors">Our Philosophy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">The Sourcing Map</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Batch Archives</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Stockists</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-2xl mb-10 italic">Support</h4>
                        <ul className="space-y-6 text-sm text-white/40 uppercase tracking-[0.15em] font-bold">
                            <li><a href="#" className="hover:text-primary transition-colors">Shipping Rituals</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Artisan</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif text-2xl mb-10 italic">Newsletter</h4>
                        <p className="text-sm text-white/30 mb-8 font-light leading-relaxed">
                            Join our circle for early access to new seasonal batches.
                        </p>
                        <form className="flex border-b border-white/20 pb-4 group focus-within:border-primary transition-colors">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-white/10 w-full p-0"
                            />
                            <button type="submit" className="text-primary hover:text-white transition-colors transform hover:translate-x-1 duration-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto border-t border-white/5 mt-32 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
                    <p>© 2024 Terra Glow Studio. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <p>Made by Hands in Tuscany & California</p>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
