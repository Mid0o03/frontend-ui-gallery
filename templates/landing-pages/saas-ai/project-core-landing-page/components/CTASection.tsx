
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="mt-24 mb-12 flex flex-col items-center text-center">
      <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to dive in?</h2>
      <p className="text-white/50 max-w-xl mb-10 text-lg leading-relaxed">
        Our open-source community is building the future of distributed systems. Join thousands of developers on GitHub or start with our CLI.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-8 py-3.5 rounded-lg bg-primary text-[#102210] font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">rocket_launch</span>
          Get Started Free
        </button>
        <button className="px-8 py-3.5 rounded-lg bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined">star</span>
          Star on GitHub
        </button>
      </div>
    </section>
  );
};

export default CTASection;
