
import React from 'react';
import { Heart, Brain, Wind } from 'lucide-react';

const PhilosophyCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="group flex flex-col gap-6 rounded-3xl border border-transparent bg-soft-beige/50 p-10 transition-all hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-bold text-text-dark">{title}</h3>
      <p className="leading-relaxed text-text-muted">
        {description}
      </p>
    </div>
  </div>
);

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 px-6" id="approach">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-text-dark md:text-5xl">My Philosophy</h2>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-primary/40"></div>
          <p className="mt-8 max-w-[700px] text-lg text-text-muted">
            Rooted in empathy and evidence-based strategy, I provide a holistic approach to your personal and professional development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <PhilosophyCard 
            icon={Heart} 
            title="Radical Empathy" 
            description="Providing a safe, non-judgmental space to explore your thoughts and vulnerabilities without hesitation."
          />
          <PhilosophyCard 
            icon={Brain} 
            title="Strategic Method" 
            description="Using proven methodologies and clinical frameworks to help you navigate through complex life challenges."
          />
          <PhilosophyCard 
            icon={Wind} 
            title="Holistic Growth" 
            description="Focusing on the whole self—mind, body, and spirit—to ensure sustainable and long-term inner harmony."
          />
        </div>
      </div>
    </section>
  );
};
