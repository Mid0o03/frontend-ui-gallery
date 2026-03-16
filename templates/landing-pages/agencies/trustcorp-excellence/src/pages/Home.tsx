
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/Icon';
import { AnalyticsChart } from '../../components/AnalyticsChart';
import { SERVICE_TABS, TRUST_FACTORS } from '../../constants';

export const Home: React.FC = () => {
    const [activeTabId, setActiveTabId] = useState(SERVICE_TABS[0].id);
    const activeTab = SERVICE_TABS.find(t => t.id === activeTabId) || SERVICE_TABS[0];

    return (
        <div className="min-h-screen bg-white">
            {/* Head Resources */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            {/* Navigation */}
            <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="text-blue-700">
                            <svg className="w-8 h-8 transition-transform group-hover:scale-110" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">TrustCorp</h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-10">
                        {['Services', 'Compliance', 'Insights', 'About Us'].map((item) => (
                            <Link key={item} to="#" className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors">
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button className="hidden sm:block text-sm font-bold text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                            Login
                        </button>
                        <button className="bg-blue-700 text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-all shadow-lg shadow-blue-200">
                            Contact Us
                        </button>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 hero-backdrop"></div>
                    <div className="absolute inset-0 bg-slate-900/40"></div>

                    <div className="relative z-10 w-full max-w-4xl px-6">
                        <div className="bg-blue-700/85 backdrop-blur-md p-8 md:p-16 rounded-2xl shadow-2xl text-center flex flex-col items-center gap-8 border border-white/10">
                            <div className="space-y-4">
                                <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                                    Excellence in Corporate Solutions
                                </h1>
                                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                                    Driving growth through reliable B2B management and globally certified compliance standards.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <button className="bg-white text-blue-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-0.5">
                                    Get Started
                                </button>
                                <button className="border-2 border-white/40 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specialized Services Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Our Specialized Services</h2>
                            <div className="h-1.5 w-24 bg-blue-700 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            {/* Sidebar Tabs */}
                            <div className="lg:col-span-4 flex flex-col gap-3">
                                {SERVICE_TABS.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTabId(tab.id)}
                                        className={`flex items-center gap-4 p-5 rounded-xl text-left transition-all border-l-4 ${activeTabId === tab.id
                                            ? 'bg-blue-50 border-blue-700'
                                            : 'bg-transparent border-transparent hover:bg-slate-50'
                                            }`}
                                    >
                                        <Icon
                                            name={tab.icon}
                                            className={`${activeTabId === tab.id ? 'text-blue-700' : 'text-slate-400'}`}
                                        />
                                        <div>
                                            <p className={`font-bold text-lg ${activeTabId === tab.id ? 'text-blue-700' : 'text-slate-900'}`}>
                                                {tab.title}
                                            </p>
                                            <p className="text-sm text-slate-500">{tab.subtitle}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Content Area */}
                            <div className="lg:col-span-8 bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 min-h-[500px] flex flex-col md:flex-row gap-10 items-center transition-all duration-300">
                                <div className="flex-1 space-y-6">
                                    <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded">
                                        Feature Details
                                    </span>
                                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                        {activeTab.details.heading}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {activeTab.details.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {activeTab.details.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                                                <Icon name="check_circle" className="text-blue-700 text-xl" filled />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="mt-4 bg-blue-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-blue-100 hover:-translate-y-1 transition-all">
                                        View Full Services
                                    </button>
                                </div>

                                <div className="flex-1 w-full">
                                    <div className="aspect-square bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 p-8 flex flex-col justify-center items-center text-center">
                                        <div className="w-full mb-8">
                                            <AnalyticsChart />
                                        </div>
                                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                                            <Icon name="bar_chart" className="text-blue-700 text-3xl" />
                                        </div>
                                        <p className="text-slate-400 text-xs italic">
                                            {activeTab.details.imageLabel}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Trust Section & Form */}
                <section className="py-24 bg-slate-50/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            {/* Trust Indicators */}
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
                                        Why Global Leaders Trust Our Infrastructure
                                    </h2>
                                    <p className="text-slate-600 max-w-lg">
                                        We combine rigorous certification with human-centric support to provide a foundation for your global expansion.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {TRUST_FACTORS.map((factor) => (
                                        <div key={factor.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                            <Icon name={factor.icon} className="text-blue-700 text-4xl mb-4" />
                                            <h4 className="font-bold text-lg mb-2 text-slate-900">{factor.title}</h4>
                                            <p className="text-sm text-slate-500">{factor.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Demo Request Form */}
                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 relative">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-2 text-slate-900">Request a Personalized Demo</h3>
                                    <p className="text-slate-500 text-sm">Schedule a 30-minute walkthrough with our expert team.</p>
                                </div>

                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 ml-1">First Name</label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                className="w-full bg-slate-50 border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 ml-1">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full bg-slate-50 border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 ml-1">Work Email</label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full bg-slate-50 border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 ml-1">Company Size</label>
                                        <select className="w-full bg-slate-50 border-slate-200 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-600 appearance-none">
                                            <option>Select size...</option>
                                            <option>1-50 employees</option>
                                            <option>51-250 employees</option>
                                            <option>251-1000 employees</option>
                                            <option>1000+ employees</option>
                                        </select>
                                    </div>

                                    <div className="pt-4">
                                        <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-extrabold text-lg shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:scale-[1.01] active:scale-[0.99] transition-all">
                                            Submit Request
                                        </button>
                                        <p className="text-[11px] text-slate-400 text-center mt-4 px-4 leading-relaxed">
                                            By clicking submit, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>. We'll never share your data.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Logo Cloud */}
                <section className="py-16 bg-white border-y border-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] mb-12">Trusted by Forward-Thinking Enterprises</p>
                        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                            {[80, 100, 90, 85, 110].map((w, i) => (
                                <div key={i} style={{ width: w }} className="h-8 bg-slate-400 rounded-md"></div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-50 pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="text-blue-700">
                                <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-extrabold tracking-tight text-slate-900">TrustCorp</h2>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                            The next generation of corporate management systems. Built for scale, secured for life. Helping businesses thrive in a complex global market.
                        </p>
                        <div className="flex gap-4">
                            {['share', 'public'].map(icon => (
                                <div key={icon} className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-700 hover:text-white transition-all shadow-sm">
                                    <Icon name={icon} className="text-lg" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h5 className="font-bold text-xs uppercase tracking-widest text-blue-700">Solutions</h5>
                        <ul className="space-y-3 text-sm text-slate-600">
                            {['Enterprise ERP', 'Compliance Engine', 'Data Analytics', 'API Hub'].map(link => (
                                <li key={link} className="hover:text-blue-700 transition-colors cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h5 className="font-bold text-xs uppercase tracking-widest text-blue-700">Company</h5>
                        <ul className="space-y-3 text-sm text-slate-600">
                            {['About Us', 'Careers', 'Press Center', 'Contact'].map(link => (
                                <li key={link} className="hover:text-blue-700 transition-colors cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h5 className="font-bold text-xs uppercase tracking-widest text-blue-700">Support</h5>
                        <ul className="space-y-3 text-sm text-slate-600">
                            {['Documentation', 'Customer Portal', 'Service Status', 'Security'].map(link => (
                                <li key={link} className="hover:text-blue-700 transition-colors cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <p>© 2024 TrustCorp Global. All rights reserved.</p>
                    <div className="flex gap-8">
                        <span className="cursor-pointer hover:text-blue-700 transition-colors">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-blue-700 transition-colors">Terms of Service</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
