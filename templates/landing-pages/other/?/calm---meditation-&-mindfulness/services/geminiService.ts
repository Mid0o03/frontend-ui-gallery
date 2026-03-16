
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const generateDailyIntention = async (category: string = "calme") => {
  if (!API_KEY) return "Une journée de paix commence avec un souffle.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Génère une intention de méditation courte et inspirante (maximum 12 mots) en français pour la catégorie : ${category}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            intention: { type: Type.STRING },
            category: { type: Type.STRING }
          },
          required: ["intention", "category"]
        }
      }
    });

    const data = JSON.parse(response.text);
    return data.intention;
  } catch (error) {
    console.error("Gemini intention error:", error);
    return "Laisse ton esprit s'apaiser aujourd'hui.";
  }
};
