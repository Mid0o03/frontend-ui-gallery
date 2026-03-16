import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import SelectedWorks from './components/SelectedWorks';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-neo-offwhite">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <SelectedWorks />
      <Footer />
    </div>
  );
};

export default App;