import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './src/pages/Home';
import Meditate from './src/pages/Meditate';
import Benefits from './src/pages/Benefits';
import Login from './src/pages/Login';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen font-sans text-white">
        {/* Dynamic Backgrounds */}
        <div className="fixed inset-0 aurora-gradient animate-aurora -z-20 pointer-events-none" />
        <div className="fixed inset-0 bg-background-dark/60 -z-10 pointer-events-none" />

        {/* Main Content */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[480px] px-6 flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow pt-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/meditate" element={<Meditate />} />
                <Route path="/benefits" element={<Benefits />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </div>

        {/* Scroll to Top (Hidden mobile UX standard, but useful) */}
        {scrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 size-12 glass-card rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all transform hover:scale-110 active:scale-90 md:hidden"
          >
            <span className="material-symbols-outlined">arrow_upward</span>
          </button>
        )}
      </div>
    </Router>
  );
};

export default App;
