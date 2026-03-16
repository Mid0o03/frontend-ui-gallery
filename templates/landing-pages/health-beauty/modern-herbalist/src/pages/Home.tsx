
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import QualitySection from '../../components/QualitySection';
import ProductGallery from '../../components/ProductGallery';
import Footer from '../../components/Footer';
import BotanicalSearchModal from '../../components/BotanicalSearchModal';

export const Home: React.FC = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar onSearchClick={() => setIsSearchOpen(true)} />

            <main className="flex-grow">
                <Hero />
                <QualitySection />
                <ProductGallery />
            </main>

            <Footer />

            {isSearchOpen && (
                <BotanicalSearchModal onClose={() => setIsSearchOpen(false)} />
            )}
        </div>
    );
};
