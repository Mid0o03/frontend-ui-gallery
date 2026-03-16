
import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ProblemSolution from '../../components/ProblemSolution';
import Benefits from '../../components/Benefits';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';

export const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <ProblemSolution />
                <Benefits />
                <Testimonials />
                <CTA />
            </main>
        </>
    );
};
