
import { GoogleGenAI, Type } from "@google/genai";
import { Recommendation } from "../types";

export const generateRecommendation = async (answers: Record<number, string>): Promise<Recommendation> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  // Format answers for the prompt
  const answersContext = Object.entries(answers)
    .map(([qId, optionId]) => `Question ${qId}: ${optionId}`)
    .join(", ");

  const prompt = `Based on these user quiz answers: ${answersContext}, provide a highly personalized recommendation profile for their business/project. Return the result in French.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A catchy title for the recommendation profile." },
            summary: { type: Type.STRING, description: "A summary of why this is the ideal path." },
            actionPoints: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3 key action steps to take immediately."
            }
          },
          required: ["title", "summary", "actionPoints"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return result as Recommendation;
  } catch (error) {
    console.error("AI Generation Error:", error);
    // Fallback if API fails
    return {
      title: "Votre Plan Stratégique Personnalisé",
      summary: "Basé sur vos réponses, nous recommandons une approche focalisée sur l'optimisation de vos ressources actuelles pour maximiser l'impact.",
      actionPoints: [
        "Auditer vos outils actuels",
        "Prioriser les tâches à haute valeur ajoutée",
        "Définir des KPIs clairs pour le prochain trimestre"
      ]
    };
  }
};
