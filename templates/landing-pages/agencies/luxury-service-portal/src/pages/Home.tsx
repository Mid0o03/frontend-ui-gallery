
import React, { useState } from 'react';
import { SERVICES } from '../../constants';
import { Service } from '../../types';
import Logo from '../../components/Logo';
import ServiceItem from '../../components/ServiceItem';
import ConciergeChat from '../../components/ConciergeChat';

export const Home: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    return (
        <div className="relative min-h-screen flex flex-col items-center selection:bg-[#17b0cf] selection:text-black">
            {/* Decorative Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#121212] opacity-50 blur-[120px]"></div>
                <div className="absolute top-[60%] -right-[5%] w-[30%] h-[50%] rounded-full bg-[#121212] opacity-30 blur-[100px]"></div>

                {/* Subtle radial pattern like the reference */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)',
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="relative z-10 w-full max-w-[1200px] px-6 py-12 flex flex-col min-h-screen">
                {/* Header Section */}
                <header className="flex flex-col items-center justify-center pt-12 pb-20">
                    <Logo />
                    <h1 className="silver-text text-xl md:text-2xl font-extralight tracking-[0.5em] uppercase text-center mb-2">
                        Luxury Service
                    </h1>
                    <div className="w-12 h-[1px] bg-[#17b0cf]/40 mt-4 animate-pulse"></div>
                </header>

                {/* Main Content */}
                <main className="flex-grow flex flex-col items-center">
                    <div className="w-full max-w-2xl border border-white/5 rounded-sm overflow-hidden divide-y divide-white/5">
                        {SERVICES.map((service) => (
                            <ServiceItem
                                key={service.id}
                                service={service}
                                onClick={setSelectedService}
                            />
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase font-light italic">
                            By Invitation Only
                        </p>
                    </div>
                </main>

                {/* Footer Section */}
                <footer className="flex justify-center md:justify-end items-center py-10">
                    <button className="group relative flex items-center gap-4 bg-transparent border border-white/10 px-8 py-4 rounded-full overflow-hidden transition-all duration-500 hover:border-[#17b0cf]/50">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative text-white/50 group-hover:text-white text-xs font-light tracking-[0.2em] uppercase transition-colors duration-500">
                            Member Access
                        </span>
                        <div className="relative w-8 h-px bg-white/20 group-hover:bg-[#17b0cf] transition-all duration-500 group-hover:w-12"></div>
                    </button>
                </footer>
            </div>

            {/* Dynamic Varnish Line */}
            <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

            {/* AI Concierge Modal */}
            <ConciergeChat
                service={selectedService}
                onClose={() => setSelectedService(null)}
            />
        </div>
    );
};
