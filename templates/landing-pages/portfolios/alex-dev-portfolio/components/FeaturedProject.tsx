import React from 'react';
import { ArrowRight, Code, Database } from 'lucide-react';

interface FeaturedProjectProps {
    title: string;
    description: string;
    category: string;
    year: string;
    image: string;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ title, description, category, year, image }) => {
  return (
    <div className="bento-card w-full h-full rounded-[24px] bg-surface-dark border border-surface-border overflow-hidden relative group flex flex-col">
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      {/* Image Section */}
      <div 
        className="h-1/2 md:h-2/3 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      
      {/* Content Section */}
      <div className="h-1/2 md:h-1/3 p-6 flex flex-col justify-between bg-surface-dark relative z-20 border-t border-surface-border">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">{category}</span>
            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
            <span className="text-xs font-medium text-gray-400">{year}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-black flex items-center justify-center text-white/80" title="React">
               <Code size={14} />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 border border-black flex items-center justify-center text-white/80" title="Data">
               <Database size={14} />
            </div>
          </div>
          <button className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-primary transition-colors">
             View Case <ArrowRight size={18} />
          </button>
        </div>
      </div>
      
      {/* Center Button on Hover */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] z-30 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full transition-all duration-300 delay-75">
        <button className="bg-primary text-black px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
            View Project
        </button>
      </div>
    </div>
  );
};