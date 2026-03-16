
import React, { useState, useRef, useEffect } from 'react';
import { startInquiryChat } from '../services/geminiService';
import { Message } from '../types';

interface ConciergeChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConciergeChat: React.FC<ConciergeChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Welcome to V1 Luxe. I am your digital concierge. How may I assist with your inquiry for membership today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      chatRef.current = startInquiryChat((chunk) => {
        setMessages(prev => {
          const last = prev[prev.length - 1];
          if (last.role === 'assistant' && prev.length > 1) {
            return [...prev.slice(0, -1), { ...last, content: last.content + chunk }];
          } else {
            return [...prev, { role: 'assistant', content: chunk }];
          }
        });
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      if (chatRef.current) {
        await chatRef.current.send(userMessage);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I apologize, our secure channel is experiencing a brief interruption. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-[#0d0d0d] border border-silver-dark/30 rounded-sm overflow-hidden flex flex-col h-[70vh] shadow-2xl">
        <div className="p-6 border-b border-silver-dark/20 flex justify-between items-center">
          <div>
            <h2 className="text-xl silver-text font-light italic">Digital Concierge</h2>
            <p className="text-[10px] tracking-widest uppercase text-silver-dark">Secure Inquiry Channel</p>
          </div>
          <button onClick={onClose} className="text-silver-dark hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <p className={`text-[9px] uppercase tracking-widest mb-1 ${m.role === 'user' ? 'text-primary' : 'text-silver-dark'}`}>
                  {m.role === 'user' ? 'Applicant' : 'V1 Concierge'}
                </p>
                <p className={`text-sm leading-relaxed font-light ${m.role === 'user' ? 'text-silver-light italic' : 'text-silver-light'}`}>
                  {m.content}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-primary animate-bounce"></div>
                <div className="w-1 h-1 bg-primary animate-bounce delay-100"></div>
                <div className="w-1 h-1 bg-primary animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-6 border-t border-silver-dark/20">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Your inquiry..."
              className="flex-1 bg-transparent border-b border-silver-dark/30 py-2 text-sm focus:outline-none focus:border-primary transition-colors font-light text-white"
            />
            <button 
              type="submit" 
              disabled={isTyping}
              className="text-primary hover:text-white transition-colors disabled:opacity-50"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConciergeChat;
