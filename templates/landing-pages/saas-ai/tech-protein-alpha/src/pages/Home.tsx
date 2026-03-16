
import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { MetricsSection } from '../../components/MetricsSection';
import { Features } from '../../components/Features';
import { AthleteVerifications } from '../../components/AthleteVerifications';
import { Footer } from '../../components/Footer';

export const Home: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Navbar />
            <main className="flex-grow">
                <section id="hero">
                    <Hero />
                </section>

                <section id="science">
                    <MetricsSection />
                </section>

                <section id="specs">
                    <Features />
                </section>

                <section id="performance">
                    <AthleteVerifications />
                </section>

                <section id="order" className="w-full border-t border-border-dark py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    <div className="z-10 flex flex-col items-center gap-8">
                        <h2 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
                            Ready for <span className="text-primary text-glow">Upgrade?</span>
                        </h2>
                        <p className="text-gray-400 max-w-lg uppercase tracking-widest text-xs font-mono">
                            Join the elite network of performance-optimized athletes. Limited availability for Batch Alpha-9.
                        </p>
                        <button className="min-w-[280px] bg-primary text-white py-5 px-10 text-sm font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_40px_rgba(13,89,242,0.3)] border border-primary/50">
                            Initialize Order Now
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
