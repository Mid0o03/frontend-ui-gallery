import React from 'react';
import { content } from '../config/content';

/**
 * AboutSection Component
 * Displays the artist's bio, philosophy, and stats.
 * 
 * Content is managed in `src/config/content.ts` under the `about` key.
 */
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 flex flex-col md:flex-row gap-12 items-center">
      <div className="w-full md:w-1/2 relative">
        {/* Abstract blobs decoration behind image */}
        <div className="absolute top-0 right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>
        <div className="absolute -bottom-8 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>

        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLG9-LPONNN2b9AVm-tVqzKTF9AUjA3CJuHV_XNSN2-K8gHqItFaAmzVa9hGtEdLQzZu_vIE3X3TOaYZICfxF9qFlebr9_LVqKyL1u2Kz2h2dUqUTOqUSR4I7OV3llBq9klNWKlj1WbvSZsU-Hbk7gIFhvxFp-ewvCEo9O_rXeVEvgGJ7zk7E4iNiLj5llJFDCTHOlX0OXhuwUfV7PsAm_AzFGZfiTfkC4QJeL41FbbYmNuI6a7bM_e5PRNgjPXIZILKFFezhIX0U"
            alt="Artist working desk with tablet and plants"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <span className="text-primary font-bold tracking-widest uppercase text-sm">{content.about.sectionTitle}</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
          {content.about.headline.line1} <br /> {content.about.headline.line2} <br /> {content.about.headline.line3}
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {content.about.description}
        </p>

        <div className="flex gap-4 mt-4">
          {content.about.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm w-1/3 text-center">
              <span className="material-symbols-outlined text-primary text-3xl">{stat.icon}</span>
              <span className="font-bold text-slate-900 dark:text-white">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;