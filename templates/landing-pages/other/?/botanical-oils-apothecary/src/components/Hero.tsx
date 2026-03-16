import React from 'react';
import { Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTENT } from '../config/content';

const Hero: React.FC = () => {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-forest-green/40 mix-blend-multiply z-10"></div>
                <img
                    alt="Macro close-up leaf"
                    className="w-full h-full object-cover scale-105"
                    src="https://images.unsplash.com/photo-1473181445939-97d5a9bc5722?auto=format&fit=crop&q=80&w=2000"
                />
            </div>
            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-white text-xs font-bold tracking-widest uppercase mb-6">
                    <Microscope size={14} /> {CONTENT.hero.badge}
                </div>
                <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-xl">
                    {CONTENT.hero.title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                    {CONTENT.hero.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/products" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all transform hover:-translate-y-1 block">
                        {CONTENT.hero.cta}
                    </Link>
                    <Link to="/learn" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-lg font-bold text-lg hover:bg-white/20 transition-all block">
                        {CONTENT.hero.secondaryCta}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
