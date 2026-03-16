import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      
      {/* Decorative Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[15%] left-[10%] w-32 h-32 bg-purple-200/40 dark:bg-purple-900/20 blob-shape blur-2xl animate-float"></div>
        <div className="absolute top-[40%] right-[15%] w-64 h-64 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-[20%] left-[20%] w-48 h-48 bg-pink-200/40 dark:bg-pink-900/20 blob-shape blur-2xl animate-float-slow"></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1200px] mx-auto px-6 pt-32 pb-20">
        <Hero />
        <WorkSection />
        <AboutSection />
      </div>

      <Footer />
    </>
  );
}

export default App;