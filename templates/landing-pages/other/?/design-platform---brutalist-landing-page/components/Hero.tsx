
import React from 'react';
import { BrutalButton } from './ui/BrutalButton';

const Hero: React.FC = () => {
  return (
    <section className="bg-brutal-yellow border-b-4 border-black py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.85] text-black uppercase break-words tracking-tighter">
          Apprendre <br /> Le Design
        </h1>
        <div className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <p className="max-w-xl text-xl md:text-2xl font-bold text-black uppercase leading-tight">
            Rawer. Bolder. Louder. The education platform for the next generation of designers who aren't afraid of the grid.
          </p>
          <BrutalButton 
            className="bg-black text-white px-12 py-6 text-2xl" 
            shadowSize="lg"
          >
            Rejoindre
          </BrutalButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
