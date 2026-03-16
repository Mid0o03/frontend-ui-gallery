import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white selection:bg-indigo-500/30 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
