
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-40 flex flex-col md:flex-row gap-24 items-center overflow-hidden" id="about">
      <div className="relative w-full md:w-1/2">
        <div className="absolute -left-12 -top-12 md:-left-20 md:-top-20 writing-vertical text-[6rem] md:text-[12rem] font-black text-gray-50 select-none pointer-events-none">
          自己紹介
        </div>
        
        <div className="relative z-10 pl-4 md:pl-20">
          <span className="text-vermilion font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-7xl font-extrabold mb-10 text-ink leading-[1.1]">
            Mastering the Art of Digital Ink.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-xl font-light">
            I am a multidisciplinary designer specializing in the intersection of traditional Japanese aesthetics and high-performance digital design. My work draws inspiration from the bold lines of Hokusai and the minimalist philosophy of Zen.
          </p>
          
          <div className="flex items-center gap-16">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-primary mb-1">12+</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-primary mb-1">85</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Projects Done
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative group">
          {/* Decorative frame */}
          <div className="absolute inset-0 border-[1px] border-primary translate-x-6 translate-y-6 transition-transform duration-500 group-hover:translate-x-8 group-hover:translate-y-8" />
          
          <div className="relative z-10 w-64 h-80 md:w-80 md:h-[30rem] bg-gray-100 overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/artist/800/1200" 
              alt="Designer Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Hanko Stamp */}
          <div className="absolute -bottom-8 -right-8 z-20 bg-vermilion text-white p-3 md:p-4 border-[3px] border-vermilion shadow-xl transition-transform hover:scale-110">
            <div className="border border-white/30 p-1 flex flex-col items-center">
               <span className="text-xs md:text-sm font-black tracking-tighter writing-vertical">創作者</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
