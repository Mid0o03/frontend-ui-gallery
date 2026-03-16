
import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Testimonials from '../../components/Testimonials';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen relative overflow-x-hidden font-display">
            {/* Background Blobs */}
            <div className="soft-bg-blob bg-primary/20 w-[600px] h-[600px] -top-40 -left-40 fixed pointer-events-none"></div>
            <div className="soft-bg-blob bg-blue-200/40 w-[400px] h-[400px] top-1/2 -right-20 fixed pointer-events-none"></div>

            <Navbar />

            <main>
                <Hero />
                <Features />
                <Testimonials />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
};
