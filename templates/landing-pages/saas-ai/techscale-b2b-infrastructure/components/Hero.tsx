
import React from 'react';
import { Icon } from './Icon';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40 hero-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#135bec]/10 text-[#135bec] text-xs font-bold uppercase tracking-wider mb-8">
          <Icon name="verified" className="text-sm" />
          Enterprise Readiness Guaranteed
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-6 max-w-4xl leading-[1.1]">
          Infrastructure for the <span className="text-[#135bec]">Next Decade</span>
        </h1>
        
        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mb-12">
          Scalable, secure, and sovereign server solutions designed for ultra-low latency and enterprise-grade performance at global scale.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <button className="bg-[#135bec] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#135bec]/20 transition-all">
            Get Started
          </button>
          <button className="bg-white border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
            View Specifications
          </button>
        </div>

        <div className="relative w-full max-w-5xl">
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 flex items-center justify-center">
            <img 
              alt="Modern data center server rack isometric view" 
              className="w-full h-full object-cover opacity-80" 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=2000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
