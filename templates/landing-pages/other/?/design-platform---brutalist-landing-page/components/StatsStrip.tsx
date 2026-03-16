
import React from 'react';

const StatsStrip: React.FC = () => {
  const items = [
    "20k+ Students",
    "45 Courses",
    "Zero Bullsh*t",
    "20k+ Students",
    "45 Courses",
    "Zero Bullsh*t"
  ];

  return (
    <div className="bg-black text-white py-4 overflow-hidden border-b-4 border-black">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-20 px-10 font-black text-xl md:text-2xl uppercase italic shrink-0">
            {items.map((text, idx) => (
              <span key={idx}>{text}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsStrip;
