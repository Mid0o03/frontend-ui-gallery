
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const absorptionData = [
  { time: '0', val: 10 },
  { time: '30', val: 45 },
  { time: '60', val: 85 },
  { time: '90', val: 95 },
  { time: '120', val: 98.4 },
];

const aminoData = [
  { name: 'LEUCINE', value: 100 },
  { name: 'ISOLEUCINE', value: 75 },
  { name: 'VALINE', value: 85 },
  { name: 'LYSINE', value: 60 },
  { name: 'OTHER', value: 40 },
];

export const MetricsSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-24 border-t border-border-dark">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="max-w-xl">
          <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">Technical Diagnostics</h2>
          <h3 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-none">Bio-Availability Metrics</h3>
        </div>
        <div className="text-gray-500 text-xs font-mono uppercase tracking-widest text-right">
          System Status: <span className="text-green-500">Optimal</span><br/>
          Latency: 0.12ms
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Absorption Graph Card */}
        <div className="flex flex-col gap-6 border border-border-dark bg-surface-dark p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <span className="material-symbols-outlined text-8xl">query_stats</span>
          </div>
          <div className="flex flex-col gap-2 z-10">
            <p className="text-gray-400 text-xs uppercase tracking-widest">Metabolic Absorption Rate</p>
            <div className="flex items-baseline gap-3">
              <p className="text-white text-6xl font-bold leading-none tracking-tighter">98.4<span className="text-primary">%</span></p>
              <span className="text-green-500 text-xs font-bold font-mono">+12.5% vs standard whey</span>
            </div>
          </div>
          
          <div className="h-64 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={absorptionData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d59f2" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0d59f2" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" hide />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0d14', borderColor: '#222f49', color: '#fff', fontSize: '10px', textTransform: 'uppercase' }}
                  itemStyle={{ color: '#0d59f2' }}
                />
                <Area type="monotone" dataKey="val" stroke="#0d59f2" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between border-t border-border-dark pt-4 text-[10px] text-gray-500 font-mono z-10">
            <span>0 MINS</span>
            <span>30 MINS</span>
            <span>60 MINS</span>
            <span>90 MINS</span>
            <span>120 MINS</span>
          </div>
        </div>

        {/* Amino Acid Profile Card */}
        <div className="flex flex-col gap-6 border border-border-dark bg-surface-dark p-8 relative">
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-xs uppercase tracking-widest">Amino Acid Density</p>
            <p className="text-white text-6xl font-bold leading-none tracking-tighter">25<span className="text-primary text-glow">G</span></p>
            <p className="text-gray-500 text-xs uppercase font-mono tracking-widest mt-1">Net Weight per Serving Unit</p>
          </div>
          
          <div className="h-64 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={aminoData}>
                <Bar dataKey="value">
                  {aminoData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#0d59f2" fillOpacity={index === 0 ? 0.9 : 0.4} />
                  ))}
                </Bar>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                <Tooltip 
                   cursor={{ fill: 'rgba(13, 89, 242, 0.1)' }}
                   contentStyle={{ backgroundColor: '#0a0d14', borderColor: '#222f49', color: '#fff', fontSize: '10px' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
