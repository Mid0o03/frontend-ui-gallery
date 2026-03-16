import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import Home from './src/pages/Home';
import MentionsLegales from './src/pages/MentionsLegales';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background-dark text-white font-sans selection:bg-primary selection:text-background-dark flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
