import React from 'react';

import { content } from '../config/content';

export const TechStackWidget: React.FC = () => {
  return (
    <div className="bento-card h-full rounded-[24px] bg-surface-dark border border-surface-border p-6 flex flex-col justify-center">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold text-lg">Tech Arsenal</h3>
        <span className="text-xs text-gray-500 font-medium bg-white/5 px-2 py-1 rounded-md">Core Stack</span>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
        {content.techStack.map((item) => (
          <div key={item.name} className="flex flex-col items-center gap-2 group cursor-default" title={item.name}>
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
              <img
                src={item.src}
                alt={item.name}
                className={`w-6 h-6 transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110 ${item.invert ? 'grayscale group-hover:grayscale-0' : ''} ${item.name === 'Next.js' ? 'bg-white rounded-full p-[1px]' : ''}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};