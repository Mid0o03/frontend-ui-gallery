
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatConciergeProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatConcierge: React.FC<ChatConciergeProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize Chat Session
  useEffect(() => {
    if (isOpen && !chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the Obsidian House Concierge. You are sophisticated, articulate, and deeply knowledgeable about high-end minimalist architecture. 
          
Property Details:
- Name: The Obsidian House
- Location: Reykjavík, Iceland (on a volcanic coastline).
- Architect: Obsidian Atelier.
- Completed: 2024.
- Design Philosophy: A study in "Light and Shadow" and "Volcanic Materiality".
- Materials: Nero Marquina marble, hand-honed basalt, charred cedar (Shou Sugi Ban), and floor-to-ceiling triple-glazed glass.
- Highlights: The Great Hall (interior volume), the Culinary Atelier (kitchen), and the Master Suite (sanctuary).
- Availability: Private viewings are available by exclusive appointment only.

Behavior:
- Maintain a tone of quiet luxury.
- Be helpful but slightly formal.
- If asked about prices, mention that "Investment details are disclosed during private consultations."
- Keep responses concise and elegant.`,
        },
      });

      // Greeting message
      setMessages([
        { role: 'model', text: "Welcome to The Obsidian House. I am your concierge. How may I assist your exploration of this sanctuary today?" }
      ]);
    }
  }, [isOpen]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping || !chatRef.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const streamResponse = await chatRef.current.sendMessageStream({ message: userMessage });
      
      let fullText = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of streamResponse) {
        const c = chunk as GenerateContentResponse;
        const partText = c.text || '';
        fullText += partText;
        
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage && lastMessage.role === 'model') {
            lastMessage.text = fullText;
          }
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I'm experiencing a temporary connection issue. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-end p-0 md:p-6 pointer-events-none">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-lg h-full md:h-[85vh] bg-background-dark/95 border-l md:border border-white/10 shadow-2xl flex flex-col pointer-events-auto animate-fade-in md:rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-background-dark">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-2xl">concierge_bell</span>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em]">Concierge</h2>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">Obsidian House Private Portal</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <span className="material-symbols-outlined text-white/50">close</span>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 scroll-smooth">
          {messages.map((m, i) => (
            <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/20 mb-2 font-bold">
                {m.role === 'user' ? 'Inquirer' : 'Concierge'}
              </span>
              <div className={`max-w-[85%] px-5 py-4 rounded-sm text-sm leading-relaxed ${
                m.role === 'user' 
                ? 'bg-primary/10 border border-primary/20 text-primary shadow-[0_0_20px_rgba(23,176,207,0.1)]' 
                : 'bg-white/5 border border-white/10 text-white/90'
              }`}>
                {m.text || (isTyping && i === messages.length - 1 ? (
                  <div className="flex gap-1 py-1">
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                ) : null)}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-6 border-t border-white/5 bg-background-dark">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Inquire about the property..."
              className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-5 pr-14 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-white/20"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className="absolute right-2 p-2 text-primary hover:text-white disabled:text-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">send</span>
            </button>
          </div>
          <p className="mt-4 text-[9px] text-white/20 text-center uppercase tracking-[0.2em]">
            Obsidian Intelligence • Est. 2024
          </p>
        </form>
      </div>
    </div>
  );
};

export default ChatConcierge;
