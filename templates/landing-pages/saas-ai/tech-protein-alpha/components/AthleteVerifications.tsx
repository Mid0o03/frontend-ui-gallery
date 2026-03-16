
import React from 'react';

const reviews = [
  {
    id: '01',
    name: 'Marcus Chen',
    role: 'Olympic Weightlifter / ID: 88219',
    text: '"The solubility is unlike anything I\'ve seen. Dissolves instantly in zero-temp water. Recovery metrics are up 15%."',
    img: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '02',
    name: 'Elena Rodriguez',
    role: 'Triathlete / ID: 44201',
    text: '"Clean, sharp flavor. No bloat. It feels like fueling my body with pure precision-engineered energy."',
    img: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '03',
    name: 'David Vo',
    role: 'IFBB Pro / ID: 11092',
    text: '"Verified lab results showed zero heavy metals. Finally, a supplement that takes purity as seriously as I do."',
    img: 'https://picsum.photos/100/100?random=3'
  }
];

export const AthleteVerifications: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">Field Reports</h2>
        <h3 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tighter">Athlete Verifications</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, i) => (
          <div key={i} className="border border-border-dark bg-bg-dark p-8 flex flex-col gap-6 relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="material-symbols-outlined text-primary text-sm font-fill">star</span>
              ))}
            </div>
            
            <p className="text-gray-300 text-sm italic leading-relaxed relative z-10">
              {rev.text}
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="size-12 rounded-full border border-primary/30 overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all">
                <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs font-bold uppercase">{rev.name}</p>
                <p className="text-gray-500 text-[9px] uppercase font-mono tracking-tighter">{rev.role}</p>
              </div>
            </div>
            
            <div className="absolute bottom-0 right-0 p-4 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
              <span className="text-6xl font-black italic">{rev.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
