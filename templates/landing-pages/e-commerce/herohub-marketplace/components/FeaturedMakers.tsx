
import React from 'react';

const makers = [
  {
    name: 'Alex "Forge" Rivers',
    description: 'Custom leather goods & vintage restorations.',
    tag: 'Handmade',
    image: 'https://picsum.photos/seed/maker1/800/800',
    followers: '1.2k',
    avatars: ['https://i.pravatar.cc/150?u=1', 'https://i.pravatar.cc/150?u=2', 'https://i.pravatar.cc/150?u=3']
  },
  {
    name: 'Pixel Queen',
    description: 'Retro-futuristic illustrations and icons.',
    tag: 'Digital Art',
    image: 'https://picsum.photos/seed/maker2/800/800',
    followers: '4.8k',
    avatars: ['https://i.pravatar.cc/150?u=4', 'https://i.pravatar.cc/150?u=5']
  },
  {
    name: 'GreenTech Studio',
    description: 'Sustainably sourced outdoor equipment.',
    tag: 'Eco Gear',
    image: 'https://picsum.photos/seed/maker3/800/800',
    followers: '920',
    avatars: ['https://i.pravatar.cc/150?u=6', 'https://i.pravatar.cc/150?u=7', 'https://i.pravatar.cc/150?u=8', 'https://i.pravatar.cc/150?u=9']
  },
];

export const FeaturedMakers: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-violet-accent/5 border-y border-white/[0.05]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-black tracking-tight mb-4">Meet Our Featured Makers</h2>
          <p className="text-slate-400">Hand-picked creators who embody the community spirit. Every week we showcase heroes who push the boundaries of creativity.</p>
        </div>
        <button className="flex items-center gap-2 text-primary font-bold group hover:gap-4 transition-all">
          View All Creators <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">trending_flat</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {makers.map((maker) => (
          <div key={maker.name} className="group relative bg-white/[0.03] rounded-3xl p-4 border border-white/[0.05] hover:bg-white/[0.05] hover:border-primary/30 transition-all cursor-pointer">
            <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt={maker.name} 
                src={maker.image}
              />
              <div className="absolute top-4 left-4 bg-background-dark/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">{maker.tag}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="px-2">
              <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{maker.name}</h4>
              <p className="text-sm text-slate-500 mb-6 line-clamp-2">{maker.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {maker.avatars.map((av, idx) => (
                    <div key={idx} className="w-8 h-8 rounded-full border-2 border-background-dark bg-slate-700 overflow-hidden">
                      <img src={av} alt="Follower" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium">{maker.followers} Followers</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
