
import React, { useState } from 'react';
import { FEATURES } from '../constants';
import { TabType } from '../types';

export const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.ANALYTICS);

  const currentFeature = FEATURES.find(f => f.id === activeTab) || FEATURES[0];

  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Nos piliers de performance</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            Découvrez comment notre expertise technologique soutient vos objectifs stratégiques au quotidien.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Tabs */}
          <div className="flex w-full max-w-3xl border-b border-slate-200 dark:border-slate-800 mb-12">
            {FEATURES.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex-1 flex flex-col items-center gap-3 pb-5 transition-all relative ${
                  activeTab === feature.id 
                    ? 'text-primary' 
                    : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
              >
                <span className={`material-symbols-outlined text-4xl ${activeTab === feature.id ? 'font-fill' : ''}`}>
                  {feature.icon}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest">{feature.id}</span>
                {activeTab === feature.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full shadow-[0_-4px_10px_rgba(15,73,189,0.4)]"></div>
                )}
              </button>
            ))}
          </div>

          {/* Feature Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full bg-slate-50 dark:bg-slate-900/40 p-8 md:p-16 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-inner">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                {currentFeature.title}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                {currentFeature.description}
              </p>
              <ul className="space-y-4">
                {currentFeature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-bold">
                    <div className="flex-shrink-0 size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm font-bold">check</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full aspect-video bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:opacity-0 transition-opacity"></div>
                <img 
                  alt={currentFeature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={currentFeature.imageUrl} 
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Aperçu de l'interface {currentFeature.id}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Dernière mise à jour: Aujourd'hui</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
