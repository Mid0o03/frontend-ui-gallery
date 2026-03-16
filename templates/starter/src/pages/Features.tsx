import React from 'react';

const Features: React.FC = () => {
    return (
        <div className="pt-24 pb-20 bg-background-light min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Everything you need to <span className="text-primary">scale</span>.
                    </h1>
                    <p className="text-xl text-gray-500">
                        Powerful features designed for the next generation of SaaS.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 grid-rows-none">
                    {/* Feature 1 - Large card */}
                    <div className="md:col-span-2 lg:col-span-4 lg:row-span-2 p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm flex flex-col justify-between group overflow-hidden relative">
                        <div className="absolute -top-12 -right-12 size-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-4xl text-primary mb-6 p-4 bg-primary/5 rounded-2xl">analytics</span>
                            <h3 className="text-3xl font-bold mb-4 tracking-tight">Real-time Advanced Analytics</h3>
                            <p className="text-gray-500 leading-relaxed text-lg max-w-md">
                                Dive deep into your data with our powerful analytics engine. Track user behavior, conversion rates, and performance in real-time.
                            </p>
                        </div>
                        <div className="mt-12 p-1 bg-gray-50 rounded-2xl border border-gray-100 relative z-10">
                            <div className="h-40 w-full bg-white rounded-xl shadow-inner flex items-end justify-around p-6 gap-2">
                                {[30, 60, 45, 90, 65, 80, 50, 85, 40, 70, 55, 95].map((h, i) => (
                                    <div key={i} style={{ height: `${h}%` }} className="flex-grow bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-500"></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 - Tall card */}
                    <div className="md:col-span-2 lg:col-span-2 lg:row-span-3 p-10 rounded-[2.5rem] bg-gray-900 text-white shadow-2xl shadow-primary/10 flex flex-col justify-between group">
                        <div>
                            <span className="material-symbols-outlined text-4xl text-primary mb-6 p-4 bg-primary/10 rounded-2xl">security</span>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">Enterprise-grade Security</h3>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Your data is protected by the highest security standards. SSO, SAML, and end-to-end encryption come standard.
                            </p>
                            <ul className="space-y-4">
                                {['SOC2 Type II', 'GDPR Compliant', 'HIPAA Ready', '256-bit AES'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                        <span className="material-symbols-outlined text-primary text-xl">verified</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 size-40 mx-auto bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 relative font-display">
                            <div className="absolute inset-0 animate-ping bg-primary/20 rounded-full opacity-20"></div>
                            <span className="material-symbols-outlined text-6xl text-primary font-light">lock_reset</span>
                        </div>
                    </div>

                    {/* Feature 3 - Small card */}
                    <div className="md:col-span-2 p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:border-primary/20 transition-all group">
                        <span className="material-symbols-outlined text-3xl text-orange-500 mb-6 p-3 bg-orange-500/5 rounded-2xl">bolt</span>
                        <h3 className="text-xl font-bold mb-2">Ultra-Fast Deployment</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Ship code faster with our optimized CI/CD pipelines and global edge network.
                        </p>
                    </div>

                    {/* Feature 4 - Small card */}
                    <div className="md:col-span-2 p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:border-primary/20 transition-all group">
                        <span className="material-symbols-outlined text-3xl text-blue-500 mb-6 p-3 bg-blue-500/5 rounded-2xl">group</span>
                        <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Work together seamlessly with multi-user workspaces and granular permissions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
