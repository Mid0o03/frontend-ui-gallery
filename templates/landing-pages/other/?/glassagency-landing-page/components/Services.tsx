
import React from 'react';
import { Monitor, Cloud, TrendingUp, ArrowRight } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="glass-effect p-8 rounded-[2rem] flex flex-col gap-6 hover:-translate-y-2 transition-all duration-300 group cursor-default">
    <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center border border-white/80 text-primary shadow-sm group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-70 leading-relaxed text-sm">
        {description}
      </p>
    </div>
    <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Details</span>
      <ArrowRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="px-6 py-24 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Sophisticated Services</h2>
            <p className="opacity-70 text-lg leading-relaxed">
              We combine aesthetic excellence with technical robustness to deliver future-ready solutions tailored to your unique identity.
            </p>
          </div>
          <a href="#" className="text-primary font-bold flex items-center gap-2 group hover:gap-4 transition-all whitespace-nowrap">
            Explore all services 
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Monitor size={28} />}
            title="UI/UX Design"
            description="Translucent frosted glass interfaces with deep blur effects and seamless user journeys that convert visitors into fans."
          />
          <ServiceCard 
            icon={<Cloud size={28} />}
            title="Cloud Strategy"
            description="Scalable infrastructure that powers modern digital tools with 99.9% uptime, maximum security, and lightning speed."
          />
          <ServiceCard 
            icon={<TrendingUp size={28} />}
            title="Digital Marketing"
            description="Data-driven growth strategies designed for the next generation of social engagement and meaningful brand reach."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
