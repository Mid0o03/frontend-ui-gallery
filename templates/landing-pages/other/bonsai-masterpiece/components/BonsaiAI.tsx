
import React, { useState, useRef } from 'react';
import { getBonsaiAdvice, identifyBonsaiFromImage } from '../services/geminiService';
import { ChatMessage } from '../types';
import { siteContent } from '../src/config/content';

const BonsaiAI: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const reply = await getBonsaiAdvice(input);
    setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    setIsLoading(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = (reader.result as string).split(',')[1];
      const userMsg: ChatMessage = { role: 'user', content: "Identify this bonsai for me." };
      setMessages(prev => [...prev, userMsg]);

      const reply = await identifyBonsaiFromImage(base64);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="ai-advice" className="py-32 bg-stone-900 text-white">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-4">
            {siteContent.aiAdvice.title}
          </h2>
          <p className="text-stone-400 max-w-lg mx-auto italic">
            {siteContent.aiAdvice.subtitle}
          </p>
        </div>

        <div className="bg-stone-800 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[600px] border border-stone-700">
          <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-stone-500 opacity-50">
                <span className="material-icons-outlined text-6xl mb-4">auto_awesome</span>
                <p>Start a conversation with the digital spirit of the trees...</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-5 rounded-3xl ${m.role === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-stone-700 text-stone-100'
                  }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-700 p-5 rounded-3xl flex items-center gap-2">
                  <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-stone-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-stone-800/50 backdrop-blur-md border-t border-stone-700">
            <div className="flex gap-4 items-center">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-3 bg-stone-700 hover:bg-stone-600 rounded-full transition-colors flex items-center justify-center shadow-lg"
                title="Identify Bonsai from Image"
              >
                <span className="material-icons-outlined text-primary">camera_alt</span>
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
              />
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="How should I prune my Juniper?"
                  className="w-full bg-stone-700 border-none rounded-full py-4 px-6 focus:ring-2 focus:ring-primary text-sm"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full hover:scale-110 active:scale-95 transition-all shadow-md"
                >
                  <span className="material-icons-outlined text-sm">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonsaiAI;
