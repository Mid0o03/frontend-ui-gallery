
import React, { useState } from 'react';
import { getPerformanceInsights } from '../services/geminiService';
import { AIPerformanceResponse } from '../types';

const AIPerformanceConsultant: React.FC = () => {
  const [useCase, setUseCase] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIPerformanceResponse | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!useCase.trim()) return;
    
    setLoading(true);
    const data = await getPerformanceInsights(useCase);
    setResult(data);
    setLoading(false);
  };

  return (
    <section id="performance" className="bg-[#1a1a1a] py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-primary text-lg font-bold tracking-[0.3em] uppercase mb-4">AI Consultant</h2>
            <h3 className="text-white text-5xl font-black italic tracking-tighter mb-8 leading-none">
              TAILORED PERFORMANCE <br /> ARCHITECTURE
            </h3>
            <p className="text-white/60 text-lg mb-10 max-w-lg">
              Not sure how VOLTAPP fits your project? Describe your app or use case, and our AI performance engine will design a custom acceleration strategy for you.
            </p>
            
            <form onSubmit={handleAnalyze} className="relative group">
              <input 
                type="text" 
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                placeholder="e.g. Real-time stock trading platform..."
                className="w-full bg-black border-2 border-white/10 p-6 pr-40 rounded-xl text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-primary text-black px-8 rounded-lg font-black uppercase tracking-tighter hover:bg-white transition-colors disabled:opacity-50"
              >
                {loading ? 'ANALYZING...' : 'ANALYZE'}
              </button>
            </form>
            
            <div className="mt-8 flex gap-3 flex-wrap">
              {['Social Media', 'E-commerce', 'Crypto Wallet', 'Game Engine'].map(suggestion => (
                <button 
                  key={suggestion}
                  onClick={() => setUseCase(suggestion)}
                  className="px-4 py-2 rounded-full border border-white/10 text-white/40 text-xs hover:border-primary hover:text-primary transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px] bg-black/40 border-2 border-white/5 rounded-3xl p-8 relative overflow-hidden">
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-white/10 text-8xl mb-4">query_stats</span>
                <p className="text-white/20 italic">Awaiting your performance query...</p>
              </div>
            )}

            {loading && (
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-primary animate-pulse font-bold tracking-widest uppercase text-xs">Simulating High-Octane Workloads</p>
              </div>
            )}

            {result && !loading && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl mb-8">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Executive Summary</h4>
                  <p className="text-white/80 leading-relaxed italic">{result.summary}</p>
                </div>
                
                <div className="space-y-6">
                  {result.insights.map((insight, idx) => (
                    <div key={idx} className="border-l-2 border-primary/30 pl-6 py-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-primary font-black italic uppercase text-sm">Bottleneck:</span>
                        <span className="text-white/50 text-xs font-bold uppercase">{insight.latencyImpact}</span>
                      </div>
                      <p className="text-white/90 text-sm mb-2">{insight.recommendation}</p>
                      <div className="bg-white/5 p-3 rounded-lg flex items-start gap-3 border border-white/5">
                        <span className="material-symbols-outlined text-primary text-sm mt-1">bolt</span>
                        <p className="text-primary/70 text-xs font-medium uppercase tracking-tighter leading-tight">
                          {insight.voltStrategy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[200px] text-white select-none pointer-events-none">auto_awesome</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPerformanceConsultant;
