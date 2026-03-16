import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Simple scroll spy (optional interaction enhancement)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 300; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Philosophy />
      <Portfolio />
      <Contact />
      
      {/* Optional: Simple Back to Top */}
      <a 
        href="#home" 
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-charcoal text-white shadow-xl transition-all duration-500 ${activeSection === 'home' ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}
        aria-label="Back to top"
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </a>
    </div>
  );
};

export default App;