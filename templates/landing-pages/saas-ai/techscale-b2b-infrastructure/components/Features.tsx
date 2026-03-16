
import React from 'react';
import { FEATURES } from '../constants';
import { Icon } from './Icon';

export const Features: React.FC = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-4">Enterprise-Grade Capabilities</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Engineered to handle the most demanding workloads with extreme precision and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="group">
              <div className="mb-6 text-[#135bec]">
                <Icon 
                  name={feature.icon} 
                  className="text-4xl font-light group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
