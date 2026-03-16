import React from 'react';
import { contentConfig } from '../src/config/content';

const Bubble: React.FC<{ text: string; author: string; color: string; avatar: string; delay?: string }> = ({ text, author, color, avatar }) => (
  <div className="flex flex-col items-center group">
    <div className="bg-white p-8 rounded-xl border-[4px] relative mb-6 shadow-xl transition-transform group-hover:scale-105" style={{ borderColor: color }}>
      <p className="font-medium italic text-gray-700">"{text}"</p>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-r-[4px] border-b-[4px] rotate-45" style={{ borderColor: color }}></div>
    </div>
    <div className={`size-16 rounded-full border-4 overflow-hidden shadow-lg`} style={{ borderColor: color }}>
      <img src={avatar} alt={author} className="w-full h-full object-cover" />
    </div>
    <p className="font-black mt-2 text-sm text-center tracking-wide uppercase">{author}</p>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16">{contentConfig.testimonials.title}</h2>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {contentConfig.testimonials.bubbles.map((bubble, index) => (
            <div key={bubble.author} className={index === 1 ? "md:pt-12" : ""}>
              <Bubble
                text={bubble.text}
                author={bubble.author}
                color={bubble.color}
                avatar={bubble.avatar}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
