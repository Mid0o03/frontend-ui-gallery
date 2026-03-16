
import React, { useRef, useState, useEffect } from 'react';
import { STAGES, GLOBAL_STATS } from '../../constants';
import { StageCard } from '../../components/StageCard';

export const Home: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const offset = 400;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -offset : offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative z-10 min-h-screen flex flex-col bg-background-dark/30">
            {/* Background Overlays */}
            <div className="fixed inset-0 grid-overlay z-[-1]"></div>
            <div className="fixed inset-0 scanlines z-[50] opacity-30 pointer-events-none"></div>

            {/* Header */}
            <header className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] md:text-xs text-primary font-bold tracking-widest uppercase">System: Stable</span>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>
                    <div className="h-6 w-px bg-white/10"></div>
                    <div className="flex items-center gap-2 text-cyber-yellow">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                        </svg>
                        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">Credits: 99</span>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4">
                    <button className="flex items-center justify-center rounded-lg h-9 w-9 md:h-10 md:w-10 bg-charcoal border border-white/10 hover:border-primary transition-colors">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-9 w-9 md:h-10 md:w-10 bg-charcoal border border-white/10 hover:border-primary transition-colors">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 md:px-6">
                {/* Headline */}
                <div className="mb-12 text-center animate-in fade-in slide-in-from-top duration-700">
                    <h1 className="text-cyber-pink text-5xl md:text-7xl font-bold tracking-tighter neon-glow italic uppercase leading-none">
                        Stage Select
                    </h1>
                    <p className="text-primary text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.4em] font-bold mt-4 uppercase opacity-80">
                        Neural Interface Linked / Project Database 2.0
                    </p>
                </div>

                {/* Carousel Area */}
                <div className="w-full max-w-[1200px] flex items-center gap-4 md:gap-6 relative">
                    <button
                        onClick={() => scroll('left')}
                        className={`hidden md:flex items-center justify-center p-4 transition-all z-20 ${canScrollLeft ? 'text-primary opacity-100' : 'text-white/10 opacity-30 cursor-not-allowed'}`}
                    >
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div
                        ref={carouselRef}
                        onScroll={checkScroll}
                        className="flex-1 overflow-x-auto pb-10 pt-4 flex gap-6 md:gap-8 snap-x no-scrollbar scroll-smooth"
                    >
                        {STAGES.map((stage) => (
                            <StageCard key={stage.id} stage={stage} />
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className={`hidden md:flex items-center justify-center p-4 transition-all z-20 ${canScrollRight ? 'text-primary opacity-100' : 'text-white/10 opacity-30 cursor-not-allowed'}`}
                    >
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* SectionHeader: Project Stats */}
                <div className="w-full max-w-[960px] mt-16 mb-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-white text-lg md:text-xl font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                            Global Performance Stat_0.42
                        </h2>
                        <div className="h-px flex-1 bg-white/10"></div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="w-full max-w-[960px] grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {GLOBAL_STATS.map((stat, idx) => (
                        <div key={idx} className="bg-charcoal/50 border border-white/5 backdrop-blur-sm p-6 rounded-lg group hover:border-white/20 transition-all duration-300">
                            <div className="flex justify-between items-start mb-2">
                                <p className={`${stat.color} text-[10px] font-black tracking-widest uppercase`}>{stat.label}</p>
                                <div className={`${stat.color}`}>
                                    {stat.trend === 'up' ? (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-9 9-4-4-6 6" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 17h8m0 0v-8m0 8l-9-9-4 4-6-6" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <p className="text-4xl font-bold tracking-tighter mb-2">{stat.value}</p>
                            <div className={`text-[10px] font-bold uppercase tracking-wider ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                {stat.change}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="p-8 flex flex-col items-center bg-black/60 border-t border-white/5 backdrop-blur-xl">
                <button className="relative group px-12 py-4 bg-primary text-black font-black uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(13,185,242,0.3)] hover:shadow-[0_0_30px_rgba(13,185,242,0.5)]">
                    <span className="relative z-10">View All Projects</span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 blur-lg bg-primary/40 group-hover:bg-primary/60 transition-colors"></div>
                </button>
                <p className="mt-8 text-[9px] text-white/30 tracking-[0.5em] font-bold uppercase text-center">
                    © 2024 Nexus Arcade Terminal // Ver 2.0.42 // Powered by Neural-Sync
                </p>
            </footer>
        </div>
    );
};
