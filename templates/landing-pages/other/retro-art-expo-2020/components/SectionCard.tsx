
import React from 'react';

interface SectionCardProps {
  title: string;
  description: string;
  level?: string;
  color: string;
  icon?: string;
  imageUrl: string;
  square?: boolean;
  pressStart?: boolean;
}

const SectionCard: React.FC<SectionCardProps> = ({ 
  title, description, level, color, icon, imageUrl, square, pressStart 
}) => {
  return (
    <section className={`border-[8px] border-black ${color} p-6 pixel-shadow group flex flex-col`}>
      <div className="flex justify-between items-start mb-4">
        {level && (
          <span className="font-pixel text-[10px] bg-black text-white px-2 py-1">LVL. {level}</span>
        )}
        {icon && (
          <span className="material-icons text-black text-4xl">{icon}</span>
        )}
        {!icon && !level && (
           <div className="w-10 h-1" /> // Placeholder to maintain spacing
        )}
        {!level && !icon && square && (
           <div className="w-full h-1" />
        )}
      </div>

      <div className={`border-4 border-black bg-white mb-6 overflow-hidden relative ${square ? 'aspect-square' : 'aspect-video'}`}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 border-4 border-black pointer-events-none"></div>
        
        {/* Decorative corner dots for level 01 vibe */}
        {level === '01' && (
          <div className="absolute top-2 right-2 flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-black"></div>
          </div>
        )}

        {/* Decorative circles for level 02 vibe */}
        {level === '02' && (
          <div className="absolute top-2 right-2 flex -space-x-2">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-black"></div>
            <div className="w-4 h-4 rounded-full bg-retro-pink border-2 border-black"></div>
          </div>
        )}

        {pressStart && (
          <div className="absolute bottom-4 left-4 bg-black text-retro-teal px-2 py-1 font-pixel text-[10px] animate-pulse">
            PRESS START
          </div>
        )}
      </div>

      <div className="mt-auto">
        <h3 className="font-heading text-2xl text-black mb-2 uppercase">{title}</h3>
        <p className="text-black font-bold uppercase text-sm leading-tight tracking-tight">
          {description}
        </p>
      </div>
    </section>
  );
};

export default SectionCard;
