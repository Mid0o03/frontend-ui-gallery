
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import FeaturesMarquee from '../../components/FeaturesMarquee';
import ProductGallery from '../../components/ProductGallery';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Background Split */}
            <div className="fixed inset-0 flex z-0 pointer-events-none">
                <div className="w-1/2 bg-[#E31B23] relative overflow-hidden">
                    <div className="absolute inset-0 halftone-pattern opacity-30"></div>
                </div>
                <div className="w-1/2 bg-[#FFD700] relative overflow-hidden border-l-8 border-black">
                    <div className="absolute inset-0 halftone-pattern opacity-30"></div>
                </div>
            </div>

            <Header />

            <main className="relative z-10 flex-1">
                <Hero />
                <FeaturesMarquee />
                <ProductGallery />
            </main>

            <Footer />
        </div>
    );
};
