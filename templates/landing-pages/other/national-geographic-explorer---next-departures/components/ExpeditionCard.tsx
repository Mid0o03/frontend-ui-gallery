
import React from 'react';
import { Expedition } from '../types';

interface ExpeditionCardProps {
  expedition: Expedition;
}

const ExpeditionCard: React.FC<ExpeditionCardProps> = ({ expedition }) => {
  return (
    <div className="group bg-white dark:bg-[#2c2415] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#e7dfcf] dark:border-[#3d3424] flex flex-col transition-all duration-300 animate-fade-in">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={expedition.imageUrl} 
          alt={expedition.imageAlt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {expedition.isLimited && (
          <div className="absolute top-4 left-4 bg-earth text-white px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase rounded z-10">
            Limited Space
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-sm z-10 shadow-md">
          <p className="text-[10px] font-bold uppercase leading-none mb-0.5">Departure</p>
          <p className="text-sm font-bold">{expedition.departureDate}</p>
        </div>
      </div>
      
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
            {expedition.title}
          </h3>
          <span className="text-xs font-bold text-clay whitespace-nowrap ml-4">
            {expedition.duration} DAYS
          </span>
        </div>
        
        <p className="text-earth/70 dark:text-white/70 text-sm leading-relaxed mb-6 line-clamp-3">
          {expedition.description}
        </p>
        
        <div className="mt-auto pt-6 border-t border-[#f3efe7] dark:border-[#3d3424] flex items-center justify-between">
          <div className="flex items-center gap-1 text-clay">
            <span className="material-symbols-outlined text-sm">person_pin_circle</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">{expedition.country}</span>
          </div>
          <button className="bg-primary hover:bg-ochre-dark text-white px-5 py-2 rounded-lg text-xs font-bold tracking-widest uppercase transition-all active:scale-95">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpeditionCard;
