import React from 'react';
import { content } from '../config/content';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-primary">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              {content.services.badge}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-heading sm:text-4xl">
              {content.services.title}
            </h2>
            <p className="text-lg text-slate-600">
              {content.services.description}
            </p>
            <ul className="space-y-3">
              {content.services.features.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <button className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-blue-700 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                {content.services.cta}
              </button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-full">
            {/* Abstract service representation */}
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col justify-center items-center text-center gap-6">
              <div className="h-20 w-20 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-[40px]">design_services</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-heading">{content.services.card.title}</h3>
                <p className="text-slate-500 mt-2">{content.services.card.description}</p>
              </div>
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-primary rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full mt-4">
                {content.services.card.stats.map((stat) => (
                  <div key={stat.label} className="bg-slate-50 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-slate-heading">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;