
import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ArticleGrid from '../../components/ArticleGrid';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import { MOCK_ARTICLES } from '../../constants';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen selection:bg-brand-black selection:text-white">
            <Header />

            <main>
                <Hero />

                {/* Curated Feed Section */}
                <section id="editions">
                    <ArticleGrid articles={MOCK_ARTICLES} />
                </section>

                {/* Dynamic Curation Tool Mockup (AI integration prompt) */}
                <section className="bg-brand-light py-20 border-y border-brand-black/5 text-center px-6">
                    <div className="max-w-xl mx-auto">
                        <span className="material-symbols-outlined text-3xl mb-4 font-light opacity-60">auto_awesome</span>
                        <h4 className="text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">AI Curation Engine</h4>
                        <p className="text-xs opacity-50 tracking-wider mb-8">
                            Experience personalized architectural insights powered by Gemini.
                        </p>
                        <button className="text-[9px] uppercase tracking-widest px-10 py-3 border-[0.5px] border-brand-black/30 hover:border-brand-black transition-all">
                            Generate Custom Edition
                        </button>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />
        </div>
    );
};
