
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './src/pages/Home';

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
      <div className="relative min-h-screen bg-background-dark overflow-x-hidden selection:bg-primary/30">
        <Navbar isScrolled={scrolled} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Action Button */}
        <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all z-[100] group">
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">chat_bubble</span>
        </button>
      </div>
    </Router>
  );
};

export default App;
