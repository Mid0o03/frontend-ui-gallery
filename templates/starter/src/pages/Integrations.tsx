import React from 'react';

const Integrations: React.FC = () => {
    const categories = ['All', 'Productivity', 'Development', 'Marketing', 'Finance'];
    const apps = [
        { name: 'Slack', icon: 'forum', color: 'bg-[#4A154B]', desc: 'Streamline team communication.' },
        { name: 'GitHub', icon: 'code', color: 'bg-[#181717]', desc: 'Seamlessly link your codebase.' },
        { name: 'Stripe', icon: 'payments', color: 'bg-[#635BFF]', desc: 'Handle payments with ease.' },
        { name: 'Notion', icon: 'description', color: 'bg-black', desc: 'Sync your documentation.' },
        { name: 'Figma', icon: 'palette', color: 'bg-[#F24E1E]', desc: 'Import design assets directly.' },
        { name: 'Discord', icon: 'chat', color: 'bg-[#5865F2]', desc: 'Engage with your community.' },
        { name: 'Linear', icon: 'task_alt', color: 'bg-[#5E6AD2]', desc: 'Manage issues effortlessly.' },
        { name: 'Zapier', icon: 'auto_mode', color: 'bg-[#FF4A00]', desc: 'Automate your workflows.' },
    ];

    return (
        <div className="pt-24 pb-20 bg-background-light min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Works with your <span className="text-primary">stack</span>.
                    </h1>
                    <p className="text-xl text-gray-500">
                        Connect BentoGrid with the tools you already love.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat, i) => (
                        <button key={i} className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-all ${i === 0 ? 'bg-gray-900 text-white border-gray-900 shadow-lg' : 'bg-white border-gray-100 text-gray-500 hover:border-gray-900'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {apps.map((app, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group cursor-pointer">
                            <div className={`${app.color} size-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-200 group-hover:rotate-6 transition-transform`}>
                                <span className="material-symbols-outlined text-3xl">{app.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{app.name}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                {app.desc}
                            </p>
                            <div className="flex items-center gap-1 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                Connect Now
                                <span className="material-symbols-outlined text-xs">arrow_forward</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Developer SDK Card */}
                <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 size-96 bg-primary/20 rounded-full blur-[100px]"></div>
                    <div className="max-w-xl relative z-10">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block underline decoration-2 underline-offset-8">API Documentation</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Build your own custom integrations</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Our robust API and SDKs make it easy to extend BentoGrid to meet your unique business needs. Get started with our comprehensive documentation.
                        </p>
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-white/5 flex items-center gap-2">
                            Explore API Docs
                            <span className="material-symbols-outlined">launch</span>
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 relative z-10 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <pre className="text-xs md:text-sm font-mono text-primary overflow-x-auto">
                            {`const bento = new BentoGrid('YOUR_API_KEY');

await bento.integrations.connect({
  provider: 'slack',
  scope: ['chat:write', 'channels:read'],
  callback: (status) => console.log(status)
});`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Integrations;
