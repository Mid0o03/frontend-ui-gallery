
import { GoogleGenAI, Type } from "@google/genai";
import { BotanicalInfo } from "../types";

export const getBotanicalInfo = async (query: string): Promise<BotanicalInfo | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide detailed botanical and scientific information for: ${query}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            benefits: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            history: { type: Type.STRING },
            safety: { type: Type.STRING }
          },
          required: ["name", "benefits", "history", "safety"]
        }
      }
    });

    const result = JSON.parse(response.text.trim());
    return result as BotanicalInfo;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
