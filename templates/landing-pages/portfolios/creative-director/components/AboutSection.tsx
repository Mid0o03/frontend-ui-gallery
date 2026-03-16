import React from 'react';
import { content } from '../config/content';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="px-6 md:px-40 py-24 flex flex-col md:flex-row gap-16 items-start">
      <div className="w-full md:w-1/3">
        <div className="sticky top-32">
          <span className="font-mono text-primary text-xs tracking-widest uppercase mb-4 block">{content.about.badge}</span>
          <h2 className="text-3xl font-bold leading-tight">{content.about.title}</h2>
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
        {content.about.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#222] mt-8">
          <div>
            <h4 className="text-white font-bold mb-4 text-base">{content.about.capabilities.title}</h4>
            <ul className="font-mono text-xs text-gray-500 space-y-3 uppercase tracking-wide">
              {content.about.capabilities.items.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1 bg-primary rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-base">{content.about.recognition.title}</h4>
            <ul className="font-mono text-xs text-gray-500 space-y-3 uppercase tracking-wide">
              {content.about.recognition.items.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1 bg-primary rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;