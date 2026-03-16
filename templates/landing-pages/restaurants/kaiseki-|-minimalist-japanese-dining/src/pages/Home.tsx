
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import FeatureGrid from '../../components/FeatureGrid';
import Philosophy from '../../components/Philosophy';

export const Home: React.FC = () => {
    return (
        <div className="relative z-10 flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <FeatureGrid />
                <Philosophy />
            </main>
        </div>
    );
};
