
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingCopy = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a high-converting, professional marketing headline and a 2-sentence description for a landing page section about: ${topic}. Return only JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            description: { type: Type.STRING }
          },
          required: ["headline", "description"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      headline: "Excellence Refined",
      description: "We deliver world-class solutions tailored to your unique business needs, ensuring maximum growth and impact."
    };
  }
};
