import React from 'react';
import gallery1 from '../assets/images/gallery_1.jpg';
import gallery2 from '../assets/images/gallery_2.jpg';
import gallery3 from '../assets/images/gallery_3.png';
import { siteContent } from '../config/content';

const galleryImages = [gallery1, gallery2, gallery3, gallery1, gallery2, gallery3];

const Gallery: React.FC = () => {
    return (
        <div className="py-32 container mx-auto px-4 sm:px-8 min-h-screen">
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mb-12 text-center text-primary">{siteContent.gallery.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i, index) => (
                    <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer">
                        <img
                            src={galleryImages[index]}
                            alt="Gallery Item"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-6">
                            <h3 className="text-white text-2xl font-display uppercase tracking-widest mb-2">Exhibit {i}</h3>
                            <p className="text-white/60 text-sm">Juniperus Chinensis</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
