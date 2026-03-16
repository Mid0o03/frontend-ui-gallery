
import { GoogleGenAI } from "@google/genai";

export const interpretArt = async (title: string, description: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Tu es un conservateur de musée expert en art Japonais Ukiyo-e. 
      Interprète l'œuvre suivante de manière poétique et brève (environ 50 mots) en te basant sur son titre "${title}" et sa description "${description}". 
      L'interprétation doit lier le traditionnel au moderne.`,
    });
    
    return response.text || "Une œuvre méditative à la croisée des mondes.";
  } catch (error) {
    console.error("Gemini Interpretation Error:", error);
    return "L'essence de cette œuvre dépasse les mots.";
  }
};
