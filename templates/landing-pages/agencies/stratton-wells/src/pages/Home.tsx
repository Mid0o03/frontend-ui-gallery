
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Gazette from '../../components/Gazette';
import Expertise from '../../components/Expertise';
import Leadership from '../../components/Leadership';
import Footer from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Gazette />
                <Expertise />
                <Leadership />
            </main>
            <Footer />
        </div>
    );
};
