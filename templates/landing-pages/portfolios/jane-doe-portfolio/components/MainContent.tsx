import React from 'react';
import Hero from './Hero';
import Marquee from './Marquee';
import ProjectList from './ProjectList';
import Footer from './Footer';

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 h-full overflow-y-auto bg-background-dark relative scroll-smooth">
        <Hero />
        <Marquee />
        <ProjectList />
        <Footer />
    </main>
  );
};

export default MainContent;