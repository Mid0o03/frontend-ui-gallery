import React, { useRef } from 'react';
import { content } from '../config/content';

interface WorkItemProps {
  title: string;
  category: string;
  image: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, category, image }) => (
  <div className="min-w-[85vw] md:min-w-[600px] snap-center">
    <div className="bg-white border-[3px] border-black rounded-[1.5rem] overflow-hidden group h-[400px] relative shadow-neo">
      <img
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
        src={image}
        alt={title}
      />
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-24 translate-y-2 group-hover:translate-y-0 transition-transform">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-3xl font-black text-white uppercase shadow-black drop-shadow-lg">{title}</h3>
            <p className="text-primary font-bold">{category}</p>
          </div>
          <button className="bg-primary text-black p-3 rounded-full border-2 border-black hover:scale-110 transition-transform hover:bg-white">
            <span className="material-symbols-outlined">north_east</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const SelectedWorks: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const works = content.works.items;

  return (
    <section className="py-20 border-t-[3px] border-black bg-white overflow-hidden relative">
      <div className="px-4 md:px-10 mb-10 flex items-center justify-between max-w-[1200px] mx-auto">
        <h2 className="text-5xl font-black bg-black text-white px-4 py-2 rotate-2 inline-block shadow-[6px_6px_0px_0px_#f9f506]">
          {content.works.title}
        </h2>
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => scroll('left')}
            className="w-14 h-14 flex items-center justify-center border-[3px] border-black rounded-full hover:bg-primary transition-colors shadow-neo active:translate-y-1 active:shadow-none"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-14 h-14 flex items-center justify-center border-[3px] border-black rounded-full hover:bg-primary transition-colors shadow-neo active:translate-y-1 active:shadow-none"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-4 md:px-10 pb-10 snap-x snap-mandatory scrollbar-hide"
      >
        {works.map((work, index) => (
          <WorkItem key={index} {...work} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;