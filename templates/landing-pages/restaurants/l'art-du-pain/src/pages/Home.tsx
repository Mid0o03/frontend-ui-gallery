
import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import MenuSection from '../../components/MenuSection';
import StorySection from '../../components/StorySection';

export const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="flex-grow pt-[73px]">
                <Hero />
                <MenuSection />
                <StorySection />
            </main>
        </>
    );
};
