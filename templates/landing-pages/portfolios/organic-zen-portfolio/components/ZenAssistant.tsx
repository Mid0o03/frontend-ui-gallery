
import React, { useState, useRef, useEffect } from 'react';
import { generateCreativeInsight } from '../services/gemini';

const ZenAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [insight, setInsight] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    const userQuery = query;
    setQuery("");
    
    const result = await generateCreativeInsight(userQuery);
    setInsight(result);
    setIsLoading(false);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [insight, isLoading]);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white/90 backdrop-blur-xl w-80 md:w-96 rounded-3xl shadow-2xl border border-primary/10 flex flex-col overflow-hidden animate-slide-up">
          <div className="bg-primary p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-beige">spa</span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest">Zen Consultant</h3>
                <p className="text-[10px] text-beige/70">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="p-6 h-64 overflow-y-auto hide-scrollbar space-y-4">
            <p className="text-xs text-stone italic border-l-2 border-primary/20 pl-4">
              "Every stone has a story. How can I guide your creative journey today?"
            </p>
            
            {insight && (
              <div className="bg-beige/50 p-4 rounded-2xl animate-fade-in">
                <p className="text-sm text-[#171412] leading-relaxed font-display italic">
                  {insight}
                </p>
              </div>
            )}
            
            {isLoading && (
              <div className="flex gap-2 p-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-.3s]" />
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-.5s]" />
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleConsult} className="p-4 bg-beige/30 border-t border-primary/5">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about design philosophy..."
                className="w-full bg-white border-none rounded-full px-6 py-3 text-sm focus:ring-1 focus:ring-primary shadow-inner"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-2 top-1.5 bg-primary text-white p-1.5 rounded-full hover:bg-dark-clay transition-colors disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-sm">north</span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden"
        >
          <span className="material-symbols-outlined animate-pulse">auto_awesome</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
};

export default ZenAssistant;
