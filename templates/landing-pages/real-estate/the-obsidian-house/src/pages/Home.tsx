
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import GalleryGrid from '../../components/GalleryGrid';
import Footer from '../../components/Footer';
import FloatingNav from '../../components/FloatingNav';
import ChatConcierge from '../../components/ChatConcierge';

export const Home: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setScrollProgress((currentScroll / totalScroll) * 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen font-sans selection:bg-primary/30">
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-white/5">
                <div
                    className="h-full bg-primary transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <Header onInquire={() => setIsChatOpen(true)} />

            <main>
                <Hero />
                <GalleryGrid />
            </main>

            <Footer />

            <FloatingNav onOpenContact={() => setIsChatOpen(true)} />

            <ChatConcierge isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
    );
};
