
import React from 'react';

const StatsBanner: React.FC = () => {
  const items = [
    { icon: 'bolt', text: 'Ultra Responsive' },
    { icon: 'security', text: 'Military Grade' },
    { icon: 'language', text: 'Global Network' },
    { icon: 'all_inclusive', text: 'Infinite Scale' },
    { icon: 'rocket_launch', text: 'Supersonic Sync' },
    { icon: 'verified_user', text: 'Zero Trust Core' },
  ];

  return (
    <section className="bg-primary py-8 -mt-10 relative z-20 skew-y-1">
      <div className="overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
          {/* Double the items for seamless loop */}
          {[...items, ...items].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-black">
              <span className="material-symbols-outlined font-black">{item.icon}</span>
              <span className="text-xl font-black italic tracking-tighter uppercase">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
