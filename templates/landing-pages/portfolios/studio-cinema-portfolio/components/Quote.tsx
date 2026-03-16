
import React from 'react';
import { motion } from 'framer-motion';
import { Quote as QuoteIcon } from 'lucide-react';

interface QuoteProps {
  text: string;
  author: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
  return (
    <section className="py-32 md:py-64 text-center px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.5 }}
        >
          <QuoteIcon className="mx-auto text-primary mb-12 opacity-80" size={48} strokeWidth={1} />
        </motion.div>
        
        <blockquote className="text-3xl md:text-5xl italic font-light leading-[1.3] text-white/90">
          "{text}"
        </blockquote>
        
        <cite className="block mt-10 text-[10px] uppercase tracking-[0.4em] opacity-30 italic">
          — {author}
        </cite>
      </motion.div>
    </section>
  );
};

export default Quote;
