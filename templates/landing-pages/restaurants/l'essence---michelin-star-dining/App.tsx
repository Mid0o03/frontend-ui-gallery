
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Features from './components/Features';
import WineCellar from './components/WineCellar';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Features />
        <WineCellar />
        <Reservations />
      </main>
      <Footer />
    </div>
  );
};

export default App;
