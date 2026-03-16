
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';
import GrainyOverlay from '../components/GrainyOverlay';

const Home: React.FC = () => {
    return (
        <div className="relative min-h-screen">
            <GrainyOverlay />
            <Header />
            <main>
                <Hero />
                <Portfolio />
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
