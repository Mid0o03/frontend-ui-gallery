
import React from 'react';

const features = [
  { icon: 'done_all', text: '100% Angus Beef' },
  { icon: 'local_fire_department', text: 'Flame Grilled' },
  { icon: 'eco', text: 'Locally Sourced' },
  { icon: 'delivery_dining', text: 'Flash Delivery' },
];

const FeaturesMarquee: React.FC = () => {
  return (
    <section className="relative z-20 bg-black py-10 mt-20 border-y-8 border-black">
      <div className="flex overflow-hidden">
        <div className="flex whitespace-nowrap gap-16 animate-marquee items-center">
          {[...features, ...features, ...features].map((f, i) => (
            <div key={i} className="flex items-center gap-6 text-white group">
              <span className="material-symbols-outlined text-[#0df259] text-4xl transform group-hover:scale-125 transition-transform">
                {f.icon}
              </span>
              <span className="text-3xl font-black italic uppercase tracking-tighter">
                {f.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesMarquee;
