import React from 'react';
import { content } from '../config/content';

interface StatCardProps {
    icon: string;
    label: string;
    value: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value }) => (
    <div className="bg-primary-dim border border-terminal-border rounded-lg p-4 flex items-center gap-4 hover:bg-primary/20 transition-colors cursor-default group">
        <div className="p-2 bg-primary/20 rounded-full text-primary group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
            <div className="text-xs text-primary/60 uppercase tracking-wider font-bold">{label}</div>
            <div className="text-white font-bold text-lg font-mono">{value}</div>
        </div>
    </div>
);

export const StatsGrid: React.FC = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {content.stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </section>
    );
};