
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Stats from '../../components/Stats';
import AmenitiesSection from '../../components/AmenitiesSection';
import FeaturesGrid from '../../components/FeaturesGrid';
import Map from '../../components/Map';
import GeminiAdvisor from '../../components/GeminiAdvisor';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main>
                <Hero />
                <Stats />
                <AmenitiesSection />
                <FeaturesGrid />

                {/* Experience Section */}
                <section className="mt-40 mb-40 flex flex-col items-center text-center px-6">
                    <h2 className="text-5xl md:text-7xl font-extralight mb-16 tracking-tight animate-in fade-in slide-in-from-bottom-4">
                        Experience the <span className="italic">extraordinary.</span>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <button className="group flex items-center gap-6 text-[10px] uppercase font-bold tracking-widest-xl transition-all">
                            <span className="w-16 h-[1px] bg-black transition-all group-hover:w-24 group-hover:bg-primary"></span>
                            <span className="group-hover:text-primary group-hover:translate-x-1 transition-all">Request a Private Tour</span>
                        </button>

                        <div className="hidden md:block w-[1px] h-16 bg-black/10"></div>

                        <button className="group flex items-center gap-6 text-[10px] uppercase font-bold tracking-widest-xl transition-all">
                            <span className="group-hover:text-primary group-hover:-translate-x-1 transition-all">Full Floor Plans</span>
                            <span className="w-16 h-[1px] bg-black transition-all group-hover:w-24 group-hover:bg-primary"></span>
                        </button>
                    </div>
                </section>

                <Map />
            </main>

            {/* AI Assistant Floating Widget */}
            <GeminiAdvisor />

            {/* Subtle bottom gradient for elegance */}
            <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none -z-10"></div>
        </div>
    );
};
