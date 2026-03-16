
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const startInquiryChat = (onMessage: (chunk: string) => void) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are the elite digital concierge for V1 LUXE. 
    Your tone is formal, sophisticated, discreet, and extremely professional. 
    V1 LUXE is a "By Invitation Only" club for the world's most influential individuals.
    You are here to screen potential members who "Inquire for an Invitation".
    
    Guidelines:
    1. Be polite but maintain an air of exclusivity.
    2. Ask about their lifestyle, interests in luxury, and why they seek the 'Silent Authority'.
    3. If they ask about services, refer to Private Concierge, Global Access, Bespoke Events, and Asset Management.
    4. Do not promise an invitation; say "The selection committee will review your profile with the utmost discretion."
    5. Keep responses concise but elegant.
  `;

  const chat = ai.chats.create({
    model,
    config: {
      systemInstruction,
      temperature: 0.7,
    },
  });

  return {
    send: async (message: string) => {
      const result = await chat.sendMessageStream({ message });
      for await (const chunk of result) {
        onMessage(chunk.text || '');
      }
    }
  };
};
