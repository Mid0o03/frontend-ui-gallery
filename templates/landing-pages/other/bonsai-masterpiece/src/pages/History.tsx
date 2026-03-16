import React from 'react';
import historyImage from '../assets/images/history_bonsai.jpg';
import { siteContent } from '../config/content';

const History: React.FC = () => {
    return (
        <div className="py-32 overflow-hidden min-h-screen">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <div className="md:w-1/2 relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                        <img
                            src={historyImage}
                            className="rounded-3xl shadow-2xl relative z-10"
                            alt={siteContent.history.title}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="font-display text-primary text-xl tracking-[0.3em] uppercase mb-4">{siteContent.history.subtitle}</h3>
                        <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mb-8">{siteContent.history.title}</h2>
                        <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-6">
                            {siteContent.history.description}
                        </p>
                        <div className="grid grid-cols-3 gap-8">
                            {siteContent.history.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <p className="font-display text-3xl text-primary">{stat.value}</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest text-stone-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
