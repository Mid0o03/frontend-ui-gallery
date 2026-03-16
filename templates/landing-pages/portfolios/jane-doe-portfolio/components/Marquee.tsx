import React from 'react';
import { content } from '../config/content';

const Marquee: React.FC = () => {
  // Duplicate items enough times to fill the screen for smooth loop
  const repeatedItems = [...content.marquee, ...content.marquee, ...content.marquee, ...content.marquee];

  return (
    <div className="bg-primary overflow-hidden py-3 border-y border-border-color relative z-10">
      <div className="whitespace-nowrap inline-block animate-marquee font-mono font-bold text-background-dark text-sm uppercase tracking-widest">
        {repeatedItems.map((item, index) => (
          <span key={index} className="mx-4">
            • {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;