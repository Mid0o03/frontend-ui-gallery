import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import SelectedWorks from './components/SelectedWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <SelectedWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;