
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className = "" }) => {
  return (
    <div className={`bg-white dark:bg-[#2d1e18] p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl flex flex-col gap-6 relative group hover:-translate-y-2 transition-all duration-300 ${className}`}>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div 
            className="size-14 rounded-full border-2 border-primary overflow-hidden bg-slate-200 bg-cover bg-center"
            style={{ backgroundImage: `url(${testimonial.avatar})` }}
          />
          {testimonial.verified && (
            <div className="absolute -bottom-1 -right-1 bg-primary text-white p-0.5 rounded-full border-2 border-white dark:border-[#2d1e18]">
              <span className="material-symbols-outlined text-[10px] block font-bold">verified</span>
            </div>
          )}
        </div>
        <div>
          <p className="font-bold text-lg text-slate-900 dark:text-white">{testimonial.name}</p>
          <p className="text-sm text-slate-500 dark:text-primary/70">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex gap-1 text-primary">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="material-symbols-outlined filled text-xl">star</span>
        ))}
      </div>
      
      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
        {testimonial.content}
      </p>
      
      <div className="flex items-center gap-6 mt-auto pt-4 border-t border-slate-100 dark:border-white/5 text-slate-400 group-hover:text-slate-500 transition-colors">
        <button className="flex items-center gap-2 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-xl">thumb_up</span>
          <span className="text-sm font-bold">{testimonial.likes}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-xl">share</span>
        </button>
      </div>
    </div>
  );
};
