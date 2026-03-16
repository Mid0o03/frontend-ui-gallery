
import React from 'react';

const QualitySection: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-background-darker">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Quality & <span className="text-primary italic">Compliance</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              At Modern Herbalist, transparency is our primary ingredient. We believe that true healing begins with rigorous standards and uncompromised integrity in sourcing and testing.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-xl border border-forest-muted/30 bg-background-dark/50 hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                <div>
                  <h3 className="text-white font-bold mb-1">Third-Party Lab Tested</h3>
                  <p className="text-white/50 text-sm">Every batch undergoes GC/MS testing to verify purity and potency, ensuring zero contaminants or synthetic fillers.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-xl border border-forest-muted/30 bg-background-dark/50 hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                <div>
                  <h3 className="text-white font-bold mb-1">Sustainable Sourcing</h3>
                  <p className="text-white/50 text-sm">We partner exclusively with regenerative farms that prioritize biodiversity and soil health across five continents.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-apothecary-brown/10 border border-apothecary-brown/20 p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-apothecary-brown">gavel</span>
            </div>
            <div className="flex items-center gap-2 mb-6 text-apothecary-brown dark:text-primary/70">
              <span className="material-symbols-outlined">gavel</span>
              <span className="uppercase tracking-widest text-xs font-bold">Regulatory Standards</span>
            </div>
            <h4 className="text-white text-xl font-bold mb-4 font-display">FDA Disclaimer</h4>
            <div className="space-y-4 text-white/60 text-sm leading-relaxed italic">
              <p>The statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research.</p>
              <p>These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from healthcare practitioners.</p>
              <p>Please consult your healthcare professional about potential interactions or other possible complications before using any product.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-forest-muted/30">
              <a className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#">
                Read Full Legal Disclosure <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
