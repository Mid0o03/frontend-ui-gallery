
import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Gallery from '../../components/Gallery';
import Philosophy from '../../components/Philosophy';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col w-full selection:bg-primary selection:text-white">
            <Navbar />
            <main className="flex-1">
                <Hero />

                {/* Decorative Divider */}
                <div className="w-full flex items-center justify-center gap-4 py-8">
                    <div className="w-24 h-px bg-primary/30"></div>
                    <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    <div className="w-24 h-px bg-primary/30"></div>
                </div>

                <Gallery />
                <Philosophy />
            </main>
            <Footer />
        </div>
    );
};
