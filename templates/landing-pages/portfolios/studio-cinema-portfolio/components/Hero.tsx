
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={IMAGES.hero} 
          alt="Mist Peaks" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xs md:text-sm uppercase tracking-[0.5em] mb-8 text-primary font-bold"
        >
          Volume 01: Ethereal Light
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2 }}
          className="text-6xl md:text-[9rem] font-light italic mb-10 text-white tracking-tight leading-[0.9]"
        >
          The Silent Observer
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] uppercase tracking-[0.3em] font-medium text-white"
        >
          <span>35mm Film</span>
          <span>Shot in Iceland</span>
          <span>Winter 2023</span>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30"
      >
        <ChevronDown size={32} strokeWidth={1} className="text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;
