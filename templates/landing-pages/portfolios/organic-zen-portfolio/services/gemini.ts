
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCreativeInsight = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are a poetic creative consultant for Organic Zen, a design studio. Your tone is calm, profound, and minimalist. You focus on natural materials, intentionality, and the beauty of imperfection (wabi-sabi). Keep responses concise and inspiring.",
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text || "Nature speaks in silence. Let your craft be its voice.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The path to serenity is found in the simple act of creating.";
  }
};
