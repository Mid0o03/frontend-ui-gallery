
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBanner from '../components/StatsBanner';
import Benefits from '../components/Benefits';
import AIPerformanceConsultant from '../components/AIPerformanceConsultant';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    // Simple scroll-to-top on refresh or mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background-dark overflow-x-hidden selection:bg-primary selection:text-black">
            <Navbar />
            <main>
                <Hero />
                <StatsBanner />
                <Benefits />
                <AIPerformanceConsultant />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
