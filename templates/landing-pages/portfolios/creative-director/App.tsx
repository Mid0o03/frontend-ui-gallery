import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesTicker from './components/ServicesTicker';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-background-dark text-white">
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <Hero />
        <ServicesTicker />
        <WorkSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;