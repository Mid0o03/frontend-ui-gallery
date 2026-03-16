import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../src/config/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.from(badgeRef.current, { y: -20, opacity: 0, duration: 0.8 })
        .from(titleRef.current, { y: 40, opacity: 0 }, "-=0.6")
        .from(descRef.current, { y: 20, opacity: 0 }, "-=0.7")
        .from(actionsRef.current, { y: 20, opacity: 0 }, "-=0.7")
        .from(imageRef.current, { scale: 0.95, opacity: 0, duration: 1.2 }, "-=0.5");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-20 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 transition-transform hover:scale-105 cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {content.hero.badge}
        </div>

        <h1 ref={titleRef} className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
          {content.hero.title} <br />
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            {content.hero.titleAccent}
          </span>
        </h1>

        <p ref={descRef} className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          {content.hero.description}
        </p>

        <div ref={actionsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/signup" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl shadow-primary/30 hover:-translate-y-1 active:scale-95">
            {content.hero.primaryCTA}
          </Link>
          <Link to="/pricing" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-100 px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:-translate-y-1 active:scale-95">
            {content.hero.secondaryCTA}
          </Link>
        </div>
      </div>

      <div ref={imageRef} className="max-w-6xl mx-auto mt-20 relative px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden p-2 md:p-4">
          <div className="bg-gray-50 rounded-xl overflow-hidden aspect-[16/9] relative">
            <img
              className="w-full h-full object-cover rounded-lg"
              alt="Dashboard Preview"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChbdQPy9O2eGoxkwa07QxbL1Q9PGfebcqh5aIXYNYEx16ylVC401GzF5NKFOK3FzfKNDwELJzYOc0PSeo5JjRsbe1x7MhPWX0-sn20IwIe7B1-i6_VHNjj5ygz6TpGxS-7YNGDO3QsLbMrFluBHOYgZR_pz4XhTb90odOfwOZlN4BMDPuzxkormpGkdZwaqOJ9AcxsBYq9OX0ZZ2QDHSzkEYUQNJiBe_XjByVxBdssXWnzgrP4u4IUx6OH4aUBROY6nqyCHZK3clw"
            />
          </div>
        </div>

        <div className="absolute -top-10 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-10 -left-4 w-48 h-48 bg-primary/30 rounded-full blur-3xl opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
