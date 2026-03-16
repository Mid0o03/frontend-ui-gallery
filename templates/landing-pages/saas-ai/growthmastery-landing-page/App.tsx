/**
 * GrowthMastery - Main Application Entry Point
 * 
 * This file orchestrates the layout of the landing page, integrating all
 * primary sections and providing the main structure for the template.
 */
import React from 'react';
import NotificationBar from './components/NotificationBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

/**
 * Main App Component
 * Renders the full landing page structure with all modular components.
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
      <NotificationBar />
      <Header />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;