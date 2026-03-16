
import React from 'react';
import Hero from '../../components/Hero';
import Engagement from '../../components/Engagement';
import HarvestSelection from '../../components/HarvestSelection';
import Newsletter from '../../components/Newsletter';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Engagement />
            <HarvestSelection />
            <Newsletter />
        </>
    );
};
