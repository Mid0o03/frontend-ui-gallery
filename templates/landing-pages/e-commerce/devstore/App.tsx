import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TemplateGallery from './components/TemplateGallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TemplateGallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;