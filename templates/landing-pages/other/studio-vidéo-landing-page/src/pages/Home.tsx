
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Showreel from '../../components/Showreel';
import Marquee from '../../components/Marquee';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-dark overflow-x-hidden">
            <Header />
            <main>
                <Hero />
                <Showreel />
                <Marquee />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};
