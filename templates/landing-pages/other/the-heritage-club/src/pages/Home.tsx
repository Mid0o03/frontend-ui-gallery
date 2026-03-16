
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import FeaturedImage from '../../components/FeaturedImage';
import ClubExperience from '../../components/ClubExperience';
import JoinLegacy from '../../components/JoinLegacy';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Hero />
                <FeaturedImage />
                <ClubExperience />
                <JoinLegacy />
            </main>
            <Footer />
        </div>
    );
};
