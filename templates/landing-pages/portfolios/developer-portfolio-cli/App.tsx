import React from 'react';
import { TerminalHeader } from './components/TerminalHeader';
import { TerminalFooter } from './components/TerminalFooter';
import { HeroSection } from './components/HeroSection';
import { StatsGrid } from './components/StatsGrid';
import { ProjectList } from './components/ProjectList';
import { SkillsCloud } from './components/SkillsCloud';
import { ContactForm } from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="layout-container flex h-full grow flex-col w-full max-w-[1200px] mx-auto p-4 md:p-8 lg:p-12 min-h-screen">
      {/* Terminal Window Container */}
      <div className="relative flex flex-col w-full h-full bg-terminal-black rounded-lg border border-terminal-border shadow-2xl overflow-hidden flex-1 min-h-[85vh]">
        
        <TerminalHeader />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col scroll-smooth">
          <HeroSection />
          <StatsGrid />
          <ProjectList />
          <SkillsCloud />
          <ContactForm />
        </main>

        <TerminalFooter />
        
      </div>
    </div>
  );
};

export default App;