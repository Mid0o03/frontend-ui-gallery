import React from 'react';
import { content } from '../config/content';

const Workshops: React.FC = () => {
    return (
        <div className="pt-10 pb-20 px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moss dark:text-white mb-6">{content.workshops.title}</h1>
            <p className="text-xl text-moss/70 dark:text-white/70 mb-12 max-w-2xl">
                {content.workshops.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-auto md:row-span-2">
                    <img
                        src={content.workshops.featured.image}
                        alt="Workshop"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                        <span className="bg-primary text-background-dark text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">{content.workshops.featured.tag}</span>
                        <h3 className="text-3xl font-bold text-white mb-2">{content.workshops.featured.title}</h3>
                        <p className="text-gray-300 mb-6">{content.workshops.featured.description}</p>
                        <button className="bg-white text-moss font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors w-fit">{content.workshops.featured.buttonText} - {content.workshops.featured.price}</button>
                    </div>
                </div>

                {content.workshops.list.map((workshop, index) => (
                    <div key={index} className="p-8 rounded-3xl bg-moss/5 dark:bg-white/5 border border-moss/10 dark:border-white/10">
                        <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">{workshop.tag}</span>
                        <h3 className="text-2xl font-bold text-moss dark:text-white mb-4">{workshop.title}</h3>
                        <p className="text-moss/70 dark:text-white/70 mb-6">{workshop.description}</p>
                        <div className="flex items-center justify-between">
                            <span className="font-serif text-xl font-bold text-moss dark:text-white">{workshop.price}</span>
                            <button className="text-moss dark:text-white font-bold hover:text-primary transition-colors">{workshop.buttonText} →</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Workshops;
