
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { Home } from './src/pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        {/* Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none wood-texture z-0"></div>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />

        {/* Booking Floating Button Mobile */}
        <button className="lg:hidden fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined text-2xl">calendar_month</span>
        </button>
      </div>
    </Router>
  );
};

export default App;
