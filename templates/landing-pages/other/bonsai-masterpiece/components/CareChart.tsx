
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CARE_DATA } from '../constants';
import { siteContent } from '../src/config/content';

const CareChart: React.FC = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-display text-6xl text-stone-800 dark:text-white uppercase leading-tight mb-6">
              {siteContent.care.title}
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 mb-8 leading-relaxed">
              {siteContent.care.description}
            </p>
            <div className="space-y-4">
              {siteContent.care.tips.map((tip, index) => (
                <div key={index} className={`flex items-center gap-4 ${index === 0 ? 'bg-primary/10 border-primary/20' : 'bg-blue-500/10 border-blue-500/20'} p-4 rounded-2xl border`}>
                  <span className={`material-icons-outlined ${index === 0 ? 'text-primary' : 'text-blue-500'}`}>{tip.icon}</span>
                  <span className="text-sm font-semibold">{tip.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-[400px] bg-white dark:bg-stone-800 p-8 rounded-[3rem] shadow-2xl">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CARE_DATA}>
                <defs>
                  <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f57d3d" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f57d3d" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorSun" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" opacity={0.3} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="water" stroke="#f57d3d" strokeWidth={3} fillOpacity={1} fill="url(#colorWater)" name="Water Intensity" />
                <Area type="monotone" dataKey="sun" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSun)" name="Sun Exposure" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareChart;
