
import React, { useState } from 'react';
import { getBotanicalInfo } from '../services/geminiService';
import { BotanicalInfo } from '../types';

interface BotanicalSearchModalProps {
  onClose: () => void;
}

const BotanicalSearchModal: React.FC<BotanicalSearchModalProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<BotanicalInfo | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    const result = await getBotanicalInfo(query);
    setInfo(result);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-background-dark/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-background-dark border border-forest-muted/40 rounded-3xl overflow-hidden shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-2 font-display">Botanical Research</h2>
          <p className="text-white/40 text-sm mb-6 italic">Deep knowledge powered by our laboratory database.</p>
          
          <form onSubmit={handleSearch} className="relative mb-8">
            <input 
              autoFocus
              className="w-full bg-forest-muted/20 border-forest-muted/50 rounded-xl py-4 pl-12 pr-4 text-white focus:ring-primary focus:border-primary transition-all text-lg"
              placeholder="Enter a plant name (e.g., Lavender, Ashwagandha)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">psychology</span>
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-background-dark font-bold px-4 py-1.5 rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
            >
              {loading ? 'Searching...' : 'Explore'}
            </button>
          </form>

          <div className="min-h-[300px] overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 space-y-4">
                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <p className="text-primary animate-pulse text-sm font-bold uppercase tracking-widest">Consulting Scientific Monographs...</p>
              </div>
            ) : info ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="border-b border-forest-muted/30 pb-4">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-display italic">{info.name}</h3>
                </div>
                
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-primary">eco</span>
                    Therapeutic Benefits
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {info.benefits.map((benefit, i) => (
                      <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                        <span className="text-primary mt-1 text-[10px]">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-primary">history</span>
                    Historical Use
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed italic">{info.history}</p>
                </div>

                <div className="bg-apothecary-brown/10 p-4 rounded-xl border border-apothecary-brown/20">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm text-amber-500">warning</span>
                    Safety Considerations
                  </h4>
                  <p className="text-white/50 text-xs leading-relaxed">{info.safety}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                <span className="material-symbols-outlined text-6xl mb-4">search_insights</span>
                <p className="text-sm">Search for a botanical species to discover its history, benefits, and scientific monographs.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotanicalSearchModal;
