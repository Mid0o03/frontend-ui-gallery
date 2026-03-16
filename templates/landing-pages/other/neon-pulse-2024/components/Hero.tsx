
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-8 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-pink/10 blur-[150px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="z-10 flex flex-col items-center">
        <span className="text-primary font-bold tracking-[0.5em] uppercase mb-4 text-sm animate-bounce">Neo-Tokyo District</span>
        
        <h1 className="text-[12vw] leading-[0.8] font-black italic tracking-tighter uppercase mb-6 drop-shadow-[0_0_30px_rgba(19,127,236,0.4)]">
          NEON<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-neon-pink">PULSE</span><br/>
          2024
        </h1>
        
        <p className="max-w-xl text-lg text-white/60 font-light tracking-wide mb-10">
          August 15-17. Three days of immersive audio-visual glitch. Experience the evolution of electronic sound in the heart of the district.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-lg hover:bg-primary hover:text-white transition-all transform hover:scale-105 active:scale-95">
            View Full Lineup
          </button>
          
          <div className="flex items-center gap-4 px-10 py-4 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md">
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase opacity-50 font-bold">Starts In</span>
              <span className="font-mono text-xl tracking-tighter">45:12:30:05</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 opacity-30 animate-float">
        <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
