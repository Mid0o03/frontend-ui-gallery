
import React, { useState } from 'react';

const categories = ['All', 'Minimal', 'Dark', 'Clean'];
const images = [
  { id: '1', url: 'https://picsum.photos/600/600?random=11', category: 'Minimal', title: 'Spatial Design' },
  { id: '2', url: 'https://picsum.photos/600/600?random=12', category: 'Dark', title: 'OLED Mockup' },
  { id: '3', url: 'https://picsum.photos/600/600?random=13', category: 'Clean', title: 'White Balance' },
  { id: '4', url: 'https://picsum.photos/600/600?random=14', category: 'Minimal', title: 'Mono Concept' },
  { id: '5', url: 'https://picsum.photos/600/600?random=15', category: 'Clean', title: 'Pure Layout' },
  { id: '6', url: 'https://picsum.photos/600/600?random=16', category: 'Dark', title: 'Deep Night' },
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 space-y-4 md:space-y-0">
          <h2 className="text-3xl font-extrabold text-gray-900">Curated Showcase</h2>
          <div className="flex items-center space-x-2 bg-white p-1 rounded-lg shadow-sm border border-gray-100">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map(img => (
            <div key={img.id} className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square">
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">{img.category}</span>
                <h3 className="text-white text-xl font-bold">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
