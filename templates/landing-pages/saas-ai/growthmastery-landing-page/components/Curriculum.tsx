import React from 'react';
import { content } from '../config';

const Curriculum: React.FC = () => {
  const { curriculum } = content;

  // Note: The lessons are kept hardcoded as they provide specific detail that might not be in the simple content config,
  // but the modules titles and descriptions are now pulled from config.
  // In a real scenario, we'd probably move everything to content.ts or a separate JSON.

  return (
    <section id="curriculum" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{curriculum.title}</h2>
          <p className="text-slate-600 dark:text-slate-400">{curriculum.subtitle}</p>
        </div>

        <div className="space-y-4">
          {curriculum.modules.map((module, idx) => (
            <details key={idx} className="group bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden" open={idx === 0}>
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{module.title}</h3>
                    <p className="text-sm text-slate-500">{module.description}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
              </summary>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Detailed lessons and resources for this module are available in the course portal.
                </p>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                  <span className="material-symbols-outlined text-lg text-primary">lock</span>
                  Enroll to unlock full curriculum
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;