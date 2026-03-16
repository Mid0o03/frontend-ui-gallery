
import React from 'react';

const stats = [
  { label: "Productivité", value: "+200%" },
  { label: "Heures économisées", value: "15 / semaine" },
  { label: "Satisfaction", value: "98%" }
];

export const Stats: React.FC = () => {
  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
            <p className="text-slate-500 font-semibold mb-2 uppercase tracking-wider text-sm">{stat.label}</p>
            <p className="text-primary text-4xl md:text-5xl font-black">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
