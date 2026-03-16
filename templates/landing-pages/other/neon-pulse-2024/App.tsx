
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lineup from './components/Lineup';
import Experience from './components/Experience';
import Tickets from './components/Tickets';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background-dark text-white font-display selection:bg-primary selection:text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Lineup />
        <Experience />
        <Tickets />
      </main>
      
      <Footer />

      {/* Global Vignette */}
      <div className="fixed inset-0 pointer-events-none z-50 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
    </div>
  );
};

export default App;
