
import React from 'react';

const stories = [
  {
    id: 1,
    title: "The Ritual of Morning Tea: Finding Stillness",
    category: "Mindfulness",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAvfo7Tt2-7Savmh1e0nD4rnIzSzfopcirjMh4u-gzwPnH5EKrtIF5oEviQpxAOZVO9xTnVSGicyxr76GbJBWn4yeY09CovkdlEXJw6AWp2KmPhE-slFIIFqIsdLOo3pcgyS8xXWpj8BZKd__UVxRsF9jHeqQnVsUaKiMcU0Fzp_2V1T3x_Ce8Wld9_5U7rzN-P1SGaVmz3IsoHfCVVhrC2LJlE3WAQWkOPk-EA7yN6RSh5bG9SXShPVEFx_xbc4IiQ4tDjhh16noc",
    link: "#"
  },
  {
    id: 2,
    title: "Creating a Sanctuary: Decorating with Life",
    category: "Sanctuary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVI6vNatY7x9lYODbOmMgg_pZLOk17JJ2pxomL1qDAYMfjQxhVuRu_bkL9KdL4tV-RfFmoR5R3YdTFK2uyIuGw-7XdAIWvJOs7Zc-TTdGQO73pbiTSq-3GW1wt_D-bzjb_gPdd5FAmGI4IYAMLk2nz-xDrQZI1USXMhYIMiYsgXbrn3poE3uR4AhwO0uOKhcuWHTS-bGygCYsxgPmh8q_ICKagsroC0CQAcatvFFM67aoIFeCE3J6-HIZ2wRmRApQpFzLR61rEplPp",
    link: "#"
  }
];

const WellnessStories: React.FC = () => {
  return (
    <section className="px-6 md:px-16 py-32 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extralight italic text-zen-black dark:text-white mb-6">Wellness Stories</h2>
          <p className="text-matcha font-light tracking-wide">Exploring the intersection of nature and modern living.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {stories.map((story) => (
            <div key={story.id} className="group relative h-[600px] overflow-hidden rounded-3xl cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-zen-black/90 via-zen-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90" />
              <img 
                src={story.image} 
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14 z-20">
                <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-medium mb-4 block">
                  {story.category}
                </span>
                <h3 className="text-3xl lg:text-4xl text-white font-light mb-8 max-w-md leading-tight">
                  {story.title}
                </h3>
                <button className="text-white text-xs uppercase tracking-widest border-b border-white/30 pb-2 hover:border-primary-leaf hover:text-primary-leaf transition-all">
                  Read Journal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessStories;
