import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { brandingConfig } from '../src/config/branding';
import { contentConfig } from '../src/config/content';

export const MascotAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: contentConfig.assistant.intro }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: contentConfig.assistant.systemInstruction,
        },
      });

      const assistantMsg = response.text || "Sorry, my wings got tangled! Could you say that again?";
      setMessages(prev => [...prev, { role: 'assistant', text: assistantMsg }]);
    } catch (error) {
      console.error(`Error with ${contentConfig.assistant.name}:`, error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Hoot! I'm having a little trouble connecting to the magic forest right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 h-[32rem] bg-white border-4 border-primary rounded-2xl shadow-[0_20px_50px_rgba(127,25,230,0.3)] flex flex-col mb-4 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary p-4 flex items-center justify-between text-white shadow-lg relative z-10">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">smart_toy</span>
              </div>
              <span className="font-black tracking-tight text-lg">{contentConfig.assistant.name}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:rotate-90 transition-transform size-8 flex items-center justify-center hover:bg-white/10 rounded-full"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm font-medium ${msg.role === 'user'
                  ? 'bg-primary text-white rounded-br-none'
                  : 'bg-white border-2 border-gray-100 text-gray-700 rounded-bl-none'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-gray-100 p-3 rounded-2xl animate-pulse">
                  <div className="flex gap-1">
                    <div className="size-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="size-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="size-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={contentConfig.assistant.placeholder}
                className="flex-1 border-2 border-gray-200 rounded-full px-4 py-2 text-sm font-bold focus:border-primary focus:ring-0 outline-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-primary text-white size-10 rounded-full flex items-center justify-center candy-button disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`size-16 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_10px_25px_rgba(127,25,230,0.4)] candy-button group relative transition-all duration-300 ${!isOpen && !isHovered ? 'animate-bounce-subtle' : ''}`}
      >
        <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform duration-300">
          {isOpen ? 'close' : 'chat'}
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 size-5 bg-edu-red border-4 border-white rounded-full shadow-lg"></span>
        )}
      </button>
    </div>
  );
};
