
import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ProjectCard from '../../components/ProjectCard';
import ZenAssistant from '../../components/ZenAssistant';
import { PROJECTS, PHILOSOPHY_IMAGE } from '../../constants';

export const Home: React.FC = () => {
    return (
        <div className="relative overflow-x-hidden">
            <Navbar />
            <Hero />

            {/* Philosophy Section */}
            <section id="philosophy" className="py-32 px-6 md:px-20 lg:px-40 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <span className="text-primary text-xs tracking-[0.5em] uppercase font-bold">Our Philosophy</span>
                            <h2 className="text-5xl md:text-7xl font-light leading-tight text-[#171412] font-display">
                                The Soul of <br />
                                <span className="italic text-primary">Our Craft</span>
                            </h2>
                        </div>

                        <div className="space-y-8 text-stone text-xl leading-relaxed font-light max-w-xl">
                            <p>
                                Our philosophy centers on intentionality and the beauty found in natural imperfection. We believe in growth that is slow, steady, and grounded in the earth's own rhythms.
                            </p>
                            <p>
                                In a world that moves with frantic speed, we choose the path of the deliberate. Every texture, every shadow, and every curve is considered—not for perfection, but for resonance.
                            </p>
                        </div>

                        <div className="pt-6">
                            <a href="#" className="inline-flex items-center gap-6 group text-primary font-bold tracking-[0.3em] uppercase text-xs">
                                Learn More
                                <span className="material-symbols-outlined group-hover:translate-x-4 transition-transform duration-500">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute -top-16 -right-16 w-80 h-80 bg-primary/5 organic-shape -z-10 animate-float" />
                        <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
                            <img
                                src={PHILOSOPHY_IMAGE}
                                alt="Zen Craftsmanship"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section id="portfolio" className="bg-surface py-32 px-6 md:px-20 lg:px-40">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-primary text-xs tracking-[0.5em] uppercase font-bold">Selected Works</span>
                            <h2 className="text-5xl md:text-6xl font-light text-[#171412] font-display">Portfolios of Serenity</h2>
                        </div>
                        <button className="border border-stone/30 px-10 py-4 rounded-full text-xs tracking-widest uppercase text-stone hover:bg-[#171412] hover:text-white transition-all duration-500 font-bold">
                            View All Works
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
                        {PROJECTS.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                className={index === 1 ? 'lg:mt-24' : ''}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-48 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
                    <h2 className="text-6xl md:text-[8rem] font-extralight italic text-[#171412] leading-none font-display">
                        Let's grow together.
                    </h2>
                    <p className="text-stone text-2xl font-light max-w-xl mx-auto leading-relaxed">
                        Ready to bring a touch of organic serenity to your next project? We are currently accepting new commissions.
                    </p>
                    <button className="bg-[#b87332] text-white px-16 py-6 rounded-full text-sm tracking-[0.4em] uppercase font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/40 hover:bg-dark-clay">
                        Get In Touch
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-stone text-beige pt-32 pb-12 px-6 md:px-20">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                        <div className="col-span-1 md:col-span-2 flex flex-col gap-8">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-4xl">eco</span>
                                <h2 className="text-3xl font-light tracking-[0.3em] uppercase font-display">Organic Zen</h2>
                            </div>
                            <p className="text-beige/60 text-lg max-w-md font-light leading-relaxed">
                                Cultivating beauty through simplicity, nature, and the intentional movement of the creative spirit. Based in the quiet corners of the world.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            <h4 className="text-xs tracking-[0.3em] uppercase font-bold text-primary">Explore</h4>
                            <ul className="flex flex-col gap-4 text-lg font-light text-beige/80">
                                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Philosophy</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Selected Works</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">The Journal</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Contact</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-8">
                            <h4 className="text-xs tracking-[0.3em] uppercase font-bold text-primary">Social</h4>
                            <ul className="flex flex-col gap-4 text-lg font-light text-beige/80">
                                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Instagram</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Pinterest</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Behance</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-beige/10 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-xs tracking-[0.2em] uppercase text-beige/40">
                            © 2024 Organic Zen Studio. All Rights Reserved.
                        </p>
                        <div className="flex gap-12">
                            <a href="#" className="text-xs tracking-[0.2em] uppercase text-beige/40 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-xs tracking-[0.2em] uppercase text-beige/40 hover:text-white transition-colors">Terms of Service</a>
                        </div>
                        <a href="#top" className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-beige/40 hover:text-white transition-all group">
                            Back to top
                            <span className="material-symbols-outlined group-hover:-translate-y-2 transition-transform">arrow_upward</span>
                        </a>
                    </div>
                </div>
            </footer>

            <ZenAssistant />
        </div>
    );
};
