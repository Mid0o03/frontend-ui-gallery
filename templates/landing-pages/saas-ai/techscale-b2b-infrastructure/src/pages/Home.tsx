
import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { Logos } from '../../components/Logos';
import { Features } from '../../components/Features';
import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';

// Load Google Material Symbols for Icons
const MaterialSymbolsLoader = () => (
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
);

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            <MaterialSymbolsLoader />
            <Navbar />
            <main>
                <Hero />
                <Logos />
                <Features />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};
