
import React from 'react';
import { TrendingUp, ImageIcon, Eye, AlertCircle } from 'lucide-react';

interface StatsProps {
  totalImages: number;
  totalHTMLProcessed: number;
  avgConfidence: number;
  issuesDetected: number;
}

const DashboardStats: React.FC<StatsProps> = ({ totalImages, totalHTMLProcessed, avgConfidence, issuesDetected }) => {
  const cards = [
    { label: 'Extracted Images', value: totalImages, icon: ImageIcon, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { label: 'HTML Snippets', value: totalHTMLProcessed, icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'AI Confidence', value: `${(avgConfidence * 100).toFixed(0)}%`, icon: Eye, color: 'text-amber-600', bg: 'bg-amber-100' },
    { label: 'Optimization Alerts', value: issuesDetected, icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-100' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className={`${card.bg} p-3 rounded-xl`}>
              <card.icon className={`w-6 h-6 ${card.color}`} />
            </div>
            <span className="text-xs font-medium text-slate-400">Past 30 days</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{card.value}</h3>
          <p className="text-sm font-medium text-slate-500 mt-1">{card.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
