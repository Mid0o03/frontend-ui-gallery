import React, { useLayoutEffect, useRef } from 'react';
import { content } from '../src/config/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturesGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Grid items staggered reveal
      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {content.features.title} <span className="text-primary">{content.features.titleAccent}</span>
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            {content.features.subtitle}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[750px]">
          {/* Main Feature Card */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-between overflow-hidden relative group hover:border-primary/50 transition-colors shadow-sm">
            <div>
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-time Advanced Analytics</h3>
              <p className="text-gray-600">
                Monitor every metric that matters to your growth. Custom dashboards that update in milliseconds.
              </p>
            </div>
            <div className="mt-8 bg-gray-50 rounded-2xl p-4 border border-gray-100 transform group-hover:scale-105 transition-transform">
              <img
                className="w-full rounded-lg"
                alt="Analytics Chart"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBp5Pu5fiyAGdCoEEeE3FaQivzCDrdwM_EU_cRhREdixatacMeKr0u2i9fEL0Ei8nEvi1A5uh7ZeRlgFv3kGHAUEa7ahK9AEEeLjdH3XQBO0c_wtUQ_ozw9f-7_SH678Dd8n-Q27gqsGFgFW9mcpUng4WpNblbtiq_5nMTPjszcb-Imc_18VnXYWP2-ENzTtIIgBVFpHruUWeAK8nHb_hAUCyljfku5vOB5PS31RYdgyoBnm_zF69a6gMkx3UHcpg3NvCgLX4SSIw"
              />
            </div>
          </div>

          {/* Social Proof Card */}
          <div className="md:col-span-1 md:row-span-1 bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-xl font-bold mb-2">10k+ Teams</h3>
              <p className="text-sm text-gray-500">Trusted globally by leaders.</p>
            </div>
            <div className="flex -space-x-3 mt-6">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  className="size-10 rounded-full border-2 border-white bg-gray-200"
                  alt={`Team member ${i}`}
                  src={`https://picsum.photos/seed/${i + 10}/100/100`}
                />
              ))}
              <div className="size-10 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                +9k
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="md:col-span-1 md:row-span-1 bg-primary text-white rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-5xl mb-4">verified_user</span>
            <h3 className="text-xl font-bold">Bank-Grade Security</h3>
          </div>

          {/* Connectivity Card */}
          <div className="md:col-span-2 md:row-span-1 bg-white rounded-3xl p-8 border border-gray-100 flex items-center gap-8 shadow-sm hover:border-primary/50 transition-colors">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3">Global Connectivity</h3>
              <p className="text-sm text-gray-600">Sync with over 200+ third-party applications instantly via our lightning-fast API.</p>
            </div>
            <div className="size-20 bg-primary/5 rounded-full border border-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">language</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
