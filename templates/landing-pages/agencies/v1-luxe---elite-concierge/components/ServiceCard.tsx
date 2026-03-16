
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group bg-background-dark p-8 md:p-12 flex flex-col gap-6 transition-all duration-700 hover:bg-white/[0.03] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="flex items-center gap-4 relative z-10">
        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">{service.number}</span>
        <div className="h-[1px] w-8 bg-primary/40 group-hover:w-12 transition-all duration-500"></div>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-light text-silver-light group-hover:italic group-hover:translate-x-2 transition-all duration-500 relative z-10">
        {service.title}
      </h3>
      
      <p className="text-silver-dark text-sm leading-relaxed max-w-xs font-light relative z-10 group-hover:text-silver-light transition-colors duration-500">
        {service.description}
      </p>
      
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 flex items-center gap-2 text-[10px] tracking-widest uppercase text-silver relative z-10">
        Explore Access <span className="material-symbols-outlined text-xs">arrow_forward</span>
      </div>
    </div>
  );
};

export default ServiceCard;
