
import React, { useState } from 'react';
import { getSkinAdvice } from '../services/gemini';
import { AdvisorResponse } from '../types';

const SkinAdvisor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<AdvisorResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    try {
      const advice = await getSkinAdvice(query);
      setResult(advice);
    } catch (err) {
      setError('I encountered an error while analyzing your ritual. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultation" className="py-24 px-8 bg-sage-soft/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">clinical_notes</span>
          <h2 className="font-serif text-4xl italic mb-4">Digital Consultation</h2>
          <p className="text-sm font-light text-black/60 wide-tracking uppercase">Powered by Terra Intelligence</p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 soft-shadow border border-sage-soft">
          {!result ? (
            <form onSubmit={handleConsultation} className="space-y-8">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase wide-tracking text-black/40">Tell us about your skin</label>
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., My skin feels dry during winter and I have some redness around my nose..."
                  className="w-full h-32 bg-stone-soft/50 border-none rounded-xl p-6 text-sm font-medium focus:ring-2 focus:ring-primary placeholder:italic resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#131811] text-white hover:bg-black py-4 rounded-xl font-bold uppercase wide-tracking text-xs transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <span className="animate-spin material-symbols-outlined">refresh</span>
                    Analyzing Ritual...
                  </>
                ) : 'Begin Consultation'}
              </button>
              {error && <p className="text-red-500 text-xs text-center font-bold">{error}</p>}
            </form>
          ) : (
            <div className="space-y-10 animate-fade-in">
              <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
                <h4 className="text-[10px] font-bold uppercase wide-tracking text-primary mb-2">Our Analysis</h4>
                <p className="text-lg font-serif italic text-[#131811] leading-relaxed">"{result.analysis}"</p>
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase wide-tracking text-black/40">Recommended Routine</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {result.recommendations.map((rec, idx) => (
                    <div key={idx} className="p-6 border border-sage-soft rounded-xl hover:border-primary transition-colors group">
                      <h5 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">{rec.productName}</h5>
                      <p className="text-xs text-black/60 leading-relaxed">{rec.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { setResult(null); setQuery(''); }}
                className="text-[10px] font-bold uppercase wide-tracking border-b border-black pb-1 hover:text-primary hover:border-primary transition-all"
              >
                New Consultation
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkinAdvisor;
