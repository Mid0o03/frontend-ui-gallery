
import React from 'react';
import { Hero } from '../../components/Hero';
import { LearningPath } from '../../components/LearningPath';
import { StatsSection } from '../../components/StatsSection';
import { Testimonials } from '../../components/Testimonials';
import { CTA } from '../../components/CTA';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <LearningPath />
            <StatsSection />
            <Testimonials />
            <CTA />
        </>
    );
};
