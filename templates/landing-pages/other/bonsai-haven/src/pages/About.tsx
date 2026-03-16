import React from 'react';
import { content } from '../config/content';

const About: React.FC = () => {
    return (
        <div className="pt-10 pb-20 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-moss dark:text-white mb-8">{content.about.title}</h1>
                    <p className="text-lg text-moss/80 dark:text-white/80 leading-relaxed mb-6">
                        {content.about.description1}
                    </p>
                    <p className="text-lg text-moss/80 dark:text-white/80 leading-relaxed mb-8">
                        {content.about.description2}
                    </p>
                    <div className="flex gap-4">
                        {content.about.stats.map((stat, index) => (
                            <div key={index} className="flex-1 p-6 rounded-2xl bg-moss/5 dark:bg-white/5">
                                <h3 className="font-bold text-2xl text-moss dark:text-white mb-2">{stat.value}</h3>
                                <p className="text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={content.about.image}
                        alt="About us"
                        className="rounded-[3rem] shadow-2xl rotate-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
