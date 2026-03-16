
import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { Features } from '../../components/Features';
import { AIDemo } from '../../components/AIDemo';
import { Gallery } from '../../components/Gallery';
import { Footer } from '../../components/Footer';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <AIDemo />
                <Gallery />
                <section className="py-24 bg-indigo-600 relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                    </div>
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to transform your digital presence?</h2>
                        <p className="text-indigo-100 text-xl mb-12">Join 10,000+ companies building high-converting landing pages with Lumina.</p>
                        <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-2xl">
                            Get Started for Free
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
