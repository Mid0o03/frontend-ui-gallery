import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Pages
import Features from './src/pages/Features';
import Integrations from './src/pages/Integrations';
import Pricing from './src/pages/Pricing';
import Enterprise from './src/pages/Enterprise';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Dashboard from './src/pages/Dashboard';
import Terms from './src/pages/Terms';
import Privacy from './src/pages/Privacy';

// Scroll to top on navigation
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-primary/30 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturesGrid />
                <Stats />
                <FAQ />
                <CTA />
              </>
            } />
            <Route path="/features" element={<Features />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
