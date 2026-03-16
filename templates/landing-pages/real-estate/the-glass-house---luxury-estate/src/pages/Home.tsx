
import React, { useState, useEffect } from 'react';
import { Hero } from '../../components/Hero';
import { Navbar } from '../../components/Navbar';
import { MenuOverlay } from '../../components/MenuOverlay';
import { ViewMode } from '../../types';

export const Home: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.HERO);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Disable scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <div className="relative min-h-screen bg-background-dark overflow-x-hidden">
            <Navbar onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

            <main>
                {viewMode === ViewMode.HERO && (
                    <Hero />
                )}
            </main>

            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            {/* Background Central Decoration Line */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/5 pointer-events-none z-10"></div>
        </div>
    );
};
