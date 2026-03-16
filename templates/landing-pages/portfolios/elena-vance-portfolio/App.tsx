/**
 * Elena Vance Portfolio - Main Application Entry
 * 
 * This application features a horizontal scrolling experience.
 * It is built with React 19, Vite, and Tailwind CSS.
 * 
 * White-label configuration is centralized in the /config directory.
 */
import React, { useRef, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ScrollHint } from './components/ScrollHint';
import {
  IntroSection,
  FullBleedImageSection,
  PaddedImageSection,
  StripImageSection,
  DualImageSection,
  CinematicSection,
  GridCollectionSection,
  ContactSection
} from './components/Sections';

const App: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Map vertical wheel scroll to horizontal scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (evt: WheelEvent) => {
      // If strict horizontal scrolling isn't native to the device (e.g. standard mouse wheel)
      // we translate vertical delta to horizontal scroll.
      // We check if deltaY is dominant to avoid interfering with native horizontal scrolling pads.
      if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
        container.scrollLeft += evt.deltaY;
        // Optionally prevent default if we want to lock browser history swipe navigation
        // evt.preventDefault(); 
      }
    };

    const handleScroll = () => {
      if (container.scrollLeft > 100 && showScrollHint) {
        setShowScrollHint(false);
      } else if (container.scrollLeft <= 100 && !showScrollHint) {
        setShowScrollHint(true);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: true });
    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollHint]);

  return (
    <div className="h-full w-full flex flex-col relative">
      <Header />

      {/* 
        Main Horizontal Scroll Container 
        - snap-x snap-mandatory: Ensures sections lock into place
        - overflow-x-auto: Enables scrolling
        - no-scrollbar: Hides visual scrollbars for cleanliness
      */}
      <main
        ref={scrollContainerRef}
        className="flex-1 flex flex-row overflow-x-auto overflow-y-hidden w-full h-full no-scrollbar scroll-smooth snap-x snap-mandatory items-center"
      >
        <IntroSection />
        <FullBleedImageSection />
        <PaddedImageSection />
        <StripImageSection />
        <DualImageSection />
        <CinematicSection />
        <GridCollectionSection />
        <ContactSection />
      </main>

      <ScrollHint visible={showScrollHint} />
    </div>
  );
};

export default App;