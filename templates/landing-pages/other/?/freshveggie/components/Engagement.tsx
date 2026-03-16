
import React from 'react';
import { MapPin, Leaf, Sun } from 'lucide-react';

const Engagement: React.FC = () => {
  const items = [
    {
      title: 'Local',
      description: 'Sourced from boutique farms within 50 miles of your home to minimize carbon footprint.',
      icon: <MapPin className="w-8 h-8" />,
    },
    {
      title: 'Organic',
      description: 'Pesticide-free, nutrient-dense soil cultivation methods for better flavor and health.',
      icon: <Leaf className="w-8 h-8" />,
    },
    {
      title: 'Seasonal',
      description: 'Only what is currently in peak bloom for maximum nutrition and seasonal variety.',
      icon: <Sun className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="text-4xl font-black tracking-tight">Our Engagement</h2>
          <p className="text-gray-500 max-w-[600px]">Transparency and the highest standards for your kitchen, from our fields to your table.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-10 rounded-3xl border border-gray-100 bg-[#f8f7f5]/50 group hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-sage-soft flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagement;
