
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Studio from '../../components/Studio';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />

                {/* Abstract shape decoration */}
                <div className="relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl aspect-square bg-indigo-600/5 blur-[120px] rounded-full -z-10"></div>
                    <Features />
                </div>

                <Studio />

                <section id="showcase" className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="text-4xl font-bold mb-4">Community Showcase</h2>
                                <p className="text-gray-400">Discover what's possible with Dynamic Visual Studio.</p>
                            </div>
                            <button className="hidden sm:block text-indigo-400 font-semibold hover:underline">View All Creations</button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <div key={i} className="aspect-square bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden relative group">
                                    <img
                                        src={`https://picsum.photos/seed/visualgen-${i}/600/600`}
                                        alt={`Sample ${i}`}
                                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                                        <p className="text-xs font-medium text-white line-clamp-2">A conceptual render of an automated future city...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold mb-6">Ready to upgrade your visuals?</h2>
                                <p className="text-indigo-100 mb-10 max-w-xl mx-auto opacity-90 leading-relaxed">
                                    Join thousands of developers and designers creating dynamic assets on the fly.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <button className="w-full sm:w-auto bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
                                        Start Building For Free
                                    </button>
                                    <button className="w-full sm:w-auto bg-indigo-700/50 border border-indigo-400/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700/80 transition-all">
                                        Schedule Demo
                                    </button>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
