
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, MessageRole } from '../types';

interface BrewingAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrewingAssistant: React.FC<BrewingAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "Good day, traveler. I am the Factory Overseer. Looking for advice on how to brew our industrial-grade beans? Ask away, and don't spill any grease in the gears." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: MessageRole.USER, text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the "Factory Overseer" for "Marque de Café", a vintage industrial coffee roastery established in 1924. 
          Your tone is slightly gruff, formal, and authoritative, but helpful. 
          Use industrial metaphors (gears, steam, furnace, pressure, grit). 
          You know everything about brewing coffee (AeroPress, Pour Over, Espresso, French Press). 
          If asked about recipes, give precise "industrial" instructions. 
          Respond in French if the user speaks French, otherwise English. 
          Keep responses concise but atmospheric.`,
          temperature: 0.7,
        },
      });

      const modelText = response.text || "The steam pipes are clogged. Try again later.";
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: modelText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: "Apologies, the boiler seems to have exploded. Please try again when the dust settles." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-background-dark/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="relative w-full max-w-md bg-coffee-black h-full shadow-2xl flex flex-col border-l border-primary/30 animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-primary/20 flex items-center justify-between bg-background-dark">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">precision_manufacturing</span>
            <h3 className="text-white font-black tracking-tighter stamped-text">Factory Overseer</h3>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 vintage-texture"
        >
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${msg.role === MessageRole.USER ? 'items-end' : 'items-start'}`}
            >
              <div 
                className={`max-w-[85%] px-5 py-4 rounded-lg text-sm leading-relaxed border ${
                  msg.role === MessageRole.USER 
                    ? 'bg-primary text-white border-primary shadow-lg' 
                    : 'bg-background-dark/80 text-gray-200 border-primary/20 italic weathered-paper !text-coffee-black !font-bold'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[9px] uppercase font-bold text-gray-600 mt-2 tracking-widest">
                {msg.role === MessageRole.USER ? 'The Worker' : 'Overseer'}
              </span>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-3 text-primary animate-pulse">
              <span className="material-symbols-outlined animate-spin-slow">settings</span>
              <span className="text-xs font-black uppercase tracking-widest">Calibrating Gears...</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="p-6 bg-background-dark border-t border-primary/20">
          <div className="relative">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ASK THE OVERSEER..."
              className="w-full bg-coffee-black border-2 border-primary/30 rounded-lg py-4 px-6 text-primary placeholder:text-primary/20 focus:border-primary focus:ring-0 uppercase font-bold text-xs tracking-widest"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors p-2 disabled:opacity-30"
            >
              <span className="material-symbols-outlined">bolt</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrewingAssistant;
