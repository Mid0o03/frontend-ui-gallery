
import React from 'react';

const MetricItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col gap-2 group p-8 lg:p-0">
    <span className="text-5xl lg:text-7xl font-black text-white tracking-tighter group-hover:text-primary transition-colors duration-500">
      {value}
    </span>
    <span className="text-xs uppercase tracking-[0.4em] font-bold text-slate-500">
      {label}
    </span>
  </div>
);

export const Metrics: React.FC = () => {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-slate-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center items-center">
          <MetricItem value="10M+" label="Trusted Global Users" />
          <MetricItem value="$5B+" label="Monthly Transactions" />
          <MetricItem value="99.9%" label="Secure Uptime" />
        </div>
      </div>
    </section>
  );
};
