
import React from 'react';
import Navbar from '../components/Navbar';
import PricingCard from '../components/PricingCard';
import { PRICING_PLANS } from '../constants';

export const Home: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center py-20 px-6 relative z-10">
            <div className="max-w-7xl w-full">
                {/* Hero Section */}
                <div className="mb-20 border-l-[10px] border-primary pl-10 md:pl-16">
                    <span className="text-primary font-bold uppercase tracking-[0.6em] text-sm mb-4 block">
                        MEMBERSHIP PLANS
                    </span>
                    <h1 className="text-white text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter uppercase italic">
                        SELECT YOUR <br />
                        <span className="stencil-text block mt-2">INTENSITY</span>
                    </h1>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
                    {PRICING_PLANS.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} />
                    ))}
                </div>

                {/* Slogan */}
                <div className="mt-20 text-center">
                    <p className="text-white/30 text-sm md:text-base font-black uppercase tracking-[0.4em] animate-pulse">
                        No contracts. No excuses. <span className="text-primary/50">Just iron.</span>
                    </p>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
    );
};
