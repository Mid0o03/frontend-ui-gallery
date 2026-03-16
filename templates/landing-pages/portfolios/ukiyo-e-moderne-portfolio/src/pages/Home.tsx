
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AICurator from '../components/AICurator';

const Home: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

            <main className="ml-20 md:ml-24 flex-1 overflow-x-hidden">
                <Hero />
                <Gallery />
                <Bio />
                <Contact />
                <Footer />
                <AICurator />
            </main>
        </div>
    );
};

export default Home;
