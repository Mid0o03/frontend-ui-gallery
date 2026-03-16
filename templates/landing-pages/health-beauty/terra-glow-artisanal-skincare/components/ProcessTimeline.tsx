
import React from 'react';

const steps = [
  {
    num: "01",
    title: "Ethical Foraging",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    ),
    description: "We wait for the peak season. Ingredients are harvested by hand only when their potency is at its absolute height.",
    color: "bg-primary/10 border-primary/30 text-primary"
  },
  {
    num: "02",
    title: "Slow Infusion",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: "We don't use heat. Our oils are infused using traditional solar techniques for 42 days to preserve cellular integrity.",
    color: "bg-ochre/10 border-ochre/30 text-ochre"
  },
  {
    num: "03",
    title: "Hand Pouring",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    description: "Each bottle is individually filled, labeled by hand, and marked with its unique batch number for total transparency.",
    color: "bg-primary/10 border-primary/30 text-primary"
  }
];

const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-32 bg-forest text-white px-6 overflow-hidden grainy-overlay relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">The Journey of a Bottle</h2>
          <p className="text-white/40 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">Our 8-Week Artisanal Cycle</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-8 relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex-1 text-center lg:text-left group">
              <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mx-auto lg:mx-0 mb-10 border transition-transform duration-500 group-hover:scale-110 shadow-2xl`}>
                {step.icon}
              </div>
              <h4 className="font-serif text-3xl mb-6 italic">{step.num}. {step.title}</h4>
              <p className="text-white/40 font-light leading-relaxed text-lg max-w-sm mx-auto lg:mx-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
