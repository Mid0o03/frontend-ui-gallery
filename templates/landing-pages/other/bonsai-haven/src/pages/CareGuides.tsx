import React from 'react';

const CareGuides: React.FC = () => {
    return (
        <div className="pt-10 pb-20 px-6 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-moss dark:text-white mb-6">Care Guides</h1>
            <p className="text-xl text-moss/70 dark:text-white/70 mb-12 max-w-2xl">
                Everything you need to know to keep your miniature trees thriving.
            </p>

            <div className="grid gap-8">
                {[
                    { title: 'Watering Basics', desc: 'Understanding when and how to water your bonsai is crucial for its survival.' },
                    { title: 'Pruning Techniques', desc: 'Learn the art of shaping your tree through careful pruning.' },
                    { title: 'Seasonal Care', desc: 'How to protect your bonsai through the changing seasons.' },
                ].map((guide, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl border border-moss/10 dark:border-white/10 hover:border-primary/50 transition-colors">
                        <div className="w-16 h-16 bg-moss/10 dark:bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <span className="font-serif text-2xl font-bold text-moss dark:text-white">{i + 1}</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-moss dark:text-white mb-2">{guide.title}</h3>
                            <p className="text-moss/70 dark:text-white/70 mb-4">{guide.desc}</p>
                            <button className="text-primary font-bold hover:underline">Read Guide</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareGuides;
