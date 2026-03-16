
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-gray-800 bg-gray-900/50 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
          Powered by Gemini 2.5 Flash
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
          Create Dynamic Visuals <br />
          <span className="text-indigo-500">From Pure HTML</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          The ultimate engine for real-time image generation. Seamlessly integrate high-fidelity assets into your landing pages using simple dynamic links.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#studio" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/20">
            Open Studio
          </a>
          <a href="#showcase" className="w-full sm:w-auto border border-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
