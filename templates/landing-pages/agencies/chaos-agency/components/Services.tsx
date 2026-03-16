import React from 'react';
import { CONTENT } from '../config';

const Services: React.FC = () => {
  return (
    <section className="w-full border-b-3 border-black bg-white px-6 py-20 sm:px-10" id="services">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 border-b-3 border-black pb-6 md:flex-row md:items-end">
          <h2 className="text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl">
            {CONTENT.services.title.split(' ')[0]} <br className="hidden md:block" /> {CONTENT.services.title.split(' ')[1]}
          </h2>
          <p className="max-w-md text-lg font-bold uppercase leading-tight md:text-right">
            {CONTENT.services.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-2">
          {CONTENT.services.items.map((service) => (
            <div
              key={service.id}
              className={`
                group relative overflow-hidden rounded-xl border-3 border-black p-8 shadow-neo transition-all hover:-translate-y-1 hover:shadow-neo-lg
                ${service.colSpan || ''} 
                ${service.rowSpan || ''}
                ${service.theme === 'yellow' ? 'bg-neo-yellow' : ''}
                ${service.theme === 'black' ? 'bg-black text-white' : ''}
                ${service.theme === 'white' ? 'bg-white' : ''}
                ${service.theme === 'green' ? 'bg-neo-green' : ''}
              `}
            >
              {/* Icon Badge */}
              {service.theme !== 'black' && (
                <div className={`
                  mb-6 flex h-16 w-16 items-center justify-center rounded-full border-3 border-black
                  ${service.theme === 'yellow' ? 'absolute right-4 top-4 h-12 w-12 bg-white' : 'bg-white'}
                  ${service.theme === 'green' ? 'bg-white' : ''}
                  ${service.theme === 'white' ? 'bg-white' : ''}
                `}>
                  <span className="material-symbols-outlined text-3xl font-bold">{service.icon}</span>
                </div>
              )}

              {/* Special Layout for Tall Dark Card */}
              {service.theme === 'black' ? (
                <div className="flex h-full flex-col justify-between">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-3 border-white bg-neo-green">
                    <span className="material-symbols-outlined text-3xl text-black">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="mb-4 text-3xl font-black uppercase text-white">{service.title}</h3>
                    <p className="mb-6 text-base font-medium text-gray-300">{service.description}</p>
                    {service.items && (
                      <ul className="space-y-2 font-mono text-sm uppercase text-neo-green">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="block h-2 w-2 bg-neo-green"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ) : (
                <div className={service.theme === 'yellow' ? 'mt-12 flex h-full flex-col justify-between' : ''}>
                  {service.image && (
                    <div
                      className="mb-6 h-64 w-full overflow-hidden rounded-lg border-3 border-black bg-black bg-cover bg-center"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    >
                      <div className="h-full w-full bg-black/20 transition-colors group-hover:bg-transparent"></div>
                    </div>
                  )}
                  <div>
                    <span className={`material-symbols-outlined mb-4 text-5xl ${service.theme === 'green' ? 'text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]' : ''}`}>
                      {service.theme === 'white' || service.theme === 'green' ? service.icon : ''}
                    </span>
                    <h3 className="mb-2 text-2xl font-black uppercase sm:text-3xl lg:text-4xl">{service.title}</h3>
                    <p className="text-sm font-bold leading-tight sm:text-lg">{service.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;