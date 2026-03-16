
import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { Testimonial } from '../../components/Testimonial';
import { Process } from '../../components/Process';
import { Stats } from '../../components/Stats';
import { CTA } from '../../components/CTA';
import { SocialProof } from '../../components/SocialProof';

export const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Testimonial />
                <Process />
                <Stats />
                <CTA />
                <SocialProof />
            </main>
        </>
    );
};
