
import React from 'react';
import { contentConfig } from '../src/config/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-block bg-edu-blue/20 text-edu-blue font-black px-4 py-1 rounded-full text-xs tracking-widest uppercase mb-6">
            {contentConfig.hero.badge}
          </span>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 drop-shadow-sm">
            {contentConfig.hero.title} <br /> <span className="text-primary bg-clip-text">{contentConfig.hero.titleAccent}</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-600 mb-10 max-w-xl">
            {contentConfig.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button className="candy-button bg-edu-red text-white text-xl font-black px-12 py-5 rounded-full flex items-center justify-center gap-3 group shadow-[0_10px_0_0_#CC3D3D] hover:shadow-[0_12px_0_0_#B33636] active:shadow-none transition-all">
              {contentConfig.hero.ctaPrimary}
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">sports_esports</span>
            </button>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="size-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                    <img src={`https://picsum.photos/seed/child${i}/100/100`} alt="Avatar" />
                  </div>
                ))}
              </div>
              <p className="font-bold text-sm text-gray-500">{contentConfig.hero.socialProof}</p>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform scale-75"></div>

          {/* Floating Objects */}
          <div className="absolute top-10 right-10 floating" style={{ animationDelay: '0.5s' }}>
            <div className="bg-edu-yellow p-4 rounded-xl rotate-12 shadow-xl border-4 border-white">
              <span className="material-symbols-outlined text-4xl text-white">star</span>
            </div>
          </div>
          <div className="absolute bottom-20 left-10 floating" style={{ animationDelay: '1.2s' }}>
            <div className="bg-edu-blue p-4 rounded-full -rotate-12 shadow-xl border-4 border-white">
              <span className="material-symbols-outlined text-4xl text-white">edit</span>
            </div>
          </div>
          <div className="absolute top-1/2 left-0 floating" style={{ animationDelay: '0.8s' }}>
            <div className="bg-edu-red p-4 rounded-2xl rotate-6 shadow-xl border-4 border-white">
              <span className="material-symbols-outlined text-4xl text-white">calculate</span>
            </div>
          </div>

          <div className="relative z-20 w-full h-full flex items-center justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 bg-primary rounded-full relative group bouncy-hover transition-all duration-500 overflow-hidden border-[12px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544890225-2f3faec4cd30?auto=format&fit=crop&q=80&w=1000"
                alt="Playful Owl"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
