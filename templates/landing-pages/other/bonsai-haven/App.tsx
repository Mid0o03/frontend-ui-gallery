import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import WorkshopBanner from './components/WorkshopBanner';
import Footer from './components/Footer';

// Pages
import Shop from './src/pages/Shop';
import CareGuides from './src/pages/CareGuides';
import Workshops from './src/pages/Workshops';
import About from './src/pages/About';
import Login from './src/pages/Login';
import Cart from './src/pages/Cart';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-background-dark', 'text-background-light');
      document.body.classList.remove('bg-background-light', 'text-moss');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-background-light', 'text-moss');
      document.body.classList.remove('bg-background-dark', 'text-background-light');
    }
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
        <div className="flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <FeaturedCollections />
                  <WorkshopBanner />
                </>
              } />
              <Route path="/shop" element={<Shop />} />
              <Route path="/care-guides" element={<CareGuides />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
