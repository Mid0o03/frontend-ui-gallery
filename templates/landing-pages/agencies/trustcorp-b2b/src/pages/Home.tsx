
import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Features } from '../../components/Features';
import { ContactForm } from '../../components/ContactForm';
import { Footer } from '../../components/Footer';

export const Home: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Features />
                <ContactForm />
            </main>
            <Footer onToggleDark={toggleDarkMode} isDark={isDarkMode} />
        </div>
    );
};
