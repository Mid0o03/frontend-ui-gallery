
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Collection from '../components/Collection';
import WellnessStories from '../components/WellnessStories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="relative min-h-screen">
            {/* Decorative Background Elements */}
            <div className="watercolor-blob top-20 -left-10 w-96 h-96 bg-matcha rounded-full" />
            <div className="watercolor-blob top-1/3 -right-20 w-[30rem] h-[30rem] bg-petal rounded-full" />
            <div className="watercolor-blob bottom-40 left-10 w-64 h-64 bg-matcha rounded-full" />

            <Navbar />
            <main>
                <Hero />
                <Collection />
                <WellnessStories />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
