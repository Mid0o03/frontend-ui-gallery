
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-carbon selection:bg-primary selection:text-carbon overflow-hidden">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
