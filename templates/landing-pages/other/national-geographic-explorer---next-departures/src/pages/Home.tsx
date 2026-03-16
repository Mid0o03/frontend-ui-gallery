
import React, { useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import ExpeditionCard from '../../components/ExpeditionCard';
import { Region } from '../../types';
import { EXPEDITIONS } from '../../data/expeditions';

const REGIONS: Region[] = ['All Regions', 'Arctic', 'Safari', 'Rainforest', 'Andes', 'Marine'];

export const Home: React.FC = () => {
    const [activeRegion, setActiveRegion] = useState<Region>('All Regions');
    const [visibleCount, setVisibleCount] = useState(4);

    const filteredExpeditions = useMemo(() => {
        return EXPEDITIONS.filter(ex =>
            activeRegion === 'All Regions' || ex.region === activeRegion
        );
    }, [activeRegion]);

    const displayedExpeditions = filteredExpeditions.slice(0, visibleCount);

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Navbar />

            <main className="flex-1 parchment-texture min-h-screen">
                <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-16">

                    {/* Hero Section Header */}
                    <div className="flex flex-col mb-10 border-l-4 border-primary pl-6 animate-fade-in">
                        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-2">
                            Global Field Registry
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-earth dark:text-white mb-2 leading-none">
                            Next Departures
                        </h1>
                        <p className="text-clay font-medium italic">
                            Current Location: 25.7617° N, 80.1918° W • Updated 4m ago
                        </p>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        {REGIONS.map((region) => (
                            <button
                                key={region}
                                onClick={() => {
                                    setActiveRegion(region);
                                    setVisibleCount(4); // Reset pagination on filter change
                                }}
                                className={`px-6 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${activeRegion === region
                                        ? 'bg-earth text-white border-earth shadow-md'
                                        : 'bg-white/60 dark:bg-white/5 border-[#e7dfcf] dark:border-[#3d3424] hover:border-primary text-earth dark:text-white'
                                    }`}
                            >
                                {region}
                            </button>
                        ))}
                    </div>

                    {/* Expedition Grid */}
                    {displayedExpeditions.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {displayedExpeditions.map((ex) => (
                                <ExpeditionCard key={ex.id} expedition={ex} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center animate-fade-in">
                            <span className="material-symbols-outlined text-6xl text-clay/30 mb-4 block">explore_off</span>
                            <h3 className="text-xl font-bold text-earth/50 dark:text-white/50 uppercase tracking-widest">
                                No Expeditions Found for this Region
                            </h3>
                            <p className="text-clay mt-2">Try selecting another category or check back later.</p>
                        </div>
                    )}

                    {/* Pagination / Bottom CTA */}
                    <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <p className="text-sm font-medium text-clay mb-8 uppercase tracking-widest italic">
                            Viewing {displayedExpeditions.length} of {filteredExpeditions.length} Scheduled Expeditions
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {visibleCount < filteredExpeditions.length && (
                                <button
                                    onClick={() => setVisibleCount(prev => prev + 3)}
                                    className="bg-earth text-white px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-sm hover:bg-[#3d3424] transition-all active:scale-95 shadow-lg"
                                >
                                    Load More Journeys
                                </button>
                            )}
                            <button className="bg-white/50 border border-[#e7dfcf] text-earth px-10 py-4 rounded-lg font-bold tracking-widest uppercase text-sm hover:bg-white transition-all active:scale-95 shadow-sm">
                                Download 2024 Catalog
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-earth text-white py-16 px-6 lg:px-10 border-t border-primary/20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="size-6 text-primary">
                                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
                                </svg>
                            </div>
                            <h2 className="text-lg font-bold uppercase tracking-widest letter-spacing-rugged">
                                National Geographic Explorer
                            </h2>
                        </div>
                        <p className="text-white/60 text-sm max-w-sm mb-8 leading-relaxed">
                            Since 1888, the National Geographic Society has been pushing the boundaries of exploration. Join us in our mission to illuminate and protect the wonder of our world through storytelling, science, and education.
                        </p>
                        <div className="flex gap-6">
                            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">language</span>
                            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">share</span>
                            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">mail</span>
                            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">podcasts</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs tracking-widest uppercase mb-6 text-primary border-b border-primary/30 pb-2 inline-block">Explore</h4>
                        <ul className="space-y-4 text-sm text-white/60 font-medium">
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full"></span> Private Jet Trips
                            </li>
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full"></span> Small Ship Cruises
                            </li>
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full"></span> Family Journeys
                            </li>
                            <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full"></span> Photography Workshops
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs tracking-widest uppercase mb-6 text-primary border-b border-primary/30 pb-2 inline-block">Our Legacy</h4>
                        <ul className="space-y-4 text-sm text-white/60 font-medium">
                            <li className="hover:text-white cursor-pointer transition-colors">Exploration Grants</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Impact & Sustainability</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Expert Biographies</li>
                            <li className="hover:text-white cursor-pointer transition-colors font-bold text-white/80">Contact Dispatch</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase">
                    <p className="mb-4 md:mb-0">© 2024 National Geographic Partners, LLC. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                        <a className="hover:text-white transition-colors" href="#">Interest-Based Ads</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
