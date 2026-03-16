
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Quote from './components/Quote';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background-dark selection:bg-primary/30 selection:text-primary">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Gallery />
        <Quote 
          text="Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever." 
          author="Aaron Siskind" 
        />
        <Footer />
      </main>

      {/* Cinematic Custom Cursor Visual (Passive) */}
      <div className="hidden lg:block fixed size-8 rounded-full border border-primary/40 pointer-events-none z-[999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 transition-all duration-300" />
    </div>
  );
};

export default App;
