
import React from 'react';
import { ARTISTS } from '../constants';

const Lineup: React.FC = () => {
  const headliners = ARTISTS.filter(a => a.tier === 'headliner');
  const supporting = ARTISTS.filter(a => a.tier === 'supporting');
  const emerging = ARTISTS.filter(a => a.tier === 'emerging');

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="lineup">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
        <div>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">The Lineup</h2>
          <p className="text-primary font-bold tracking-widest uppercase text-sm mt-2">Main Stage / Void Stage / Pulse Dome</p>
        </div>
        <div className="hidden md:block h-[1px] flex-grow mx-10 bg-white/10 self-center"></div>
      </div>

      {/* Headliners */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mb-20">
        {headliners.map(artist => (
          <div key={artist.name} className="group cursor-pointer">
            <h3 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter transition-all duration-300 group-hover:text-primary group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {artist.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Supporting */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-24">
        {supporting.map(artist => (
          <div key={artist.name} className="group cursor-pointer">
            <h4 className="text-3xl md:text-5xl font-bold uppercase transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,0,255,0.8)] text-white/50">
              {artist.name}
            </h4>
          </div>
        ))}
      </div>

      {/* Emerging */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-8 text-center opacity-40">
        {emerging.map(artist => (
          <span key={artist.name} className="text-lg font-medium uppercase hover:text-white hover:opacity-100 transition-all cursor-pointer">
            {artist.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Lineup;
