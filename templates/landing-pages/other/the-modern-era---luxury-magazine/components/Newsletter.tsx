
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-40 md:py-56 px-6 bg-white border-t border-brand-black/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.15em] mb-10">
          Join the Inner Circle
        </h2>
        <p className="text-sm md:text-lg tracking-[0.1em] opacity-60 mb-20 max-w-2xl mx-auto font-light leading-relaxed px-4">
          Receive our weekly curation of exclusive editorials, early access to limited print editions, and insights from the world's leading designers.
        </p>

        {isSubscribed ? (
          <div className="animate-fade-in py-10 border border-zinc-100 bg-zinc-50">
            <p className="text-brand-black font-serif italic text-xl">Thank you for joining our community.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-0 max-w-3xl mx-auto">
            <input 
              className="flex-1 bg-transparent border-[0.5px] border-brand-black px-8 py-5 text-xs tracking-widest focus:outline-none focus:ring-0 focus:border-brand-black transition-colors"
              placeholder="YOUR EMAIL ADDRESS"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              className="bg-brand-black text-white text-xs font-bold uppercase tracking-[0.3em] px-14 py-5 hover:bg-white hover:text-brand-black border-[0.5px] border-brand-black transition-all duration-500 mt-4 md:mt-0"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        )}
        
        <p className="mt-10 text-[9px] uppercase tracking-[0.2em] opacity-30">
          Privacy is our highest luxury. No spam, ever.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
