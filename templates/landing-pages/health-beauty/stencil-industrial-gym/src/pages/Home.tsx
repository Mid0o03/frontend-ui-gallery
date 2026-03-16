
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Disciplines from '../../components/Disciplines';
import Pricing from '../../components/Pricing';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen selection:bg-primary selection:text-white relative">
            {/* Texture Overlay */}
            <div className="fixed inset-0 grunge-overlay z-[60] pointer-events-none"></div>

            {/* Scanline Effect */}
            <div className="fixed inset-0 scanline z-[55] pointer-events-none opacity-20"></div>

            <Header />

            <main>
                <Hero />

                {/* Facility Detail Section */}
                <section id="the-facility" className="py-32 bg-concrete/40 relative">
                    <div className="max-w-[1440px] mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                            <div>
                                <span className="text-primary text-[10px] font-black tracking-[0.6em] uppercase mb-4 block">The Habitat</span>
                                <h2 className="text-6xl font-black tracking-tighter uppercase italic leading-none">Concrete & Steel</h2>
                            </div>
                            <div className="h-px bg-white/10 flex-grow mx-12 hidden md:block mb-4"></div>
                            <p className="text-white/40 text-[10px] max-w-xs uppercase tracking-[0.2em] font-bold leading-relaxed">
                                50,000 square feet of raw mechanical potential. No air conditioning. No mirrors. Just iron and willpower.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="md:col-span-2 aspect-video bg-neutral-900 overflow-hidden relative group border border-white/5">
                                <img
                                    alt="Raw Equipment"
                                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                                    <h3 className="text-3xl font-black tracking-tighter uppercase">Raw Steel Zone</h3>
                                    <p className="text-[10px] text-primary tracking-[0.3em] font-bold uppercase mt-2">Heavy Lifting & Chains</p>
                                </div>
                            </div>

                            <div className="aspect-square bg-neutral-900 overflow-hidden relative group border border-white/5">
                                <img
                                    alt="Dumbbells"
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                                />
                                <div className="absolute top-6 right-6 bg-primary px-4 py-1.5 text-xs font-black tracking-tighter z-20">02</div>
                            </div>

                            <div className="aspect-square bg-neutral-900 overflow-hidden relative group border border-white/5">
                                <img
                                    alt="Training Area"
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                    src="https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?q=80&w=2069&auto=format&fit=crop"
                                />
                                <div className="absolute top-6 right-6 bg-primary px-4 py-1.5 text-xs font-black tracking-tighter z-20">03</div>
                            </div>
                        </div>
                    </div>
                </section>

                <Disciplines />

                <Pricing />

                {/* Quote Break Section */}
                <section className="py-40 bg-background-dark flex flex-col items-center justify-center text-center overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
                        <span className="text-[40vw] font-black uppercase tracking-tighter">GRIT</span>
                    </div>
                    <div className="relative z-10 max-w-4xl px-6">
                        <span className="material-symbols-outlined text-primary text-6xl mb-8">format_quote</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tight leading-[1.1] mb-10">
                            "The iron never lies to you. You can walk outside and listen to all kinds of talk, but the iron is the established real thing."
                        </h2>
                        <p className="text-[10px] font-black tracking-[0.5em] uppercase text-white/40">— Henry Rollins / Stencil Creed</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
