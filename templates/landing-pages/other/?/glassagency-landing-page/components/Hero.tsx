
import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-6 pt-20 pb-32 lg:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 border border-primary/20 animate-fade-in">
          <Sparkles size={14} className="animate-spin-slow" />
          <span>NEW: DESIGN SYSTEMS FOR 2024</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8">
          Future-Proof <span className="text-primary">Your Brand</span> With Clarity
        </h1>
        
        <p className="text-lg lg:text-xl opacity-70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Sophisticated digital experiences crafted with high-gloss aesthetics and data-driven precision. We bring transparency to technology.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <button className="bg-primary text-white font-bold h-14 px-10 rounded-xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
            Start Your Project
          </button>
          <button className="glass-effect font-bold h-14 px-10 rounded-xl hover:bg-white/60 transition-all border-white/50 shadow-lg">
            View Showcase
          </button>
        </div>
      </div>

      {/* Abstract Shapes (Visual Decor) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl pointer-events-none -z-10 opacity-60">
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-400/40 to-purple-500/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-64 h-64 bg-gradient-to-tr from-pink-400/30 to-orange-400/30 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
