import React from 'react';
import { Globe, Instagram, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';
import { useGsapScrollStagger } from '../hooks/useGsapAnimation';

const Contact: React.FC = () => {
    const contactGridRef = useGsapScrollStagger(0.2);
    return (
        <section id="contact" className="py-32 max-w-[1440px] mx-auto px-6 md:px-12">
            <div ref={contactGridRef} className="grid grid-cols-1 lg:grid-cols-3 border border-primary/20 overflow-hidden">
                {/* Location */}
                <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-primary/20 bg-accent-dark flex flex-col h-full">
                    <h4 className="text-[10px] text-primary uppercase tracking-widest-2xl mb-12 font-bold">Localisation</h4>
                    <div className="mb-auto">
                        <p className="text-3xl font-bold uppercase mb-6 flex items-start gap-2">
                            Igny, France
                        </p>
                        <address className="text-zinc-500 text-sm leading-loose not-italic uppercase tracking-widest">
                            12 Avenue de la Gare<br />
                            91430 Igny<br />
                            FRANCE
                        </address>
                    </div>

                    <div className="mt-16 h-48 bg-background-dark border border-primary/10 overflow-hidden relative group cursor-pointer grayscale brightness-50 hover:brightness-100 transition-all duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                            alt="Map Placeholder"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="bg-primary text-background-dark px-4 py-2 text-[10px] font-bold uppercase tracking-widest">Voir sur Maps</span>
                        </div>
                    </div>
                </div>

                {/* Contact Details */}
                <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-primary/20 flex flex-col">
                    <h4 className="text-[10px] text-primary uppercase tracking-widest-2xl mb-12 font-bold">Contact</h4>
                    <div className="space-y-12 mb-auto">
                        <div>
                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest-2xl mb-3 font-medium">Téléphone</p>
                            <a href="tel:+33123456789" className="text-2xl font-medium tracking-widest hover:text-primary transition-colors">+33 1 23 45 67 89</a>
                        </div>
                        <div>
                            <p className="text-[10px] text-zinc-500 uppercase tracking-widest-2xl mb-3 font-medium">Email</p>
                            <a href="mailto:contact@beautysgold.fr" className="text-2xl font-medium tracking-widest hover:text-primary transition-colors break-all">contact@beautysgold.fr</a>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-16">
                        <a href="#" className="w-12 h-12 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all duration-300 group">
                            <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="w-12 h-12 border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all duration-300 group">
                            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Opening Hours */}
                <div className="p-10 md:p-14 bg-background-dark flex flex-col justify-between">
                    <div>
                        <h4 className="text-[10px] text-primary uppercase tracking-widest-2xl mb-12 font-bold">Horaires</h4>
                        <div className="space-y-6 text-xs tracking-widest uppercase">
                            <div className="flex justify-between border-b border-primary/10 pb-4">
                                <span className="text-zinc-500">Lun - Ven</span>
                                <span className="font-medium">10:00 - 19:30</span>
                            </div>
                            <div className="flex justify-between border-b border-primary/10 pb-4">
                                <span className="text-zinc-500">Samedi</span>
                                <span className="font-medium">09:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between text-primary pt-2">
                                <span className="text-zinc-500">Dimanche</span>
                                <span className="font-bold">Fermé</span>
                            </div>
                        </div>
                    </div>

                    <Button className="w-full py-5 mt-16 flex items-center justify-center gap-2 group">
                        Prendre rendez-vous
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
