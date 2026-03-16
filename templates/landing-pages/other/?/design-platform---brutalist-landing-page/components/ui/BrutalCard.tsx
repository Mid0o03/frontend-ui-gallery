
import React from 'react';
import { BrutalButton } from './BrutalButton';

interface BrutalCardProps {
  title: string;
  level: string;
  duration: string;
  imageUrl: string;
}

export const BrutalCard: React.FC<BrutalCardProps> = ({ title, level, duration, imageUrl }) => {
  return (
    <div className="bg-brutal-blue border-4 border-black p-6 flex flex-col gap-6 group hover:translate-y-[-4px] transition-transform">
      <div className="w-full aspect-square border-4 border-black bg-white flex items-center justify-center overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover grayscale contrast-125"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">
          {title}
        </h3>
        <div className="flex flex-col text-white/90 font-bold uppercase text-sm">
          <span>Level: {level}</span>
          <span>{duration}</span>
        </div>
      </div>

      <BrutalButton className="mt-auto bg-white text-black py-3 text-sm" shadowSize="sm">
        View Course
      </BrutalButton>
    </div>
  );
};
