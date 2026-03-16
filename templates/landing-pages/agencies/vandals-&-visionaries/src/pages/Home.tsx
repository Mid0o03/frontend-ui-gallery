
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Agenda from '../components/Agenda';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="relative min-h-screen flex flex-col font-display">
            {/* Texture Overlay */}
            <div className="grunge-overlay" aria-hidden="true" />

            <Navbar />

            <main className="flex-grow">
                <Hero />
                <Team />
                <Agenda />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
