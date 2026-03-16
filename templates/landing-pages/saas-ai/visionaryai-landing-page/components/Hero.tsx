
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          NEW: GEMINI 2.5 INTEGRATION
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
          Create Dynamic Visuals <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
            Powered by Intelligence
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
          The world's most advanced AI image generator for creators. Turn static ideas into vibrant, dynamic masterpieces with just a single line of text.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#generate"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 rounded-2xl font-bold text-white hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20"
          >
            Try Free Generation
          </a>
          <button className="w-full sm:w-auto px-8 py-4 glass rounded-2xl font-bold text-white hover:bg-white/10 transition-all">
            View Showcases
          </button>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10 rounded-full max-w-4xl mx-auto h-64"></div>
          <img 
            src="https://picsum.photos/seed/visionary/1200/600" 
            alt="AI Gallery Preview" 
            className="rounded-3xl border border-white/10 shadow-2xl mx-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
