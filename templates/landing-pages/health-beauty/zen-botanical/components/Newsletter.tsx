
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="px-6 md:px-16 py-32 bg-white/40 dark:bg-white/5 border-t border-black/5 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extralight italic text-zen-black dark:text-white mb-6">Join the Zen Circle</h2>
        <p className="text-matcha/80 font-light mb-12 tracking-wide leading-relaxed">
          Sign up for soulful updates, early access to new collections, and botanical wisdom for your daily ritual.
        </p>
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 bg-white/80 dark:bg-white/5 border-none focus:ring-1 focus:ring-matcha rounded-full px-8 py-4 text-sm italic font-light shadow-sm"
          />
          <button className="px-10 py-4 bg-zen-black dark:bg-primary-leaf text-white dark:text-zen-black rounded-full text-sm font-medium tracking-wide hover:bg-zen-black/90 dark:hover:bg-primary-leaf/90 transition-all shadow-md">
            Subscribe
          </button>
        </form>
      </div>
      
      {/* Decorative leaf svg */}
      <div className="absolute -bottom-20 -right-20 opacity-5 dark:opacity-10 scale-150 rotate-45 pointer-events-none">
        <svg className="w-96 h-96 text-matcha" fill="currentColor" viewBox="0 0 48 48">
          <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Newsletter;
