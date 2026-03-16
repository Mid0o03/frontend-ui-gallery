
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Verified System Operators</h2>
        <p className="text-slate-500 text-sm">Real-world results from the frontier of performance.</p>
      </div>
      
      <div className="flex gap-6 px-6 overflow-x-auto pb-8 snap-x no-scrollbar">
        {TESTIMONIALS.map((review, idx) => (
          <div 
            key={review.id} 
            className={`min-w-[400px] glass-panel p-8 rounded-2xl snap-center flex flex-col justify-between border-l-2 ${
              idx === 0 ? 'border-l-primary' : idx === 1 ? 'border-l-primary/60' : 'border-l-primary/30'
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-primary gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`material-symbols-outlined text-sm ${i < review.rating ? 'fill-1' : ''}`}>
                      {i < Math.floor(review.rating) ? 'star' : i < review.rating ? 'star_half' : 'star'}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  {review.badge}
                </div>
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">
                {review.content}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  alt={review.name} 
                  src={review.imageUrl} 
                />
              </div>
              <div>
                <div className="font-bold text-sm tracking-tight">{review.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
