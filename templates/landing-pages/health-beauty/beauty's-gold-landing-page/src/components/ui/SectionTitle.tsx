import React from 'react';

export const SectionTitle: React.FC<{ title: string; number?: string; subtitle?: string }> = ({ title, number, subtitle }) => (
    <div className="mb-16">
        <div className="flex items-center gap-2">
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
                {title} {number && <span className="text-primary">{number}</span>}
            </h3>
        </div>
        {subtitle && (
            <p className="text-zinc-500 mt-2 uppercase text-[10px] tracking-widest-2xl">
                {subtitle}
            </p>
        )}
    </div>
);
