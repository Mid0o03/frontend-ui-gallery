import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './src/pages/Home';
import History from './src/pages/History';
import Styles from './src/pages/Styles';
import Gallery from './src/pages/Gallery';
import AIAdvice from './src/pages/AIAdvice';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-500">
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/styles" element={<Styles />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/ai-advice" element={<AIAdvice />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
