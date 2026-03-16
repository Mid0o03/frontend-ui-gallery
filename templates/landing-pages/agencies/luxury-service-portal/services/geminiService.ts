
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const startConciergeChat = async (serviceTitle: string) => {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are an elite, highly sophisticated concierge agent for a luxury service provider. 
      The user is interested in "${serviceTitle}". 
      Maintain a tone of extreme professionalism, discretion, and elegance. 
      Provide tailored information and ask clarifying questions to understand their specific needs for this level of service. 
      Keep responses concise but impactful.`,
    },
  });
  return chat;
};

export const sendMessage = async (chat: any, message: string) => {
  const response = await chat.sendMessage({ message });
  return response.text;
};
