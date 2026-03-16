
import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Products from '../../components/Products';
import Philosophy from '../../components/Philosophy';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen selection:bg-primary/30">
            <Navbar />
            <main>
                <Hero />
                <Products />
                <Philosophy />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
};
