import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StandardProjectProps {
    title: string;
    description: string;
    category: string;
    image: string;
}

export const StandardProject: React.FC<StandardProjectProps> = ({ title, description, category, image }) => {
  return (
    <div className="bento-card w-full h-full rounded-[24px] bg-surface-dark border border-surface-border overflow-hidden relative group flex flex-col sm:flex-row min-h-[220px]">
      <div 
        className="h-48 sm:h-full w-full sm:w-2/5 bg-cover bg-center" 
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      
      <div className="p-6 flex flex-col justify-center w-full sm:w-3/5">
        <div className="flex items-center gap-2 mb-1">
           <span className="text-xs font-bold text-primary uppercase tracking-wider">{category}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        
        <a href="#" className="inline-flex items-center text-sm font-bold text-white hover:text-primary transition-colors group/link">
            Explore Case <ArrowUpRight size={18} className="ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};