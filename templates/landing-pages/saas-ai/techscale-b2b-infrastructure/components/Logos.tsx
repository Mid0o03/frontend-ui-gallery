
import React from 'react';

const LOGOS = [
  'https://www.vectorlogo.zone/logos/logitech/logitech-ar21.svg',
  'https://www.vectorlogo.zone/logos/samsung/samsung-ar21.svg',
  'https://www.vectorlogo.zone/logos/cisco/cisco-ar21.svg',
  'https://www.vectorlogo.zone/logos/datadoghq/datadoghq-ar21.svg',
  'https://www.vectorlogo.zone/logos/intel/intel-ar21.svg',
];

export const Logos: React.FC = () => {
  return (
    <section className="py-16 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
          Powering the world's most innovative enterprises
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500">
          {LOGOS.map((logo, i) => (
            <div key={i} className="h-8 flex items-center justify-center">
              <img src={logo} alt="Partner Logo" className="max-h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
