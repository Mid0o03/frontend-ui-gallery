import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../src/config/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        scale: 0.95,
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6">
      <div ref={contentRef} className="max-w-7xl mx-auto px-10 py-20 rounded-[3rem] bg-primary relative overflow-hidden shadow-2xl shadow-primary/20">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 size-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 size-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready to experience the <span className="underline decoration-white/30 underline-offset-8">future</span> of dashboards?
          </h2>
          <p className="text-white/80 text-lg mb-12 leading-relaxed">
            Join 10,000+ teams who are building better products with BentoGrid. Start your 14-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/signup" className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95">
              {content.hero.primaryCTA}
            </Link>
            <Link to="/pricing" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:bg-white/20 active:scale-95">
              {content.hero.secondaryCTA}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
