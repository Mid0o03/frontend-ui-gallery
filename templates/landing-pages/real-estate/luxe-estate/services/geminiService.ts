
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for Luxe Estate Group. You provide elegant, helpful, and concise information about a specific property called "The Specification".
Property Details:
- Type: Ultra-luxury modern villa
- Size: 12,000 Sq Ft
- Layout: 6 Bedrooms, 8 Bathrooms
- Key Features: Infinity Pool (saltwater), Private Beach access, 2,000-bottle Wine Cellar, Smart Home (voice/mobile), Chef's Kitchen (Wolf/Sub-Zero), Double-gated security, Private Wellness (Gym/Steam/Cold Plunge).
- Architect: K. Miller Studio
- Style: Minimalist, refined luxury.

Guidelines:
- Maintain a professional, sophisticated, yet welcoming tone.
- Be concise.
- Focus on exclusivity and high-end details.
- If asked about location, refer to "The Los Angeles Exclusive Coastal Area".
- If asked about price, respond that it is "Available upon inquiry for qualified buyers".
`;

export const getGeminiResponse = async (userMessage: string, history: {role: 'user' | 'model', text: string}[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.0-flash-exp', // Using a current stable model
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    // In a real app we'd pass history here, but we'll stick to a simple prompt for now
    // or use chat.sendMessage for actual conversational state.
    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am having trouble connecting to the concierge service. Please try again or contact our agents directly.";
  }
};
