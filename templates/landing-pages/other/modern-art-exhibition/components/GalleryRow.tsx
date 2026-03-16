import React from 'react';
import { content } from '../config/content';

export const GalleryRow: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 swiss-border-b min-h-[300px]">
      {/* Big Number Column */}
      <div className="col-span-12 md:col-span-3 p-6 swiss-border-r flex flex-col justify-end bg-swiss-black relative overflow-hidden group">
        <div className="absolute inset-0 bg-[#0f2216] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
        <span className="text-[10rem] leading-none font-bold text-[#193324] select-none block -mb-8 -ml-4 relative z-10 group-hover:text-primary transition-colors duration-500">
          {content.gallery.sectionNumber}
        </span>
      </div>

      {/* Images Columns */}
      <div className="col-span-12 md:col-span-9 p-0 flex flex-col md:flex-row h-[300px] md:h-auto">
        {content.gallery.images.map((img, index) => (
          <div
            key={index}
            className={`w-full md:w-1/3 border-b md:border-b-0 border-[#234832] ${index !== content.gallery.images.length - 1 ? 'md:border-r' : ''} relative group overflow-hidden`}
          >
            <div
              className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              style={{ backgroundImage: `url('${img.url}')` }}
              role="img"
              aria-label={img.alt}
            ></div>
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Hover Reveal Content */}
            <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs font-mono uppercase bg-black text-white px-2 py-1">View Work</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};