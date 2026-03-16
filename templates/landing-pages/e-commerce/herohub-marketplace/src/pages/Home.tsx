
import React from 'react';
import { Hero } from '../../components/Hero';
import { FeaturedMakers } from '../../components/FeaturedMakers';
import { Features } from '../../components/Features';
import { CTA } from '../../components/CTA';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <FeaturedMakers />
            <Features />
            <CTA />
        </>
    );
};
