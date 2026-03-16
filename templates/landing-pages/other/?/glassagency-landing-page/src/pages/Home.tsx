
import React from 'react';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Pricing from '../../components/Pricing';
import CTA from '../../components/CTA';

export const Home: React.FC = () => {
    return (
        <>
            {/* Animated Background Blobs could go here or remain in App structure if global */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-purple-400/20 rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute top-[40%] right-[10%] w-80 h-80 bg-blue-400/20 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-[10%] left-[25%] w-72 h-72 bg-pink-400/20 rounded-full blur-[90px] animate-pulse" style={{ animationDuration: '6s' }}></div>
            </div>

            <Hero />
            <Services />
            <Pricing />
            <CTA />
        </>
    );
};
