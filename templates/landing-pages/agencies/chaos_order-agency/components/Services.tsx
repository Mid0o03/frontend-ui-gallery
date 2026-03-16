import React from 'react';
import Button from './ui/Button';
import { content } from '../config/content';

const Services: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-primary" id="work">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b-[3px] border-black pb-8">
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-black leading-none" dangerouslySetInnerHTML={{ __html: content.services.title.replace(' ', '<br />') }}>
          </h2>
          <p className="text-xl font-bold max-w-sm text-right mb-2">
            {content.services.subtitle}
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

          {/* Web Design (Large Box) */}
          <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] p-8 md:col-span-2 md:row-span-2 rounded-[2rem] relative overflow-hidden group hover:shadow-neo-hover hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
            <div className="absolute top-4 right-4 bg-black text-white p-2 rounded-full border-2 border-white z-10">
              <span className="material-symbols-outlined">grid_view</span>
            </div>
            <div className="h-full flex flex-col justify-between gap-12">
              <div className="w-full h-56 md:h-64 bg-black rounded-xl border-2 border-black overflow-hidden relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  src="https://picsum.photos/id/48/800/600"
                  alt="Abstract web interface"
                />
              </div>
              <div>
                <h3 className="text-4xl font-black mb-2 uppercase">Web Design</h3>
                <p className="font-bold text-lg border-l-4 border-primary pl-4">High impact interfaces that convert.</p>
              </div>
            </div>
          </div>

          {/* Branding (Tall Narrow) */}
          <div className="bg-black text-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] p-6 md:col-span-1 md:row-span-2 rounded-[2rem] flex flex-col justify-between group hover:shadow-neo-hover hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-4xl text-primary">brush</span>
              <span className="text-6xl font-black text-[#333] group-hover:text-primary transition-colors">02</span>
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-black mb-4 uppercase text-primary">Branding</h3>
              <p className="text-gray-300 font-medium leading-relaxed">
                Visual identities that scream. Logos, typography, and guidelines that set you apart from the noise.
              </p>
            </div>
            <button className="mt-8 w-full py-3 bg-white text-black font-black uppercase border-2 border-white hover:bg-primary hover:border-primary transition-colors rounded-xl flex justify-center items-center gap-2">
              View Cases <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </button>
          </div>

          {/* Strategy (Small Box) */}
          <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] p-6 md:col-span-1 rounded-[2rem] group hover:bg-[#ff00ff] hover:text-white transition-colors cursor-pointer hover:shadow-neo-hover hover:translate-x-[4px] hover:translate-y-[4px]">
            <span className="material-symbols-outlined text-4xl mb-4 group-hover:text-white">ads_click</span>
            <h3 className="text-2xl font-black uppercase">Strategy</h3>
            <p className="font-bold text-sm mt-2">Market disruption tactics.</p>
          </div>

          {/* Development (Wide Box) */}
          <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000] p-6 md:col-span-2 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 hover:shadow-neo-hover hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
            <div className="bg-primary p-4 rounded-xl border-2 border-black shrink-0">
              <span className="material-symbols-outlined text-4xl text-black">terminal</span>
            </div>
            <div>
              <h3 className="text-3xl font-black uppercase">Development</h3>
              <p className="font-bold mt-2">Clean code, dirty aesthetics. React, Vue, WebGL.</p>
            </div>
            <div className="ml-auto">
              <span className="material-symbols-outlined text-4xl rotate-[-45deg] bg-black text-white rounded-full p-2">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;