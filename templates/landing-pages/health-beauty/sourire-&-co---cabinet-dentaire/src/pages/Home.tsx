
import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import SurgicalClean from '../../components/SurgicalClean';
import CTASection from '../../components/CTASection';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main>
                <Hero />
                <div id="services">
                    <Services />
                </div>
                <div id="cabinet">
                    <SurgicalClean />
                </div>
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};
