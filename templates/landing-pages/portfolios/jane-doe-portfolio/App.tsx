import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    // The outer container handles the full screen height and prevents the body from scrolling naturally,
    // allowing the split panes to scroll independently or as structured.
    <div className="flex h-screen w-full flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border-color border-4 border-border-color overflow-hidden bg-background-dark text-white">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;