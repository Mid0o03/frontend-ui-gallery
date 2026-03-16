import React from 'react';
import { Window } from './Window';
import { content } from '../config/content';

/**
 * HeroSection Component
 * 
 * Displays the main introduction area of the shop within a Window component.
 * Features a pixel-art style heading and a retro image display.
 */
export const HeroSection: React.FC = () => {
  const { hero } = content;

  return (
    <Window
      title={hero.windowTitle}
      controls={true}
      className="h-full flex flex-col"
    >
      <div className="p-4 bg-white shadow-win95-in h-full flex flex-col md:flex-row gap-6 relative overflow-hidden flex-1">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E')" }}></div>

        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-[0.9]">
            {hero.title.part1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vapor-blue to-vapor-pink">{hero.title.gradient}</span> <br />
            {hero.title.part2}
          </h1>
          <p className="font-mono-retro text-xl text-gray-600 leading-tight">
            {hero.subtitle.map((line, i) => (
              <React.Fragment key={i}>
                {line}<br />
              </React.Fragment>
            ))}
          </p>
          <div className="pt-4 flex gap-3">
            <button className="bg-retro-gray px-6 py-2 shadow-win95 active:shadow-win95-in text-black font-bold border border-transparent active:border-dotted active:border-black focus:outline-none focus:ring-1 focus:ring-black transition-transform active:scale-[0.98]">
              {hero.buttons.primary}
            </button>
            <button className="bg-retro-gray px-6 py-2 shadow-win95 active:shadow-win95-in text-black font-bold border border-transparent active:border-dotted active:border-black focus:outline-none focus:ring-1 focus:ring-black transition-transform active:scale-[0.98]">
              {hero.buttons.secondary}
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full md:w-1/2 h-64 md:h-auto bg-black shadow-win95-in p-1">
          <img
            alt={hero.image.alt}
            className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
            src={hero.image.src}
          />
          <div className="absolute bottom-4 right-4 bg-primary text-black font-mono-retro text-xl px-2">
            {hero.image.label}
          </div>
        </div>
      </div>
    </Window>
  );
};