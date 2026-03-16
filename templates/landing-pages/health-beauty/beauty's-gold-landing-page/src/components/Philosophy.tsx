import React from 'react';
import { useGsapScrollTrigger, useGsapScrollStagger } from '../hooks/useGsapAnimation';

const Philosophy: React.FC = () => {
    const imageRef = useGsapScrollTrigger();
    const contentRef = useGsapScrollStagger(0.15);
    return (
        <section id="philosophy" className="bg-accent-dark border-y border-primary/10 py-32 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none hidden xl:block">
                <span className="text-[35rem] font-bold leading-none select-none tracking-tighter">GOLD</span>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div ref={imageRef} className="relative group">
                    <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-primary/40 hidden md:block"></div>
                    <div className="relative overflow-hidden border border-primary/20">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                            alt="Architecture Interior"
                            className="w-full aspect-[4/5] object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                    <div className="absolute -bottom-8 -right-4 md:bottom-8 md:right-8 bg-primary text-background-dark p-8 md:p-10 max-w-xs uppercase font-bold text-xs leading-relaxed tracking-widest shadow-2xl z-10">
                        L'innovation est le cœur de notre précision technique.
                    </div>
                </div>

                <div ref={contentRef} className="flex flex-col gap-12 pt-10 lg:pt-0">
                    <div>
                        <span className="text-primary text-xs tracking-widest-2xl uppercase mb-6 block">La Vision</span>
                        <h3 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[1.05] mb-10">
                            Un cadre architectural <br />
                            pour une <span className="italic-display text-primary">expérience</span> <br />
                            d'avant-garde.
                        </h3>
                        <p className="text-zinc-400 leading-loose text-lg font-light mb-8 max-w-xl">
                            Beauty’s Gold n'est pas simplement un institut. C'est un laboratoire de design humain où chaque geste est calculé, chaque produit sélectionné pour son excellence moléculaire, et chaque espace conçu pour l'harmonie visuelle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-primary/20 pt-12">
                        <div className="space-y-4">
                            <h5 className="text-primary font-bold uppercase tracking-widest text-sm">Précision</h5>
                            <p className="text-[10px] text-zinc-500 leading-relaxed uppercase tracking-widest">
                                Maîtrise technique absolue pour des résultats structuraux visibles.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-primary font-bold uppercase tracking-widest text-sm">Pureté</h5>
                            <p className="text-[10px] text-zinc-500 leading-relaxed uppercase tracking-widest">
                                Produits de luxe sélectionnés pour leur efficacité radicale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
