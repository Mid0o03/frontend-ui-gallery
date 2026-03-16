
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const generateImage = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please ensure it is configured.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    // Iterate through candidates and parts to find the image
    const candidate = response.candidates?.[0];
    if (!candidate) throw new Error("No response from model");

    for (const part of candidate.content.parts) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }

    throw new Error("Image data not found in the response.");
  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    throw error;
  }
};
