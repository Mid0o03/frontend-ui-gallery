import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GalleryRow } from './components/GalleryRow';
import { FooterInfo } from './components/FooterInfo';

function App() {
  return (
    <div className="w-full flex flex-col border-x border-[#234832] max-w-[1920px] mx-auto min-h-screen bg-swiss-black text-white selection:bg-primary selection:text-swiss-black">
      <Header />
      <main className="flex-grow flex flex-col">
        <Hero />
        <GalleryRow />
      </main>
      <FooterInfo />
    </div>
  );
}

export default App;