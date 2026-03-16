
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row pt-16 items-center overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      
      <div className="flex-1 px-10 md:px-20 z-10 text-center md:text-left py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold tracking-widest uppercase mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Version 4.0 // Sigma Grade
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter metallic-text uppercase mb-8">
          Molecular<br/>Performance.
        </h1>
        
        <p className="max-w-md text-slate-400 text-lg mb-10 font-light leading-relaxed mx-auto md:mx-0">
          Bio-engineered Ion-Exchange Whey Isolate. Superior bioavailability. Zero-latency muscle recovery. Precision nutrition for the high-performance era.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-primary text-background-dark font-black tracking-widest uppercase px-8 py-4 rounded-xl flex items-center justify-center gap-2 group transition-all hover:scale-105">
            INITIALIZE UPGRADE
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">bolt</span>
          </button>
          <button className="glass-panel text-white font-black tracking-widest uppercase px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
            DATA SHEETS
          </button>
        </div>
      </div>
      
      <div className="flex-1 relative flex items-center justify-center min-h-[500px] w-full">
        <div className="absolute w-[400px] h-[400px] border border-primary/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute w-[550px] h-[550px] border border-white/5 rounded-full"></div>
        
        <img 
          className="relative z-10 w-4/5 max-w-md drop-shadow-[0_0_50px_rgba(37,175,244,0.3)]" 
          alt="High-tech 3D rendered futuristic protein tub with metallic finish" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-65WRQra9EPCiAhLHlUQc5v1Df7YXJ9GshYVNrXVDJVOrLwPwBDQf-QiCAS29Bef8VcMT5iUi1lVs859RpzLFpYhYAWniJOsAqI1QBfKN6bL2lqzA0KtkQo6jB-NvW31IlqguyQ11BVkql1i31GQp670UAQc9LCI-AMbARszvRQOIK-Vd-jkaSNKvNlz4v4oZrTd4HS0aM73jUrMemDhYwmMRk8RvhnGNUpSwt1SFkVhGLIguwEacdDw1otHQ-H0dZsRYnAjdiXI"
        />
        
        <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-40">
          <span className="text-[10px] font-mono tracking-tighter">RENDER: SIGMA_ISO_4.0</span>
          <span className="text-[10px] font-mono tracking-tighter">COORD: 45.322 // -12.441</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
