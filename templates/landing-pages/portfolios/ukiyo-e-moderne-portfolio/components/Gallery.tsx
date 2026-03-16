
import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';

const GalleryCard: React.FC<{ item: GalleryItem }> = ({ item }) => {
  const sizeClasses = {
    large: 'md:col-span-8 aspect-video',
    small: 'md:col-span-4 aspect-square',
    tall: 'md:col-span-4 aspect-[3/4]',
  };

  return (
    <div className={`group relative overflow-hidden cursor-pointer border border-primary/10 hover:border-vermilion transition-all duration-500 ${sizeClasses[item.size]}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 backdrop-blur-[2px]">
        <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-bold mb-1 font-traditional">{item.title}</h3>
          <p className="text-xs opacity-80 uppercase tracking-widest font-bold">{item.category}</p>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24" id="galerie">
      <div className="flex justify-between items-end mb-16 border-b border-primary/10 pb-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-2">Galerie d'Art</h2>
          <p className="text-primary/60 dark:text-gray-400 italic">Le monde flottant à travers un prisme moderne.</p>
        </div>
        <div className="hidden md:block text-right">
          <span className="font-traditional text-3xl text-vermilion">作品集</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {GALLERY_ITEMS.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
