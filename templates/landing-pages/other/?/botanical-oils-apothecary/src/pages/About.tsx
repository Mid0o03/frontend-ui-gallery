import React from 'react';

const About: React.FC = () => {
    return (
        <div className="py-24 px-6 lg:px-20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-forest-green dark:text-white mb-8">Rooted in Science, Guided by Nature.</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Botanical Oils Apothecary was founded by a collective of clinical herbalists and chemical engineers with a shared mission: to provide the highest quality, scientifically verified botanical extracts to the professional market.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Every batch we produce undergoes rigorous GC/MS testing to ensure purity and potency. We work directly with small-scale, sustainable farms worldwide, ensuring fair wages and regenerative agricultural practices.
            </p>
        </div>
    );
};

export default About;
