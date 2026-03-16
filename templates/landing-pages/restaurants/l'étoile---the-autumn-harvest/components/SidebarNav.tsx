
import React, { useState, useEffect } from 'react';

const SidebarNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'chapter1', 'chapter2', 'imagination', 'centerpiece', 'chapter3'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust detection range
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Intro' },
    { id: 'chapter1', label: 'Chapter I' },
    { id: 'chapter2', label: 'Chapter II' },
    { id: 'imagination', label: 'Imagination' },
    { id: 'chapter3', label: 'Chapter III' },
    { id: 'footer', label: 'Finalé' }
  ];

  return (
    <div className="fixed left-8 md:left-12 top-1/2 -translate-y-1/2 hidden lg:block z-40">
      <ul className="flex flex-col gap-8 text-[10px] font-bold uppercase tracking-[0.25em] text-text-dark/30 font-sans">
        {navItems.map((item) => (
          <li key={item.id} className="flex items-center gap-4 group cursor-pointer transition-all">
            <span className={`h-px transition-all duration-500 ${activeSection === item.id ? 'w-10 bg-primary' : 'w-4 bg-current group-hover:w-8 group-hover:bg-text-dark'}`}></span>
            <a 
              href={`#${item.id}`} 
              className={`transition-all duration-300 ${activeSection === item.id ? 'text-primary translate-x-1' : 'hover:text-text-dark'}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;
