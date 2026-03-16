
import React, { useState, useEffect, useRef } from 'react';
import { Service, ChatMessage } from '../types';
import { startConciergeChat, sendMessage } from '../services/geminiService';

interface ConciergeChatProps {
  service: Service | null;
  onClose: () => void;
}

const ConciergeChat: React.FC<ConciergeChatProps> = ({ service, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (service) {
      const initChat = async () => {
        setIsLoading(true);
        const session = await startConciergeChat(service.title);
        setChatSession(session);
        const welcome = `Good evening. I am your specialized liaison for ${service.title}. How may I assist with your requirements today?`;
        setMessages([{ role: 'assistant', content: welcome }]);
        setIsLoading(false);
      };
      initChat();
    }
  }, [service]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await sendMessage(chatSession, userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I apologize, but I am experiencing a brief connection delay. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-500">
      <div className="w-full max-w-lg bg-[#0d0d0d] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[80vh]">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#17b0cf]/60 tracking-[0.2em] uppercase">{service.level}</span>
            <h3 className="text-white font-light tracking-wide">{service.title} Inquiry</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-grow overflow-y-auto p-6 space-y-6"
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-4 py-3 rounded-lg text-sm font-light leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-[#17b0cf]/10 border border-[#17b0cf]/20 text-white' 
                  : 'bg-white/5 text-gray-300'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 px-4 py-3 rounded-lg flex gap-1">
                <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-6 border-t border-white/5">
          <div className="relative flex items-center">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Speak with your liaison..."
              className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm font-light text-white focus:outline-none focus:border-[#17b0cf]/50 transition-colors pr-12"
            />
            <button 
              onClick={handleSend}
              className="absolute right-3 text-[#17b0cf] hover:text-[#17b0cf]/80 transition-colors"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConciergeChat;
