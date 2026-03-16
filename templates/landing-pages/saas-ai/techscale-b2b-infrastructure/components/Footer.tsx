
import React from 'react';
import { FOOTER_SECTIONS } from '../constants';
import { Icon } from './Icon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#135bec] p-1.5 rounded-lg text-white">
                <Icon name="cloud_done" className="text-xl leading-none" />
              </div>
              <h2 className="text-lg font-extrabold tracking-tight">TechScale B2B</h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Next-generation infrastructure solutions for the modern digital enterprise. Built for scale, security, and performance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-[#135bec] transition-colors"><Icon name="share" /></a>
              <a href="#" className="text-gray-400 hover:text-[#135bec] transition-colors"><Icon name="language" /></a>
              <a href="#" className="text-gray-400 hover:text-[#135bec] transition-colors"><Icon name="rss_feed" /></a>
            </div>
          </div>
          
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-[#135bec] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 TechScale Infrastructure Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#135bec] transition-colors">Sitemap</a>
            <a href="#" className="hover:text-[#135bec] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
