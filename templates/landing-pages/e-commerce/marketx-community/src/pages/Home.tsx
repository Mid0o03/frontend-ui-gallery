
import React from 'react';
import { TestimonialCard } from '../../components/TestimonialCard';
import { Ticker } from '../../components/Ticker';
import { TESTIMONIALS } from '../../constants';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#221510] relative overflow-hidden font-display selection:bg-primary selection:text-white">
            {/* Background Orbs */}
            <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-40 -right-20 w-[600px] h-[600px] bg-violet-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

            <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 relative z-10">
                {/* Hero Header */}
                <section className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
                        Community First
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
                        Trusted by the heart of <br />
                        <span className="text-primary italic">the community.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of verified collectors and creators who have found their home in our marketplace.
                    </p>
                </section>

                {/* Testimonials Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            className={idx === 1 ? 'lg:translate-y-12' : ''}
                        />
                    ))}
                </section>

                {/* Ticker Component */}
                <Ticker />

                {/* Social Proof / Security Section */}
                <section className="mt-24 flex flex-col lg:flex-row items-center justify-between gap-16 p-8 md:p-16 bg-white/5 rounded-[3rem] border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>

                    <div className="flex flex-col gap-8 max-w-xl relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Safe, Secure, and <span className="text-primary italic">Social.</span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Our proprietary verification system ensures that every interaction is authentic. Join a network of passionate individuals and trade with peace of mind.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: 'verified_user', label: 'Verified Sellers' },
                                { icon: 'payments', label: 'Secure Escrow' },
                                { icon: 'diversity_3', label: 'Peer Support' }
                            ].map((badge) => (
                                <div key={badge.label} className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full shadow-lg group/badge hover:bg-white/10 transition-all cursor-default">
                                    <span className="material-symbols-outlined text-primary group-hover/badge:scale-125 transition-transform">{badge.icon}</span>
                                    <span className="text-sm font-bold uppercase tracking-wider">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-8 relative z-10">
                        <div className="flex -space-x-5 mb-2 hover:-space-x-3 transition-all duration-500">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="size-20 rounded-full border-4 border-[#221510] overflow-hidden ring-4 ring-primary bg-slate-800 shadow-2xl">
                                    <img src={`https://picsum.photos/seed/member${i}/200/200`} alt="Member" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="size-20 rounded-full border-4 border-[#221510] bg-primary flex items-center justify-center text-white font-black ring-4 ring-primary shadow-2xl text-xl">
                                +10k
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="font-extrabold text-3xl mb-6">
                                Become the next <br />
                                <span className="text-primary italic">community champion.</span>
                            </h3>
                            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-black text-xl tracking-tight transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(244,92,37,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(244,92,37,0.6)]">
                                Join the Community
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Floating Decorative Elements */}
            <div className="fixed top-1/4 -right-12 animate-float pointer-events-none opacity-20 hidden 2xl:block z-0">
                <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="120" cy="120" r="100" fill="#f45c25" fillOpacity="0.8" />
                    <rect x="70" y="70" width="100" height="100" rx="15" fill="white" />
                    <circle cx="100" cy="110" r="10" fill="#4c1d95" />
                    <circle cx="140" cy="110" r="10" fill="#4c1d95" />
                    <path d="M90 145C90 145 105 155 120 155C135 155 150 145 150 145" stroke="#4c1d95" strokeWidth="8" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    );
};
