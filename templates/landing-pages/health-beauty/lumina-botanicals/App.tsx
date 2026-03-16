import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductHighlight from './components/ProductHighlight';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-body antialiased">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <ProductHighlight />
        <ProductGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;