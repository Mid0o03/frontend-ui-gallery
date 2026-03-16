
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MascotAssistant } from './components/MascotAssistant';
import { Home } from './src/pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-primary/30 selection:text-primary">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        {/* Interactive AI Mascot Assistant */}
        <MascotAssistant />
      </div>
    </Router>
  );
};

export default App;
