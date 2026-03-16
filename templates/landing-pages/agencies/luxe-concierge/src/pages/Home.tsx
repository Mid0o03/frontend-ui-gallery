
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import ConciergeChat from '../components/ConciergeChat';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col black-varnish selection:bg-primary selection:text-white">
            <Navbar />

            <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
                {/* Hero Section */}
                <section className="text-center mb-32 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <p className="text-primary text-[10px] sm:text-xs tracking-[0.5em] uppercase mb-8 font-semibold animate-pulse">
                        By Invitation Only
                    </p>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-light silver-text leading-[1.1] mb-12 tracking-tight italic">
                        The Silent Authority in Luxury.
                    </h2>
                    <div className="w-16 h-[1px] bg-silver-dark/50 mx-auto"></div>
                </section>

                {/* Curated Services Grid */}
                <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-silver-dark/20 border border-silver-dark/20 overflow-hidden">
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </section>

                {/* Call to Action */}
                <section className="mt-32 flex flex-col items-center gap-10 pb-20">
                    <button className="border border-silver-dark/30 bg-transparent px-16 py-5 text-[10px] tracking-[0.5em] uppercase text-silver-light hover:text-white hover:border-silver-light transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        Member Access
                    </button>
                    <button
                        onClick={() => setIsChatOpen(true)}
                        className="group flex flex-col items-center gap-2"
                    >
                        <span className="text-silver-dark text-[11px] tracking-[0.3em] uppercase transition-all duration-500 group-hover:text-primary">
                            Inquire for an Invitation
                        </span>
                        <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                    </button>
                </section>
            </main>

            <footer className="w-full px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 opacity-60">
                <div className="flex flex-col gap-2 text-center md:text-left order-2 md:order-1">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-silver-dark">© 2024 V1 Luxe International</p>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-silver-dark">All Rights Reserved</p>
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-center order-1 md:order-2">
                    <div className="flex flex-col items-center md:items-end gap-1">
                        <span className="text-[8px] uppercase tracking-[0.4em] text-primary">System Status</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-silver-light flex items-center gap-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Network Operational
                        </span>
                    </div>

                    <div className="hidden md:block h-8 w-[1px] bg-silver-dark/30"></div>

                    <div className="flex gap-6">
                        <a className="text-[9px] uppercase tracking-[0.3em] text-silver-dark hover:text-white transition-colors" href="#">Privacy</a>
                        <a className="text-[9px] uppercase tracking-[0.3em] text-silver-dark hover:text-white transition-colors" href="#">Terms</a>
                    </div>
                </div>
            </footer>

            {/* Aesthetic Overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-white/5 to-transparent blur-3xl"></div>
            </div>

            <ConciergeChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
    );
};

export default Home;
