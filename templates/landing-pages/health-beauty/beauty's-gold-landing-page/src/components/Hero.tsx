import React from 'react';
import { Button } from './ui/Button';
import { useGsapStagger, useGsapParallax, useGsapFadeIn } from '../hooks/useGsapAnimation';

const Hero: React.FC = () => {
    const heroContentRef = useGsapStagger(0.2, 0.3);
    const bgRef = useGsapParallax(0.3);
    const decorRef = useGsapFadeIn(1, 1.2);
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Layer */}
            <div ref={bgRef} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/70 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000"
                    alt="Portrait"
                    className="w-full h-full object-cover grayscale opacity-40 scale-105"
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </div>

            <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
                <div ref={heroContentRef} className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-12 h-[1px] bg-primary"></span>
                        <p className="text-primary text-sm tracking-widest-2xl uppercase">Igny • Paris</p>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter uppercase mb-10">
                        L'Architecture <br />
                        <span className="text-primary italic-display">du Soi.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-12 font-light tracking-wide">
                        Un institut d'exception où la géométrie rencontre le bien-être.
                        Une approche structurée de la beauté avant-garde.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button variant="outline" className="px-10 py-5">
                            Explorer l'institut
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div ref={decorRef} className="absolute right-0 bottom-0 w-1/4 h-1/3 border-l border-t border-primary/20 z-10 hidden lg:flex items-center justify-center">
                <div className="text-[10px] tracking-widest-2xl text-primary/40 vertical-text uppercase absolute top-12 left-12">
                    BEAUTY'S GOLD © 2024
                </div>
            </div>
        </section>
    );
};

export default Hero;
