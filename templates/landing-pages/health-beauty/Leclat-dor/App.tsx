
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary/30">
      <Header isScrolled={scrolled} />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <CTA />
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <button 
        className="fixed bottom-6 right-6 z-50 md:hidden bg-primary text-background-dark p-4 rounded-full shadow-2xl active:scale-95 transition-transform"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
      </button>
    </div>
  );
};

export default App;
