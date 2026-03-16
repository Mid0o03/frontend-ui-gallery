import React from 'react';

const Learn: React.FC = () => {
    return (
        <div className="py-24 px-6 lg:px-20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-forest-green dark:text-white mb-8">Distillation & Extraction</h1>
            <div className="space-y-12">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Steam Distillation</h3>
                    <p className="text-slate-600 dark:text-slate-300">The most common method for extracting essential oils. Steam is passed through plant material, vaporizing the volatile compounds, which are then condensed back into liquid.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Cold Press Expression</h3>
                    <p className="text-slate-600 dark:text-slate-300">Used primarily for citrus peels. The mechanical action pierces the oil glands in the peel, releasing the essential oil without heat.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">CO2 Extraction</h3>
                    <p className="text-slate-600 dark:text-slate-300">Uses pressurized carbon dioxide to pull phytochemicals from the plant material. This method operates at lower temperatures, preserving more delicate therapeutic compounds.</p>
                </div>
            </div>
        </div>
    );
};

export default Learn;
