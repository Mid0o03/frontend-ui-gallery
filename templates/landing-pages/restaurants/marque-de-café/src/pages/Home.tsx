
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import RoastsSection from '../../components/RoastsSection';
import ShopSection from '../../components/ShopSection';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import BrewingAssistant from '../../components/BrewingAssistant';

export const Home: React.FC = () => {
    const [isAssistantOpen, setIsAssistantOpen] = useState(false);

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden vintage-texture bg-background-dark">
            <Navbar onAssistantToggle={() => setIsAssistantOpen(true)} />

            <main className="flex-1">
                <Hero />
                <RoastsSection />
                <ShopSection />
                <Newsletter />
            </main>

            <Footer />

            <BrewingAssistant
                isOpen={isAssistantOpen}
                onClose={() => setIsAssistantOpen(false)}
            />
        </div>
    );
};
