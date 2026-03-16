
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ImageGeneratorSection from '../components/ImageGeneratorSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen selection:bg-blue-500/30">
            <div className="fixed inset-0 hero-gradient pointer-events-none -z-10" />
            <Navbar />
            <main>
                <Hero />
                <Features />
                <ImageGeneratorSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
