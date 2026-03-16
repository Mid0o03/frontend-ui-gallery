
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../../components/Navbar';
import Features from '../../components/Features';
import { generateLandingContent } from '../../services/geminiService';
import { DynamicContent } from '../../types';

export const Home: React.FC = () => {
    const [content, setContent] = useState<DynamicContent | null>(null);
    const [loading, setLoading] = useState(true);
    const [vibe, setVibe] = useState('Professional & Sleek');
    const [inputValue, setInputValue] = useState('');

    const fetchContent = useCallback(async (selectedVibe: string) => {
        setLoading(true);
        try {
            const data = await generateLandingContent(selectedVibe);
            setContent(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchContent(vibe);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRefresh = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setVibe(inputValue);
            fetchContent(inputValue);
        }
    };

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-indigo-200/50 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-3xl -z-10"></div>

                <div className="container mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-sm font-medium">
                        ✨ AI-Powered Dynamic Experience
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight max-w-5xl mx-auto">
                        {loading ? (
                            <span className="opacity-20 animate-pulse">Generating Headline...</span>
                        ) : (
                            content?.headline
                        )}
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {loading ? (
                            <span className="opacity-20 animate-pulse">Designing the perfect subtext for your brand...</span>
                        ) : (
                            content?.subheadline
                        )}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-indigo-200 hover:bg-indigo-700 transition-all text-lg">
                            {loading ? "..." : content?.ctaText}
                        </button>
                        <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all text-lg">
                            Book a Demo
                        </button>
                    </div>

                    {/* Dynamic Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {(content?.imageKeywords || ["minimal", "tech", "abstract", "modern"]).map((keyword, i) => (
                            <div
                                key={i}
                                className={`relative aspect-square rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 ${i % 2 === 0 ? 'mt-8' : ''}`}
                            >
                                <img
                                    src={`https://picsum.photos/seed/${keyword + vibe}/800/800`}
                                    alt={keyword}
                                    className={`w-full h-full object-cover transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-white font-medium text-sm capitalize">#{keyword}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Controls Overlay */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
                <form onSubmit={handleRefresh} className="glass p-2 rounded-2xl shadow-2xl flex items-center gap-2 border-indigo-200">
                    <input
                        type="text"
                        placeholder="Change the vibe... (e.g. Cyberpunk, Minimalist, Corporate)"
                        className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-4 py-2"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50"
                    >
                        {loading ? "Reimagining..." : "Refresh"}
                    </button>
                </form>
            </div>

            <Features />

            {/* Gallery Section */}
            <section id="gallery" className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Visual Language</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">We use high-fidelity imagery to convey complex technological concepts simply.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="group relative overflow-hidden rounded-3xl bg-white aspect-[4/3] border border-slate-100">
                                <img
                                    src={`https://picsum.photos/seed/${item + (content?.headline || 'lumina')}/1200/900`}
                                    alt="Gallery"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="px-6 py-2 bg-white text-indigo-900 font-bold rounded-full">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section with Recharts Mock (Simulated with standard CSS/Tailwind) */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Optimized for Impact</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Every pixel is crafted to ensure your message hits home. We've seen a 40% increase in conversion rates for our dynamic landing page templates.
                        </p>
                        <div className="space-y-4">
                            {[
                                { label: 'Conversion Lift', value: '+40%' },
                                { label: 'Engagement Rate', value: '88%' },
                                { label: 'Return on Ad Spend', value: '12x' }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                                    <span className="font-medium text-slate-600">{stat.label}</span>
                                    <span className="font-bold text-indigo-600 text-xl">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-full aspect-square bg-indigo-50 rounded-[4rem] flex items-center justify-center overflow-hidden">
                            <div className="flex items-end gap-4 h-64">
                                {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-8 bg-indigo-600 rounded-t-xl animate-float"
                                        style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        {/* Overlay badge */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[200px]">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-bold text-slate-900">Live Analytics</span>
                            </div>
                            <p className="text-xs text-slate-500">Processing real-time user behavior data...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white pt-24 pb-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">L</span>
                                </div>
                                <span className="text-xl font-bold tracking-tight">Lumina.</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Empowering teams to build beautiful, functional, and intelligent digital presence.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Product</h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Solutions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Company</h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Support</h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs">
                        <p>© 2024 Lumina Tech Inc. All rights reserved.</p>
                        <div className="flex items-center gap-8">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
