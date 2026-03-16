import React from 'react';
import { content } from '../config/content';

const ServicesTicker: React.FC = () => {
  // Duplicate items for seamless loop
  const tickerItems = [...content.services, ...content.services, ...content.services, ...content.services];

  return (
    <div id="services" className="w-full bg-[#111] border-y border-[#222] overflow-hidden py-6 mb-20 relative z-20">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <div className="flex gap-12 items-center whitespace-nowrap px-6">
          {tickerItems.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={`text-3xl md:text-5xl font-bold ${item.type === 'outline' ? 'text-outline' : 'text-white'
                  }`}
              >
                {item.text}
              </span>
              <span className="material-symbols-outlined text-primary text-xl md:text-2xl animate-spin-slow">asterisk</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Gradient Masks for Fade Effect */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default ServicesTicker;