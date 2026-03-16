
import React from 'react';

const Map: React.FC = () => {
  return (
    <section id="location" className="w-full h-[500px] bg-neutral-50 overflow-hidden relative grayscale group border-y border-black/5">
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative">
          <div className="size-6 bg-primary/30 rounded-full animate-ping absolute -top-1 -left-1"></div>
          <div className="size-4 bg-primary rounded-full relative shadow-lg shadow-primary/40"></div>
          
          <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 shadow-xl whitespace-nowrap rounded-md border border-black/5">
            <p className="text-[10px] font-bold uppercase tracking-widest-xl">Exclusive Coastal District</p>
          </div>
        </div>
      </div>
      
      <img 
        alt="Stylized map of Los Angeles region" 
        className="w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-80 duration-1000"
        src="https://picsum.photos/seed/map-area/2000/800"
      />
      
      <div className="absolute bottom-12 left-12 z-20 max-w-sm">
        <h4 className="text-3xl font-light tracking-tight mb-2">Location</h4>
        <p className="text-sm font-light opacity-60">Situated at the nexus of privacy and accessibility, within minutes of the world's most elite private clubs and dining.</p>
      </div>
    </section>
  );
};

export default Map;
