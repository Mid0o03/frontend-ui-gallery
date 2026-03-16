import React from 'react';

const Enterprise: React.FC = () => {
    return (
        <div className="pt-24 pb-20 bg-background-light min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">Enterprise Edition</span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                            The platform for <span className="text-primary truncate">massive scale</span>.
                        </h1>
                        <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
                            Unlock the full potential of your organization with advanced security, dedicated support, and custom governance controls.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div>
                                <h4 className="font-bold text-2xl mb-2">99.99%</h4>
                                <p className="text-sm text-gray-400">Uptime SLA guarantee</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-2xl mb-2">24/7</h4>
                                <p className="text-sm text-gray-400">Dedicated support</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-8 items-center opacity-40">
                            <span className="font-bold text-xs uppercase tracking-widest">Trusted By</span>
                            <div className="flex gap-6 items-center">
                                <span className="material-symbols-outlined text-4xl">cloud_done</span>
                                <span className="material-symbols-outlined text-4xl">data_thresholding</span>
                                <span className="material-symbols-outlined text-4xl">security</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50">
                        <h3 className="text-2xl font-bold mb-8">Contact our sales team</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-400 ml-1">First Name</label>
                                    <input type="text" className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-400 ml-1">Last Name</label>
                                    <input type="text" className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-400 ml-1">Work Email</label>
                                <input type="email" className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="john@company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-400 ml-1">Company Size</label>
                                <select className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                                    <option>100 - 500 employees</option>
                                    <option>500 - 1000 employees</option>
                                    <option>1000+ employees</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-400 ml-1">How can we help?</label>
                                <textarea className="w-full px-5 py-4 bg-gray-50 border-0 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all outline-none h-32 resize-none" placeholder="Tell us about your needs..."></textarea>
                            </div>
                            <button className="w-full py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-[0.98]">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20 border-t border-gray-100">
                    {[
                        { title: 'Global Compliance', desc: 'Meet regional data residency and compliance requirements worldwide.' },
                        { title: 'Advanced Governance', desc: 'Granular permissions and audit logs for your entire organization.' },
                        { title: 'Custom Contracts', desc: 'Tailored agreements and billing options to fit your procurement process.' }
                    ].map((item, i) => (
                        <div key={i}>
                            <h4 className="font-bold text-xl mb-4 text-gray-900">{item.title}</h4>
                            <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Enterprise;
