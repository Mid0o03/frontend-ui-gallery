
import React from 'react';
import { Testimonial } from '../types';
import { IconMap } from './Icons';
import { Quote } from 'lucide-react';

export const TestimonialCard: React.FC<Testimonial> = ({ names, event, quote, imageUrl, icon }) => {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 -rotate-6 transition-transform group-hover:rotate-6"></div>
        <div 
          className="w-24 h-24 rounded-full border-2 border-old-rose overflow-hidden relative z-10 bg-old-rose shadow-xl shadow-old-rose/50"
          style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        </div>
        <div className="absolute -bottom-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center z-20 shadow-md">
          {IconMap[icon]}
        </div>
      </div>
      
      <div className="mb-4 text-primary opacity-30">
        <Quote size={40} />
      </div>
      
      <p className="text-lg lg:text-xl font-medium leading-relaxed italic mb-6 text-[#1b0d10]/90">
        "{quote}"
      </p>
      
      <div className="mt-auto">
        <h4 className="font-bold text-[#1b0d10] tracking-wide uppercase text-sm">{names}</h4>
        <p className="text-primary text-xs font-medium mt-1">{event}</p>
      </div>
    </div>
  );
};
