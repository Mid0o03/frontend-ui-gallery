
import React from 'react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'The Concept', href: '#' },
    { label: 'Architecture', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'Location', href: '#' },
    { label: 'Inquire', href: '#' }
  ];

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background-dark/95 backdrop-blur-2xl flex flex-col justify-center items-center transition-all duration-700 ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
      }`}
    >
      <nav className="flex flex-col gap-6 md:gap-10 text-center">
        {menuItems.map((item, index) => (
          <a 
            key={item.label}
            href={item.href}
            onClick={onClose}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`font-serif text-4xl md:text-7xl lg:text-8xl text-white/40 hover:text-white hover:italic transition-all duration-500 transform ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className={`absolute bottom-12 text-center transition-opacity duration-1000 delay-500 ${isOpen ? 'opacity-40' : 'opacity-0'}`}>
        <p className="text-[10px] tracking-widest-custom uppercase">Malibu • California • 2024</p>
      </div>
    </div>
  );
};
