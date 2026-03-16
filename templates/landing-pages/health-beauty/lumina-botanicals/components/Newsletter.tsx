import React from 'react';
import { CONTENT } from '../config/content';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-secondary/20 dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto bg-white dark:bg-[#20201d] rounded-xl p-8 md:p-16 shadow-soft text-center border border-gray-100 dark:border-gray-800">
        <span className="material-symbols-outlined text-4xl text-green-700 dark:text-primary mb-6 block mx-auto">mail</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{CONTENT.newsletter.title}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-lg mx-auto">
          {CONTENT.newsletter.description}
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-grow relative">
            <input
              type="email"
              placeholder={CONTENT.newsletter.placeholder}
              className="w-full h-12 md:h-14 px-6 rounded-full bg-gray-50 dark:bg-background-dark border-none focus:ring-2 focus:ring-primary text-sm placeholder-gray-400 outline-none transition-shadow"
            />
          </div>
          <button
            type="button"
            className="h-12 md:h-14 px-8 rounded-full bg-primary text-accent-text font-bold text-sm hover:brightness-105 transition-all shadow-md whitespace-nowrap hover:scale-105"
          >
            {CONTENT.newsletter.buttonText}
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-6">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
};

export default Newsletter;