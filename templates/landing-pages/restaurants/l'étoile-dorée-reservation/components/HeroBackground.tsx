
import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10"></div>
      <img 
        className="w-full h-full object-cover" 
        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070" 
        alt="Elegant Restaurant Interior"
      />
    </div>
  );
};

export default HeroBackground;
