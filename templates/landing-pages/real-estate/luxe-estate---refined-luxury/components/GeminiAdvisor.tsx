
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to LUXE. I am your AI Concierge for 'The Specification'. How may I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const responseText = await getGeminiResponse(userText, messages);
    
    setIsLoading(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-display">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group size-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border border-white/20 
          ${isOpen ? 'bg-black rotate-90' : 'bg-primary hover:bg-black'}`}
      >
        {isOpen ? (
          <span className="material-symbols-outlined text-white">close</span>
        ) : (
          <span className="material-symbols-outlined text-white group-hover:animate-pulse">smart_toy</span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] max-w-[90vw] bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/5 animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-black p-5 text-white flex items-center gap-3">
            <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary !text-2xl">concierge</span>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest">AI Concierge</h4>
              <p className="text-[10px] opacity-60">Luxe Estate Group</p>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="h-80 overflow-y-auto p-5 space-y-4 bg-neutral-50 scroll-smooth"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-xs leading-relaxed shadow-sm rounded-xl
                  ${msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white text-black border border-black/5 rounded-tl-none'}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-black/5 p-3 rounded-xl rounded-tl-none flex gap-1">
                  <div className="size-1 bg-neutral-300 rounded-full animate-bounce"></div>
                  <div className="size-1 bg-neutral-300 rounded-full animate-bounce delay-100"></div>
                  <div className="size-1 bg-neutral-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-black/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about the property..."
              className="flex-1 bg-neutral-100 border-none rounded-full px-4 py-2 text-xs focus:ring-1 focus:ring-primary outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="size-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors disabled:opacity-30"
            >
              <span className="material-symbols-outlined !text-lg">send</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAdvisor;
