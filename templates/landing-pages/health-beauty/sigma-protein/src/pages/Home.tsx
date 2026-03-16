
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import PerformanceCharts from '../../components/PerformanceCharts';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 scanline opacity-10 z-[100]" />
            <Header />
            <main>
                <Hero />
                <PerformanceCharts />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};
