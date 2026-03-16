import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import Home from './src/pages/Home';
import Approach from './src/pages/Approach';
import Space from './src/pages/Space';
import ContactPage from './src/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-primary/30">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/space" element={<Space />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
