
import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Values from '../../components/Values';
import ProductGrid from '../../components/ProductGrid';
import Editorial from '../../components/Editorial';
import SkinAdvisor from '../../components/SkinAdvisor';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Values />
                <ProductGrid />
                <SkinAdvisor />
                <Editorial />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
};
