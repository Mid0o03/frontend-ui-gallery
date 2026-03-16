import React from 'react';
import { ShieldCheck, Leaf, Microscope } from 'lucide-react';

const Compliance: React.FC = () => {
    return (
        <section className="bg-parchment dark:bg-background-dark py-16 border-y border-amber-brown/10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="flex justify-center mb-6">
                    <ShieldCheck size={48} className="text-amber-brown opacity-50" />
                </div>
                <h2 className="text-forest-green dark:text-primary text-2xl font-bold mb-4 tracking-tight">FDA Compliance & Safety Guidelines</h2>
                <p className="text-amber-brown/80 dark:text-slate-300 text-base leading-relaxed max-w-2xl mx-auto italic">
                    These statements have not been evaluated by the Food and Drug Administration. Our products are not intended to diagnose, treat, cure, or prevent any disease. Clinical efficacy may vary by individual biochemical profile.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-8 text-xs font-bold text-forest-green/60 dark:text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><ShieldCheck size={14} /> Lab Tested</span>
                    <span className="flex items-center gap-1"><Leaf size={14} /> 100% Organic</span>
                    <span className="flex items-center gap-1"><Microscope size={14} /> Practitioner Approved</span>
                </div>
                <div className="mt-10">
                    <button className="text-forest-green dark:text-slate-300 font-bold text-sm underline underline-offset-4 hover:text-primary transition-colors uppercase tracking-wider">
                        View Full Medical Disclaimer
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Compliance;
