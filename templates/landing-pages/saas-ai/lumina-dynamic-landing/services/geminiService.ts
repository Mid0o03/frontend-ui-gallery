
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const generateLandingContent = async (industry: string) => {
  if (!API_KEY) return null;
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a high-converting hero headline, subheadline, and 3 feature descriptions for a landing page in the ${industry} industry. Return the result in JSON format with keys: headline, subheadline, features (array of {title, description}).`,
    config: {
      responseMimeType: "application/json"
    }
  });

  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return null;
  }
};
