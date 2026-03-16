import React, { useLayoutEffect, useRef } from 'react';
import { content } from '../src/config/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (statsContainerRef.current) {
        gsap.from(statsContainerRef.current.children, {
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div ref={statsContainerRef} className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {content.stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">{stat.value}</p>
              <p className="text-sm font-bold text-primary uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
