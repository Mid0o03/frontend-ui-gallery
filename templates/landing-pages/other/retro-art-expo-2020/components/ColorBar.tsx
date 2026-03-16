
import React from 'react';

const ColorBar: React.FC = () => {
  const colors = [
    'bg-retro-pink',
    'bg-retro-teal',
    'bg-retro-yellow',
    'bg-primary',
    'bg-white',
    'bg-black'
  ];

  return (
    <div className="w-full max-w-7xl mt-4 grid grid-cols-6 gap-2">
      {colors.map((color, i) => (
        <div key={i} className={`h-8 border-4 border-black ${color} pixel-shadow-sm`}></div>
      ))}
    </div>
  );
};

export default ColorBar;
