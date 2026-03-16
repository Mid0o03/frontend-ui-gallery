
import { GoogleGenAI, Type } from "@google/genai";
import { AdvisorResponse } from "../types";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSkinAdvice = async (concerns: string): Promise<AdvisorResponse> => {
  const productList = PRODUCTS.map(p => `${p.name}: ${p.description}`).join('\n');
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `As an expert dermatologist for Terra Glow, analyze these skin concerns: "${concerns}". 
    Based ONLY on our product line:
    ${productList}
    Provide a professional analysis and specific product recommendations.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          analysis: { 
            type: Type.STRING, 
            description: "A professional 2-sentence analysis of the skin concerns." 
          },
          recommendations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                productName: { type: Type.STRING },
                reason: { type: Type.STRING, description: "Why this product fits the user's concern." }
              },
              required: ["productName", "reason"]
            }
          }
        },
        required: ["analysis", "recommendations"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}') as AdvisorResponse;
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    throw new Error("Consultation service temporarily unavailable.");
  }
};
