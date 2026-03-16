import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Philosophy from '../components/Philosophy';
import Contact from '../components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Services />
            <Philosophy />
            <Contact />
        </>
    );
};

export default Home;
