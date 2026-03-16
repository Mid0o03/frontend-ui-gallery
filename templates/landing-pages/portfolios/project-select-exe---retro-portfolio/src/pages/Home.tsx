
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '../../constants';
import { Category } from '../../types';
import ProjectCard from '../../components/ProjectCard';

export const Home: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<Category>('ALL');

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'ALL') return PROJECTS;
        return PROJECTS.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="relative flex flex-col items-center w-full min-h-screen">
            {/* Background Layers */}
            <div className="fixed inset-0 pointer-events-none opacity-20 star-field"></div>
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] crt-overlay z-[99]"></div>

            {/* Header */}
            <header className="w-full max-w-[1200px] px-6 py-6 flex items-center justify-between border-b border-white/10 z-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg">
                        <Gamepad2 className="text-white" size={20} />
                    </div>
                    <h2 className="text-xl font-bold tracking-tighter text-white">PROJECT_SELECT.EXE</h2>
                </div>

                <nav className="flex items-center gap-6">
                    <div className="hidden md:flex gap-8">
                        <a className="text-[10px] font-pixel text-primary hover:text-white transition-colors" href="#">HOME</a>
                        <a className="text-[10px] font-pixel text-white/60 hover:text-white transition-colors" href="#">ARCHIVE</a>
                        <a className="text-[10px] font-pixel text-white/60 hover:text-white transition-colors" href="#">CONFIG</a>
                    </div>
                    <button className="bg-primary/20 hover:bg-primary border border-primary/50 text-white text-[10px] font-pixel px-4 py-2 rounded transition-all">
                        LOGIN
                    </button>
                </nav>
            </header>

            <main className="w-full max-w-[1200px] px-6 py-12 flex flex-col z-10">
                {/* Hero Section */}
                <section className="mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-center mb-6 uppercase">
                        Choose Your <span className="text-primary italic">Adventure</span>
                    </h1>
                    <p className="text-white/40 text-center max-w-xl mx-auto text-sm font-medium leading-relaxed">
                        Explore the developer proficiency matrix. Select a sector to filter active missions and deployment tools.
                    </p>
                </section>

                {/* Filter Navigation */}
                <nav className="flex flex-wrap justify-center gap-4 mb-16">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`arcade-button flex items-center gap-3 px-6 py-3 rounded-lg text-[10px] font-pixel transition-all ${activeFilter === cat
                                ? 'bg-primary text-white'
                                : 'bg-background-dark border border-white/20 text-white/60 hover:border-primary hover:text-white'
                                }`}
                        >
                            {activeFilter === cat && <span className="size-2 bg-white rounded-full animate-pulse"></span>}
                            {cat}
                        </button>
                    ))}
                </nav>

                {/* Section Header */}
                <div className="flex items-center justify-between mb-8 px-4">
                    <h3 className="text-xs font-pixel text-primary/80 flex items-center gap-3 uppercase">
                        <LayoutGrid size={14} /> MISSION_LIST
                    </h3>
                    <div className="text-[10px] font-pixel text-white/30 uppercase">
                        {filteredProjects.length}_ENTRIES_LOADED
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Footer / Pagination Controls */}
                <footer className="mt-auto border-t border-white/10 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex gap-4">
                        <button className="size-12 flex items-center justify-center bg-white/5 rounded border border-white/10 hover:border-primary hover:bg-primary/10 transition-all text-white/60 hover:text-primary">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="size-12 flex items-center justify-center bg-white/5 rounded border border-white/10 hover:border-primary hover:bg-primary/10 transition-all text-white/60 hover:text-primary">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    <div className="text-[10px] font-pixel text-white/20 text-center md:text-right leading-relaxed uppercase">
                        SYSTEM STATUS: <span className="text-green-500/80">OPTIMAL</span> | REFRESH RATE: 60HZ<br />
                        DEVELOPED BY UNIT_772 // 2025
                    </div>
                </footer>
            </main>
        </div>
    );
};
