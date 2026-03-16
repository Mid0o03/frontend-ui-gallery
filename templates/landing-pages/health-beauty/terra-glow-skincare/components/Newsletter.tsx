
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-40 px-8 text-center max-w-2xl mx-auto">
      <h2 className="font-serif text-4xl md:text-5xl italic mb-8">Join the Glow</h2>
      <p className="text-sm font-light text-black/60 wide-tracking uppercase mb-16 tracking-[0.2em]">
        Receive our seasonal journal and early access to new rituals.
      </p>
      <form className="relative group">
        <input 
          type="email" 
          placeholder="YOUR EMAIL ADDRESS"
          className="w-full bg-transparent border-t-0 border-x-0 border-b border-sage-soft focus:border-primary focus:ring-0 text-xs font-bold wide-tracking py-6 px-4 placeholder:text-black/20"
          required
        />
        <button 
          type="submit" 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold uppercase wide-tracking hover:text-primary transition-colors py-2"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
