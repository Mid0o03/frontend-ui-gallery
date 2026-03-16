
import React from 'react';
import Hero from '../../components/Hero';
import ImageStudio from '../../components/ImageStudio';
import Features from '../../components/Features';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <ImageStudio />
            <Features />
        </>
    );
};
