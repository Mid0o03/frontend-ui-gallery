
import React, { useState } from 'react';
import Header from './components/Header';
import HeroBackground from './components/HeroBackground';
import ReservationCard from './components/ReservationCard';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen relative flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      
      <main className="relative flex-grow flex items-center justify-center pt-20 pb-12 overflow-hidden">
        <HeroBackground />
        
        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
          <ReservationCard />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
