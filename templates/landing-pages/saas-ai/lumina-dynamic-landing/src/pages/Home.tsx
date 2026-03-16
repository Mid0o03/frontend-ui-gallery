
import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    Layers,
    Cpu,
    Globe,
    Zap,
    CheckCircle,
    Menu,
    X,
    Github,
    Twitter,
    Linkedin,
    Sparkles,
    RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateLandingContent } from '../../services/geminiService';

// Standard Components
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <Zap className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                            LUMINA
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Features</Link>
                        <Link to="/#gallery" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Showcase</Link>
                        <Link to="/#testimonials" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Clients</Link>
                        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                            Get Started
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 animate-in slide-in-from-top duration-300">
                    <Link to="/#features" className="block text-slate-600 font-medium">Features</Link>
                    <Link to="/#gallery" className="block text-slate-600 font-medium">Showcase</Link>
                    <Link to="/#testimonials" className="block text-slate-600 font-medium">Clients</Link>
                    <button className="w-full bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold">Get Started</button>
                </div>
            )}
        </nav>
    );
};

const FeatureCard = ({ title, description, icon: Icon }: any) => (
    <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const GalleryItem = ({ index, title, category }: any) => (
    <div className="group relative overflow-hidden rounded-3xl bg-slate-200 aspect-[4/5] md:aspect-square">
        <img
            src={`https://picsum.photos/seed/${index + 40}/800/800`}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-2">{category}</span>
            <h4 className="text-white text-xl font-bold">{title}</h4>
        </div>
    </div>
);

export const Home: React.FC = () => {
    const [industry, setIndustry] = useState('Tech Startup');
    const [aiContent, setAiContent] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const fetchAiContent = async () => {
        setLoading(true);
        const content = await generateLandingContent(industry);
        if (content) setAiContent(content);
        setLoading(false);
    };

    useEffect(() => {
        fetchAiContent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const defaultContent = {
        headline: "Transform Your Vision Into Reality",
        subheadline: "The ultimate dynamic platform for modern creators and visionary companies. Build faster, scale smarter, and look better.",
        features: [
            { title: "Smart Architecture", description: "Engineered with modular components that adapt to your evolving business needs seamlessly.", icon: Layers },
            { title: "AI-Powered Logic", description: "Harness the power of neural networks to automate repetitive tasks and gain insights.", icon: Cpu },
            { title: "Global Network", description: "Deploy your solution across 50+ edge locations for sub-100ms latency worldwide.", icon: Globe }
        ]
    };

    const content = aiContent || defaultContent;

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-indigo-100/30 blur-[120px] -z-10 rounded-full"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-bold mb-8 border border-indigo-100 animate-pulse">
                            <Sparkles size={16} />
                            AI Powered Experience
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                            {content.headline}
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {content.subheadline}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
                                Start Building Now <ArrowRight size={20} />
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all">
                                View Demo
                            </button>
                        </div>

                        {/* AI Customizer */}
                        <div className="mt-16 p-4 bg-slate-50 rounded-3xl border border-slate-100 max-w-lg mx-auto flex items-center gap-3">
                            <input
                                type="text"
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                placeholder="Enter an industry (e.g. Healthcare)"
                                className="flex-1 bg-transparent border-none focus:ring-0 text-slate-800 font-medium px-4"
                            />
                            <button
                                onClick={fetchAiContent}
                                disabled={loading}
                                className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50"
                            >
                                {loading ? <RefreshCw className="animate-spin" size={20} /> : <Sparkles size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hero Image Mockup */}
                <div className="max-w-6xl mx-auto mt-20 px-4">
                    <div className="relative p-2 bg-slate-900/5 rounded-[2.5rem] border border-white/40 shadow-2xl">
                        <img
                            src="https://picsum.photos/seed/dashboard/1600/900"
                            alt="Dashboard"
                            className="rounded-[2rem] w-full shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Active Users", value: "250K+" },
                            { label: "Daily Transactions", value: "1.2M" },
                            { label: "Success Rate", value: "99.9%" },
                            { label: "Countries Supported", value: "120+" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                                <div className="text-slate-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Powerful Features</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Everything you need to launch your next big idea with confidence and style.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {content.features.map((f: any, i: number) => (
                            <FeatureCard
                                key={i}
                                title={f.title}
                                description={f.description}
                                icon={defaultContent.features[i % 3].icon}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Showcase / Gallery Section */}
            <section id="gallery" className="py-32 bg-slate-900 text-white rounded-[4rem] mx-4 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Crafting experiences that redefine industries.</h2>
                            <p className="text-slate-400 text-lg">Our curated selection of recent breakthroughs and successful partnerships across the globe.</p>
                        </div>
                        <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-100 transition-colors">
                            Explore All Projects
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <GalleryItem index={1} title="Neural Interface" category="Technology" />
                        <GalleryItem index={2} title="Astra Logistics" category="Supply Chain" />
                        <GalleryItem index={3} title="Eco-Smart Cities" category="Sustainable" />
                        <GalleryItem index={4} title="Fintech Edge" category="Finance" />
                        <GalleryItem index={5} title="Next-Gen Retail" category="E-commerce" />
                        <GalleryItem index={6} title="Quantum Cloud" category="Software" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-300">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Zap size={200} />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 relative z-10">
                            Ready to accelerate your journey?
                        </h2>
                        <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto relative z-10">
                            Join thousands of innovators who are already scaling their businesses with Lumina.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
                            <button className="w-full sm:w-auto px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-all shadow-xl">
                                Get Started for Free
                            </button>
                            <button className="text-white font-bold text-lg flex items-center gap-2 hover:translate-x-1 transition-transform">
                                Talk to Sales <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                                    <Zap className="text-white w-5 h-5" />
                                </div>
                                <span className="text-2xl font-black text-slate-900">LUMINA</span>
                            </div>
                            <p className="text-slate-500 mb-8 leading-relaxed">
                                Empowering the next generation of global creators with intelligent, high-performance web experiences.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
                            <ul className="space-y-4 text-slate-500">
                                <li><Link to="#" className="hover:text-indigo-600 transition-colors">Features</Link></li>
                                <li><Link to="#" className="hover:text-indigo-600 transition-colors">Pricing</Link></li>
                                <li><Link to="#" className="hover:text-indigo-600 transition-colors">Case Studies</Link></li>
                                <li><Link to="#" className="hover:text-indigo-600 transition-colors">Reviews</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                            <ul className="space-y-4 text-slate-500">
                                <li><Link to="#" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
                                <li><Link to="#" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
                                <li><Link to="#" className="hover:text-indigo-600 transition-colors">Blog</Link></li>
                                <li><Link to="#" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
                            <ul className="space-y-4 text-slate-500">
                                <li><Link to="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
                                <li><Link to="#" className="hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
                                <li><Link to="#" className="hover:text-indigo-600 transition-colors">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
                        <p>© 2024 Lumina Systems Inc. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <span className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                Systems Operational
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
