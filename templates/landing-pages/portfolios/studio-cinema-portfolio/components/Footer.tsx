
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 md:py-48 border-t border-white/5 bg-background-dark/30">
      <div className="max-w-5xl mx-auto text-center px-6">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-8xl italic font-light mb-20 text-white tracking-tight"
        >
          Let's create something cinematic.
        </motion.h4>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32">
          <motion.a 
            whileHover={{ y: -5 }}
            className="group flex flex-col items-center" 
            href="mailto:hello@studiocinema.com"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100 transition-opacity mb-3">Inquiries</span>
            <span className="text-xl md:text-2xl border-b border-primary/20 group-hover:border-primary transition-all pb-1 font-light italic text-white/90">
              hello@studiocinema.com
            </span>
          </motion.a>

          <motion.a 
            whileHover={{ y: -5 }}
            className="group flex flex-col items-center" 
            href="#"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100 transition-opacity mb-3">Social</span>
            <span className="text-xl md:text-2xl border-b border-primary/20 group-hover:border-primary transition-all pb-1 font-light italic text-white/90">
              @studio_cinema
            </span>
          </motion.a>
        </div>
        
        <div className="mt-32 pt-24 opacity-20 text-[10px] uppercase tracking-[0.5em]">
          Ethereal Light Series — Volume 01 — Iceland 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
