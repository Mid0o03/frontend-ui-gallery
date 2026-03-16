
import React, { useState } from 'react';
import { generateWorkoutAdvice } from '../services/geminiService';

const AICoach: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!goal) return;
    setLoading(true);
    const result = await generateWorkoutAdvice(goal);
    setAdvice(result || "Keep pushing.");
    setLoading(false);
  };

  return (
    <div className="bg-concrete p-8 border border-white/10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-primary">psychology</span>
          <h4 className="text-lg font-black uppercase italic">AI Tactical Coach</h4>
        </div>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="What's your target today?" 
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full bg-background-dark border-white/10 text-sm p-4 focus:ring-primary focus:border-primary"
          />
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-primary py-3 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Get Directive'}
          </button>
        </div>

        {advice && (
          <div className="mt-8 p-6 bg-background-dark border-l-4 border-primary animate-in fade-in slide-in-from-left-4">
            <p className="text-sm italic leading-relaxed text-white/80">"{advice}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AICoach;
