
import React from 'react';
import { GridContainer } from '../../components/GridContainer';
import { Project, ExpertiseItem } from '../../types';
import { Link } from 'react-router-dom';

// Mock Data
const EXPERTISE: ExpertiseItem[] = [
    {
        id: '1',
        index: '02.1',
        label: 'LOGIC',
        title: 'SYSTEMATIC STRATEGY',
        description: 'Strategic alignment through rigorous analysis of functional requirements. We build frameworks that scale beyond visual aesthetics.',
        icon: (
            <svg className="w-12 h-12 text-swiss-red" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
        )
    },
    {
        id: '2',
        index: '02.2',
        label: 'PRECISION',
        title: 'MATHEMATICAL DESIGN',
        description: 'Systematic visual languages built on mathematical modular grids. Precision in typography and spatial distribution.',
        icon: (
            <svg className="w-12 h-12 text-swiss-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        )
    },
    {
        id: '3',
        index: '02.3',
        label: 'RIGOR',
        title: 'TECHNICAL EXECUTION',
        description: 'Precise implementation across all digital and physical touchpoints. Clean code, robust architecture, functional results.',
        icon: (
            <svg className="w-12 h-12 text-swiss-red" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        )
    }
];

const PROJECTS: Project[] = [
    {
        id: 'p1',
        title: 'SWISS AIR LOGISTICS',
        category: 'IDENTITY / WAYFINDING',
        description: "Redesigning the logistical visual language for one of Europe's leading freight carriers using standardized grid systems.",
        imageUrl: 'https://picsum.photos/seed/swiss1/1200/800?grayscale'
    },
    {
        id: 'p2',
        title: 'ZURICH FINANCIAL',
        category: 'CORPORATE INTERFACE',
        description: 'Development of a unified digital dashboard for asset management, prioritizing legibility and rapid data parsing.',
        imageUrl: 'https://picsum.photos/seed/swiss2/1200/800?grayscale'
    }
];

export const Home: React.FC = () => {
    return (
        <div className="max-w-[1600px] mx-auto min-h-screen border-t border-black">

            {/* Header */}
            <GridContainer>
                <div className="col-span-12 md:col-span-6 flex items-center p-6 border-r border-black">
                    <div className="w-10 h-10 bg-swiss-red flex items-center justify-center mr-4">
                        <div className="w-5 h-5 border-2 border-white"></div>
                    </div>
                    <h1 className="text-xl font-black uppercase tracking-tighter">Swiss International Firm</h1>
                </div>
                <div className="col-span-12 md:col-span-6 flex items-center justify-between p-6">
                    <nav className="flex gap-8 text-xs font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-swiss-red">Work</a>
                        <a href="#" className="hover:text-swiss-red">Expertise</a>
                        <a href="#" className="hover:text-swiss-red">About</a>
                    </nav>
                    <button className="bg-swiss-red text-white text-xs font-black uppercase tracking-widest px-6 py-3 hover:bg-black transition-colors">
                        Inquire
                    </button>
                </div>
            </GridContainer>

            {/* Hero Section */}
            <GridContainer>
                <div className="col-span-12 md:col-span-8 p-6 md:p-12 border-r border-black flex flex-col justify-end min-h-[500px] lg:min-h-[700px]">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-swiss-red mb-4">01 / Foundation</span>
                    <h2 className="text-6xl md:text-[120px] lg:text-[160px] font-black uppercase leading-[0.85] tracking-tighter mb-8">
                        Form <br /> Follows <br /> Function
                    </h2>
                    <p className="max-w-md text-lg md:text-xl font-medium leading-tight text-gray-800">
                        Systematic design solutions for corporate excellence through mathematical precision and functional clarity.
                    </p>
                </div>
                <div className="col-span-12 md:col-span-4 bg-swiss-gray flex items-center justify-center relative min-h-[300px] md:min-h-full">
                    <div className="w-48 h-48 bg-swiss-red flex items-center justify-center">
                        <div className="w-24 h-24 border-8 border-white"></div>
                    </div>
                    <div className="absolute bottom-6 left-6 text-[10px] font-black uppercase tracking-widest leading-none">
                        Structural Integrity <br /> Grid: 12-Column Modality
                    </div>
                </div>
            </GridContainer>

            {/* Expertise Header Strip */}
            <GridContainer className="bg-black text-white">
                <div className="col-span-12 flex justify-between items-center px-6 md:px-12 py-4">
                    <span className="text-xs font-bold uppercase tracking-[0.4em]">02 / Core Expertise</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M19 14l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>
                </div>
            </GridContainer>

            {/* Expertise Grid */}
            <GridContainer>
                {EXPERTISE.map((item, idx) => (
                    <div key={item.id} className={`col-span-12 md:col-span-4 p-10 flex flex-col min-h-[400px] ${idx < 2 ? 'border-r border-black' : ''}`}>
                        <div className="mb-8">{item.icon}</div>
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-600 mb-auto">
                            {item.description}
                        </p>
                        <div className="pt-6 border-t border-gray-200 mt-8">
                            <span className="text-xs font-bold uppercase tracking-widest">{item.index} / {item.label}</span>
                        </div>
                    </div>
                ))}
            </GridContainer>

            {/* Selection Header */}
            <GridContainer>
                <div className="col-span-12 md:col-span-9 p-6 md:p-12 border-r border-black">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-swiss-red mb-2 block">03 / Selection</span>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">Archive of Work</h2>
                </div>
                <div className="col-span-12 md:col-span-3 p-6 md:p-12 flex items-end">
                    <p className="text-xs font-bold uppercase tracking-widest leading-tight">
                        Curated projects demonstrating objective clarity and structural order.
                    </p>
                </div>
            </GridContainer>

            {/* Projects Grid */}
            <GridContainer noBorderBottom>
                {PROJECTS.map((project, idx) => (
                    <div key={project.id} className={`col-span-12 md:col-span-6 flex flex-col group cursor-pointer ${idx % 2 === 0 ? 'border-r border-black' : ''} border-b border-black`}>
                        <div className="overflow-hidden bg-gray-200 aspect-[16/10]">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-10">
                            <h4 className="text-swiss-red text-2xl font-black uppercase mb-2">{project.title}</h4>
                            <p className="text-xs font-bold uppercase tracking-widest mb-6">{project.category}</p>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </GridContainer>

            {/* Footer */}
            <footer className="grid grid-cols-12 border-l border-r border-b border-black">
                <div className="col-span-12 md:col-span-4 p-12 border-r border-black flex flex-col justify-between min-h-[300px]">
                    <div className="w-12 h-12 bg-swiss-red"></div>
                    <p className="text-[11px] font-bold uppercase tracking-widest leading-loose text-gray-800">
                        Swiss Design Firm AG <br />
                        Limmatquai 1 <br />
                        8001 Zürich, Switzerland
                    </p>
                </div>
                <div className="col-span-12 md:col-span-4 p-12 border-r border-black flex flex-col justify-between">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-swiss-red mb-4 block">Inquiries</span>
                        <a href="mailto:office@swiss-firm.com" className="text-2xl md:text-3xl font-black uppercase tracking-tighter hover:underline">
                            office@swiss-firm.com
                        </a>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-6">+41 44 211 00 00</p>
                </div>
                <div className="col-span-12 md:col-span-4 p-12 flex flex-col justify-between items-end text-right">
                    <div className="flex gap-6">
                        <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-swiss-red transition-colors">LinkedIn</a>
                        <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-swiss-red transition-colors">Instagram</a>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 max-w-[200px]">
                        © 2024 International Typographic Style Revival. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};
