
import React, { useState } from 'react';
import { PlayCircle, VolumeX, Volume2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Grayscale Backdrop Image */}
        <div 
          className="w-full h-full bg-cover bg-center grayscale opacity-70 transition-transform duration-[10s] ease-out scale-110 hover:scale-100"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000")' }}
          aria-label="Cinematic shot of The Glass House in Malibu"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 video-overlay z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <h1 className="font-serif italic text-6xl md:text-9xl mb-8 tracking-tighter opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]">
          The Glass House
        </h1>
        
        <div className="flex items-center justify-center gap-6 md:gap-10 opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards]">
          <span className="h-[1px] w-8 md:w-16 bg-white/30 hidden sm:block"></span>
          <p className="font-display uppercase text-[10px] md:text-xs tracking-widest-custom text-white/80">
            Malibu, California
          </p>
          <span className="h-[1px] w-8 md:w-16 bg-white/30 hidden sm:block"></span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 z-20 flex flex-col items-center gap-4 group cursor-pointer transition-all hover:scale-105">
        <span className="text-[10px] uppercase tracking-widest-custom text-white/40 group-hover:text-white/100 transition-opacity duration-500">
          Explore
        </span>
        <div className="relative w-px h-20 bg-white/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-scrollIndicator"></div>
        </div>
      </div>

      {/* Media Controls */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:flex items-center gap-8">
        <button className="text-white/40 hover:text-white transition-colors duration-300">
          <PlayCircle size={24} strokeWidth={1} />
        </button>
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="text-white/40 hover:text-white transition-colors duration-300"
        >
          {isMuted ? <VolumeX size={24} strokeWidth={1} /> : <Volume2 size={24} strokeWidth={1} />}
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollIndicator {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(200%); }
          100% { transform: translateY(200%); }
        }
        .animate-scrollIndicator {
          animation: scrollIndicator 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
      `}</style>
    </section>
  );
};
