
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <section className="py-24 px-6 lg:px-20 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <div className="organic-shape bg-primary/10 p-6 inline-block">
          <Heart className="w-12 h-12 text-primary fill-primary/20" />
        </div>
        <h2 className="text-4xl font-black tracking-tight">
          Join our community for weekly recipes and garden updates.
        </h2>
        
        {status === 'success' ? (
          <div className="bg-green-100 text-green-700 px-8 py-4 rounded-xl font-bold animate-in zoom-in-95 duration-300">
            Welcome to the garden! Check your inbox soon. 🌿
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:row w-full max-w-lg gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border-gray-100 border-2 bg-white px-6 h-14 text-sm focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
                placeholder="Your email address"
              />
              <button 
                type="submit"
                className="h-14 px-10 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
        
        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold italic">
          No spam, just fresh greens.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
