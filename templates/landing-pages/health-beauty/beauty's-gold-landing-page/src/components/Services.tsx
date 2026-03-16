import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { SERVICES } from '../types';
import { useGsapScrollStagger } from '../hooks/useGsapAnimation';

const Services: React.FC = () => {
    const servicesGridRef = useGsapScrollStagger(0.1);
    return (
        <section id="services" className="py-32 max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <SectionTitle
                    title="Services"
                    number="01"
                    subtitle="Expertise Structurée"
                />
                <div className="text-right hidden md:block max-w-xs">
                    <p className="text-xs text-zinc-400 leading-loose italic">
                        "La beauté est une géométrie sacrée que nous sculptons avec précision."
                    </p>
                </div>
            </div>

            <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
                {/* Main Feature */}
                <div className="md:col-span-2 md:row-span-2 bg-accent-dark border border-primary/10 relative group overflow-hidden cursor-pointer">
                    <img
                        src={SERVICES[0].imageUrl}
                        alt={SERVICES[0].title}
                        className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="relative p-10 h-full flex flex-col justify-between z-10">
                        <span className="text-primary text-5xl font-light">{SERVICES[0].number}</span>
                        <div>
                            <h4 className="text-4xl lg:text-5xl font-bold uppercase mb-4 leading-tight">
                                Soin Visage <br /> Haute Couture
                            </h4>
                            <p className="text-zinc-400 max-w-xs text-sm leading-relaxed mb-8">
                                {SERVICES[0].description}
                            </p>
                            <button className="text-primary text-[10px] uppercase tracking-widest-xl font-bold border-b border-primary pb-1 hover:text-white hover:border-white transition-colors">
                                En savoir plus
                            </button>
                        </div>
                    </div>
                </div>

                {/* Square Card */}
                <div className="bg-background-dark border border-primary/20 p-8 flex flex-col justify-center items-center text-center group hover:bg-primary transition-all duration-500 cursor-pointer aspect-square md:aspect-auto">
                    <div className="w-12 h-12 flex items-center justify-center mb-6">
                        <Compass className="text-primary group-hover:text-background-dark w-10 h-10 transition-colors" strokeWidth={1} />
                    </div>
                    <h4 className="text-lg font-bold uppercase tracking-widest group-hover:text-background-dark transition-colors">
                        {SERVICES[1].title}
                    </h4>
                    <p className="text-[10px] text-zinc-500 mt-4 group-hover:text-background-dark/70 uppercase tracking-widest transition-colors">
                        {SERVICES[1].description}
                    </p>
                </div>

                {/* Photo Accent */}
                <div className="bg-accent-dark border border-primary/10 overflow-hidden hidden md:block">
                    <img
                        src={SERVICES[2].imageUrl}
                        alt="Detail"
                        className="w-full h-full object-cover grayscale brightness-50 contrast-125 hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Bottom Left Small Card */}
                <div className="md:col-start-3 md:row-start-2 bg-background-dark border border-primary/20 p-8 flex flex-col justify-end group hover:border-primary transition-all">
                    <span className="text-primary text-3xl font-light mb-4">{SERVICES[3].number}</span>
                    <h4 className="text-xl font-bold uppercase mb-2 leading-tight">
                        {SERVICES[3].title}
                    </h4>
                    <p className="text-[10px] text-zinc-500 leading-relaxed uppercase tracking-widest">
                        {SERVICES[3].description}
                    </p>
                </div>

                {/* CTA Box */}
                <div className="md:col-start-4 md:row-start-2 bg-primary flex items-center justify-center p-8 cursor-pointer group hover:invert transition-all duration-300 min-h-[200px] md:min-h-0">
                    <div className="border border-background-dark/20 p-6 text-background-dark text-center w-full">
                        <p className="text-[10px] uppercase font-bold tracking-widest-xl mb-4">Tous nos services</p>
                        <ArrowUpRight className="w-10 h-10 mx-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
