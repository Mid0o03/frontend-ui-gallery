
import React, { useState, useEffect, useRef } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Search,
    Menu,
    Triangle,
    Instagram,
    Linkedin,
    ArrowRight
} from 'lucide-react';

// --- Types ---

interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    imageUrl: string;
}

interface Stat {
    label: string;
    value: string;
}

// --- Components ---

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <Triangle className="w-6 h-6 fill-current rotate-180 group-hover:scale-110 transition-transform" />
                    <h1 className="text-xl font-bold tracking-[0.25em] uppercase">Studio</h1>
                </div>

                <nav className="hidden md:flex items-center gap-12">
                    {['Work', 'Philosophy', 'Journal', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[11px] font-semibold tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};

const Hero: React.FC = () => {
    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col items-center">
                <div className="w-full max-w-5xl overflow-hidden rounded-lg shadow-xl mb-16 group">
                    <img
                        src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop"
                        alt="Minimalist Interior"
                        className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
                <div className="text-center max-w-3xl">
                    <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-8 font-serif">
                        Simplicity in form, <br />
                        <span className="italic">meaning in detail.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-studio-text/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                        A Stockholm-based creative collective dedicated to the art of subtraction and the pursuit of essential beauty in architecture and product design.
                    </p>
                    <button className="px-10 py-4 bg-studio-text text-white rounded-full text-[12px] font-bold tracking-[0.2em] uppercase hover:opacity-90 transition-all hover:scale-105">
                        Explore Collections
                    </button>
                </div>
            </div>
        </section>
    );
};

const ProjectsSection: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "Nordic Retreat",
            category: "Architecture",
            year: "2024",
            imageUrl: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Earth & Clay",
            category: "Product Design",
            year: "2023",
            imageUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "The Creative Atrium",
            category: "Interior Design",
            year: "2023",
            imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Shadow & Light",
            category: "Photography",
            year: "2022",
            imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85def82820?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-end mb-12">
                <div>
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-studio-text/40 mb-3 block">Curation</span>
                    <h3 className="text-4xl font-medium tracking-tight font-serif">Featured Projects</h3>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
                    >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group"
                    >
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-10 px-6 md:px-12 no-scrollbar snap-x snap-mandatory pb-10"
            >
                {projects.map((project) => (
                    <div key={project.id} className="min-w-[320px] md:min-w-[440px] snap-start group cursor-pointer">
                        <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-8">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                        </div>
                        <h4 className="text-2xl font-medium mb-2 font-serif">{project.title}</h4>
                        <p className="text-[10px] text-studio-text/50 uppercase tracking-[0.3em] font-bold">
                            {project.category} &mdash; {project.year}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const PhilosophySection: React.FC = () => {
    const stats: Stat[] = [
        { label: "Awards", value: "12" },
        { label: "Projects", value: "45+" },
        { label: "Countries", value: "08" },
        { label: "Vision", value: "01" }
    ];

    return (
        <section className="py-32 px-6 md:px-12 bg-studio-bg">
            <div className="max-w-4xl mx-auto text-center">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-studio-text/40 mb-12 block italic">
                    &mdash; Philosophy
                </span>
                <h2 className="text-3xl md:text-5xl font-light leading-relaxed mb-12 font-serif text-studio-text">
                    "We believe that the most powerful designs are those that feel inevitable. By removing the superfluous, we reveal the soul of the material."
                </h2>
                <div className="grid md:grid-cols-2 gap-10 text-left text-lg md:text-xl text-studio-text/70 leading-relaxed font-light mb-20">
                    <p>
                        Founded in 2018, our studio emerged from a desire to return to the fundamentals of Scandinavian craftsmanship. We collaborate with artisans and engineers who share our obsession with tactile quality and sustainable longevity.
                    </p>
                    <p>
                        Every line we draw and every material we select is a testament to the idea that silence can be loud, and simplicity is the ultimate sophistication. Our work spans from private residences in the archipelago to everyday objects designed to last a lifetime.
                    </p>
                </div>

                <div className="border-t border-gray-200 pt-16 grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="group">
                            <p className="text-4xl font-light mb-2 font-serif group-hover:scale-110 transition-transform">
                                {stat.value}
                            </p>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-studio-text/40">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection: React.FC = () => {
    return (
        <section className="bg-studio-dark text-white py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">
                <div className="max-w-2xl">
                    <h3 className="text-4xl md:text-5xl font-light mb-6 font-serif">
                        Let's craft something meaningful together.
                    </h3>
                    <p className="text-white/60 text-xl font-light">
                        Currently accepting new commissions for 2025. We'd love to hear about your vision.
                    </p>
                </div>
                <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-6">
                    <div className="relative group w-full sm:min-w-[320px]">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-xl font-light focus:outline-none focus:border-white transition-colors placeholder:text-white/30"
                        />
                    </div>
                    <button className="flex items-center justify-center gap-3 bg-white text-studio-dark px-12 py-5 rounded-full text-[12px] font-bold uppercase tracking-[0.25em] hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 group">
                        Connect <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <Triangle className="w-6 h-6 fill-current rotate-180" />
                            <h2 className="text-xl font-bold tracking-[0.25em] uppercase">Studio</h2>
                        </div>
                        <p className="max-w-xs text-studio-text/50 text-base leading-relaxed font-light">
                            Exploring the intersection of modern minimalism and traditional craftsmanship. Stockholm, Sweden &mdash; Worldwide.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-studio-text/40">Contact</h5>
                        <ul className="space-y-4 text-studio-text/70">
                            <li>
                                <a href="mailto:hello@studio.com" className="hover:text-studio-text transition-colors border-b border-studio-text/10 pb-1">
                                    hello@studio.com
                                </a>
                            </li>
                            <li className="text-base font-light">+46 08 123 456</li>
                            <li className="text-base font-light opacity-60">Skeppsholmen 111 49</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-studio-text/40">Social</h5>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="flex items-center gap-2 text-studio-text/70 hover:text-studio-text transition-colors">
                                    <Instagram className="w-4 h-4" /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 text-studio-text/70 hover:text-studio-text transition-colors">
                                    <span className="w-4 text-center">P</span> Pinterest
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 text-studio-text/70 hover:text-studio-text transition-colors">
                                    <Linkedin className="w-4 h-4" /> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-studio-text/30">
                        &copy; 2024 Studio Showcase. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-studio-text/30 hover:text-studio-text/60 transition-colors">Privacy</a>
                        <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-studio-text/30 hover:text-studio-text/60 transition-colors">Terms</a>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-studio-text/30 italic">
                        Built for the minimalists.
                    </p>
                </div>
            </div>
        </footer>
    );
};

// --- Main App ---

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen font-sans selection:bg-studio-dark selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <ProjectsSection />
                <PhilosophySection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};
