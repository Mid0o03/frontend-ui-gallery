
import React from 'react';
import { Service } from '../types';

interface ServiceItemProps {
  service: Service;
  onClick: (service: Service) => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, onClick }) => {
  return (
    <div 
      onClick={() => onClick(service)}
      className="group relative py-8 px-10 spot-uv chrome-border cursor-pointer flex items-center justify-between border-b last:border-b-0 border-white/5 hover:border-[#17b0cf]/30 transition-all duration-500"
    >
      <div className="flex flex-col">
        <span className="text-[10px] text-[#17b0cf]/60 font-medium tracking-[0.2em] uppercase mb-1">
          {service.level}
        </span>
        <h2 className="text-white text-2xl font-light tracking-wide group-hover:text-[#17b0cf] transition-colors duration-500">
          {service.title}
        </h2>
        <p className="text-gray-500 text-sm font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {service.description}
        </p>
      </div>
      <span className="material-symbols-outlined text-white/20 group-hover:text-[#17b0cf] transition-all duration-500 transform group-hover:translate-x-2 text-xl">
        arrow_forward_ios
      </span>
    </div>
  );
};

export default ServiceItem;
