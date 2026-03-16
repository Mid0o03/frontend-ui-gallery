import React from 'react';
import { contentConfig } from '../src/config/content';

const PathCard: React.FC<{
  title: string;
  desc: string;
  color: string;
  icon: string;
  progress: number;
  offset?: boolean;
}> = ({ title, desc, color, icon, progress, offset }) => (
  <div className={`group relative pt-12 ${offset ? 'lg:mt-24' : ''}`}>
    <div className={`bg-white border-[6px] rounded-xl p-8 shadow-2xl transition-transform hover:-translate-y-4`} style={{ borderColor: color }}>
      <div className={`absolute -top-8 left-1/2 -translate-x-1/2 size-20 rounded-full border-[6px] border-white flex items-center justify-center text-white shadow-lg`} style={{ backgroundColor: color }}>
        <span className="material-symbols-outlined text-4xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-black mt-6 mb-4">{title}</h3>
      <p className="text-gray-600 font-medium">{desc}</p>
      <div className="mt-8 bg-gray-100 h-3 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${progress}%`, backgroundColor: color }}></div>
      </div>
      <p className="text-xs font-bold mt-2 uppercase tracking-tight" style={{ color }}>{progress}% of explorers completed</p>
    </div>
  </div>
);

export const LearningPath: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="learn">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
        <svg fill="none" height="100%" viewBox="0 0 1440 1200" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path className="path-line" d="M-50 100C100 100 300 400 600 400C900 400 1100 100 1300 100C1500 100 1600 300 1600 600C1600 900 1400 1100 1100 1100C800 1100 600 800 300 800C0 800 -200 1000 -400 1000" stroke="#7f19e6" strokeDasharray="40 40" strokeLinecap="round" strokeWidth="24"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">{contentConfig.learningPath.title}</h2>
          <p className="text-lg font-medium text-gray-500 max-w-2xl mx-auto">{contentConfig.learningPath.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {contentConfig.learningPath.paths.map((path, index) => (
            <PathCard
              key={path.title}
              title={path.title}
              desc={path.desc}
              color={path.color}
              icon={path.icon}
              progress={path.progress}
              offset={path.offset}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
