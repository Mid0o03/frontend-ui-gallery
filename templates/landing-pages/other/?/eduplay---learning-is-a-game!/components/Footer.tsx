import React from 'react';
import { brandingConfig } from '../src/config/branding';
import { contentConfig } from '../src/config/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-8 border-primary px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm font-bold">rocket_launch</span>
            </div>
            <h2 className="text-xl font-black tracking-tighter text-primary">{brandingConfig.siteName}</h2>
          </div>
          <p className="font-bold text-gray-500 mb-6">{contentConfig.footer.description}</p>
          <div className="flex gap-4">
            <a href={brandingConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="size-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href={brandingConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="size-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">public</span>
            </a>
          </div>
        </div>

        {contentConfig.footer.sections.map((section) => (
          <div key={section.title}>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-primary">{section.title}</h4>
            <ul className="space-y-4 font-bold text-gray-500">
              {section.links.map(item => (
                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-edu-yellow/10 p-8 rounded-xl border-4 border-edu-yellow/20">
          <h4 className="font-black text-lg mb-4 text-edu-yellow">{contentConfig.footer.newsletter.title}</h4>
          <p className="text-sm font-bold text-gray-600 mb-4">{contentConfig.footer.newsletter.description}</p>
          <div className="flex gap-2">
            <input
              type="email"
              className="bg-white border-2 border-edu-yellow rounded-full px-4 py-2 w-full text-sm font-bold focus:ring-0"
              placeholder={contentConfig.footer.newsletter.placeholder}
            />
            <button className="bg-edu-yellow p-2 rounded-full border-2 border-edu-yellow text-white flex items-center justify-center candy-button">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-bold text-gray-400 text-sm">{contentConfig.footer.copyright}</p>
        <div className="flex gap-8 text-sm font-bold text-gray-400">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Quest</a>
        </div>
      </div>
    </footer>
  );
};
