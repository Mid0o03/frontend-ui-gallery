import React from 'react';
import Hero from '../components/Hero';
import Compliance from '../components/Compliance';
import ProductSection from '../components/ProductSection';
import TrustSignals from '../components/TrustSignals';

const Home: React.FC<{ onAddToCart: () => void }> = ({ onAddToCart }) => {
    return (
        <>
            <Hero />
            <Compliance />
            <ProductSection onAddToCart={onAddToCart} />
            <TrustSignals />
        </>
    );
};

export default Home;
