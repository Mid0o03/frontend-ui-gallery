
import React, { useState, useEffect } from 'react';
import { generateDailyIntention } from '../services/geminiService';

const IntentionGenerator: React.FC = () => {
  const [intention, setIntention] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchIntention = async () => {
    setLoading(true);
    const result = await generateDailyIntention();
    setIntention(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchIntention();
  }, []);

  return (
    <div className="mb-12 px-4">
      <div className="glass-card rounded-[2rem] p-6 text-center space-y-3 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Intention du jour</span>
        <div className="min-h-[3rem] flex items-center justify-center">
          {loading ? (
            <div className="flex gap-1">
              <div className="size-1 bg-white/30 rounded-full animate-bounce"></div>
              <div className="size-1 bg-white/30 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="size-1 bg-white/30 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          ) : (
            <p className="text-sm font-medium italic text-white/80 leading-relaxed">
              "{intention}"
            </p>
          )}
        </div>
        <button 
          onClick={fetchIntention}
          className="text-[10px] font-bold text-primary hover:text-white/70 transition-colors uppercase tracking-widest pt-2 flex items-center justify-center gap-1 mx-auto"
        >
          Nouvelle inspiration <span className="material-symbols-outlined text-[12px]">refresh</span>
        </button>
      </div>
    </div>
  );
};

export default IntentionGenerator;
