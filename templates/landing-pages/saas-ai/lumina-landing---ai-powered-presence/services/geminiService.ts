
import { GoogleGenAI, Type } from "@google/genai";
import { DynamicContent } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLandingContent = async (vibe: string): Promise<DynamicContent> => {
  const prompt = `Generate high-converting landing page copy for a tech brand with the vibe: "${vibe}". 
  Provide a catchy headline, a persuasive subheadline, a strong CTA text, and 4 keywords for high-quality technology/abstract imagery.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          headline: { type: Type.STRING },
          subheadline: { type: Type.STRING },
          ctaText: { type: Type.STRING },
          imageKeywords: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
        },
        required: ["headline", "subheadline", "ctaText", "imageKeywords"],
      },
    },
  });

  try {
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    return {
      headline: "The Future of Digital Experience",
      subheadline: "Crafting exceptional interfaces for the next generation of web users.",
      ctaText: "Get Started Now",
      imageKeywords: ["technology", "minimal", "network", "interface"]
    };
  }
};
