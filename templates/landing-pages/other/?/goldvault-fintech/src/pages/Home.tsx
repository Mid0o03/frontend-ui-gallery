
import React from 'react';
import { Hero } from '../../components/Hero';
import { Metrics } from '../../components/Metrics';
import { Features } from '../../components/Features';
import { CTA } from '../../components/CTA';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Metrics />
            <Features />
            <CTA />
        </>
    );
};
