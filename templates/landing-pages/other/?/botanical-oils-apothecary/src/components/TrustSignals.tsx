import React from 'react';
import { Microscope, Leaf, ShieldCheck, GraduationCap, Box, Globe, Droplets, School } from 'lucide-react';
import { CONTENT } from '../config/content';

const iconMap: { [key: string]: any } = {
    biotech: Microscope,
    public: Globe,
    water_drop: Droplets,
    school: School,
    leaf: Leaf,
    shield: ShieldCheck,
};

const TrustSignals: React.FC = () => {
    return (
        <section className="bg-forest-green py-20">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {CONTENT.trustSignals.map((signal, index) => {
                        const IconComponent = iconMap[signal.icon] || Box;
                        return (
                            <div key={index} className="flex flex-col items-center gap-4">
                                <IconComponent size={48} className="text-primary" />
                                <h4 className="text-white font-bold text-lg">{signal.title}</h4>
                                <p className="text-white/60 text-sm">{signal.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
