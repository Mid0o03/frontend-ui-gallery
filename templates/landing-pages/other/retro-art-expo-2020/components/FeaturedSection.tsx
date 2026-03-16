
import React from 'react';

const FeaturedSection: React.FC = () => {
  return (
    <div className="border-[8px] border-black bg-white p-6 md:p-10 pixel-shadow flex flex-col md:flex-row gap-10 items-center">
      {/* Featured Image */}
      <div className="w-full md:w-1/2 border-[6px] border-black bg-primary p-3 relative group overflow-hidden">
        <img 
          src="https://picsum.photos/id/102/800/800" 
          alt="Mecha Series" 
          className="w-full border-4 border-black saturate-150 contrast-125 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute -top-6 -right-6 bg-retro-yellow border-[4px] border-black text-black px-4 py-2 font-heading rotate-12 z-10 shadow-lg">
          NEW!
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="font-heading text-4xl text-black mb-6 leading-none">THE MECHA SERIES</h2>
        <p className="text-black font-bold uppercase mb-8 leading-tight">
          A deep dive into industrial design from a fictional 1980s future. Featuring 12 original blueprints and interactive prototypes.
        </p>

        <ul className="space-y-4 mb-10">
          {[
            { label: '24 LIMITED EDITIONS', color: 'bg-retro-pink' },
            { label: 'HAND-PULLED PRINTS', color: 'bg-retro-teal' },
            { label: 'AUGMENTED REALITY', color: 'bg-retro-yellow' }
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-black font-bold text-sm tracking-widest uppercase">
              <span className={`w-6 h-6 border-2 border-black ${item.color}`}></span>
              {item.label}
            </li>
          ))}
        </ul>

        <button className="w-full py-5 bg-primary text-white border-[6px] border-black font-heading text-lg hover:bg-black transition-all pixel-shadow-sm active:shadow-none active:translate-y-1">
          VIEW COLLECTION
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
