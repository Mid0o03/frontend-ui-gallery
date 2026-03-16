
import React from 'react';
import { ArrowRight } from 'lucide-react';

import { content } from '../src/config/content';

const collections = content.featuredCollections.items;

const FeaturedCollections: React.FC = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 py-24 bg-moss/[0.02] dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="text-4xl font-serif text-moss dark:text-white italic">Featured Collections</h2>
            <p className="text-moss/60 dark:text-white/60 text-lg">Hand-selected trees for every stage of your journey.</p>
          </div>
          <a className="text-primary font-bold flex items-center gap-2 group hover:gap-4 transition-all" href="#">
            View All Collections <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {collections.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-xl shadow-moss/5 group-hover:shadow-primary/10 transition-all duration-500">
                <div className="absolute inset-0 bg-moss/30 group-hover:bg-moss/10 transition-colors duration-700 z-10"></div>
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-moss/90 via-transparent to-transparent z-20 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-8 left-8 z-30 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-white text-3xl font-serif italic mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm font-medium tracking-wide uppercase">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
