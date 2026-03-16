
import React from 'react';
import AICoach from './AICoach';

const disciplines = [
  {
    icon: 'fitness_center',
    title: 'Powerlifting',
    description: 'Max output focus. Squat, bench, and deadlift programs designed for competitive strength levels.',
  },
  {
    icon: 'timer',
    title: 'HIIT Sprints',
    description: 'Tactical cardiovascular conditioning. Sprints, sleds, and high-volume intervals for endurance.',
  },
  {
    icon: 'sports_martial_arts',
    title: 'Combat Fit',
    description: 'Striking and tactical movement. Functional strength training for combat athletes and defense.',
  }
];

const Disciplines: React.FC = () => {
  return (
    <section id="programs" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-32 pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <h2 className="text-7xl font-black tracking-tighter uppercase italic leading-none">Disciplines</h2>
           <p className="max-w-xs text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] leading-relaxed">
             Specialized training pathways built for high-performance outcomes. No fluff, just heavy metal.
           </p>
        </div>

        <div className="grid md:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 mb-12">
          {disciplines.map((d, i) => (
            <div key={i} className="bg-background-dark p-12 hover:bg-primary transition-all duration-500 group cursor-default">
              <span className="material-symbols-outlined text-4xl mb-10 group-hover:text-white text-primary transition-colors">{d.icon}</span>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-black transition-colors">{d.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-10 group-hover:text-black/80 transition-colors">{d.description}</p>
              <a href="#" className="text-[10px] font-bold tracking-[0.3em] uppercase group-hover:text-white flex items-center gap-2 group-hover:translate-x-2 transition-all">
                Details <span className="material-symbols-outlined text-sm">north_east</span>
              </a>
            </div>
          ))}
          <div className="md:col-span-1">
             <AICoach />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
