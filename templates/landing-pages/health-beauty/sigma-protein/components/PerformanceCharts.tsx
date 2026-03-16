
import React from 'react';
import { PERFORMANCE_METRICS, AMINO_ACID_PROFILE } from '../constants';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const PerformanceCharts: React.FC = () => {
  return (
    <section id="performance" className="py-24 px-6 bg-surface-dark/30 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold tracking-[0.4em] text-primary uppercase mb-3 underline underline-offset-8 decoration-primary">Lab Analysis</h2>
            <h3 className="text-4xl font-bold tracking-tight">Performance Data Sheets</h3>
          </div>
          
          <div className="glass-panel px-6 py-4 rounded-xl flex gap-10">
            {PERFORMANCE_METRICS.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-primary text-xl font-bold italic">{metric.value}</div>
                <div className="text-[9px] uppercase tracking-widest opacity-50">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Amino Acid Profile */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className="text-white text-lg font-bold">Amino Acid Profile</p>
                <p className="text-slate-500 text-sm">Synthetic-grade essential amino matrix</p>
              </div>
              <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">analytics</span>
            </div>
            
            <div className="space-y-6">
              {AMINO_ACID_PROFILE.map((aa) => (
                <div key={aa.name} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase text-slate-400">
                    <span>{aa.name}</span>
                    <span className="text-primary">{aa.amount.toLocaleString()}mg</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(37,175,244,0.8)] transition-all duration-1000" 
                      style={{ width: `${aa.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Efficacy Matrix (Custom Radar-style SVG) */}
          <div className="glass-panel p-8 rounded-2xl relative flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="mb-8">
                <p className="text-white text-lg font-bold">Efficacy Matrix</p>
                <p className="text-slate-500 text-sm">Competitive benchmark vs. Standard Isolate</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="text-[10px] uppercase font-bold tracking-widest">Sigma Isolate (v4)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-slate-700"></span>
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Industry Average</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center py-4">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform rotate-[-90deg]" viewBox="0 0 100 100">
                  {/* Hexagon Grid */}
                  <polygon fill="none" points="50,5 95,35 95,65 50,95 5,65 5,35" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  <polygon fill="none" points="50,20 80,40 80,60 50,80 20,60 20,40" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  {/* Data Polygon */}
                  <polygon 
                    fill="rgba(37,175,244,0.1)" 
                    points="50,10 90,40 85,65 50,90 15,65 10,35" 
                    stroke="#25aff4" 
                    strokeWidth="2" 
                    className="animate-pulse shadow-[0_0_20px_rgba(37,175,244,0.5)]"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="material-symbols-outlined text-primary/20 text-5xl">biotech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceCharts;
