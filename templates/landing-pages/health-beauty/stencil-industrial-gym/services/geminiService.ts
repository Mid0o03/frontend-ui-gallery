
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateWorkoutAdvice = async (userGoal: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a high-performance industrial gym coach at STENCIL. Provide a short, motivating, and intense workout tip for the goal: ${userGoal}. Keep it under 60 words and maintain a raw, gritty persona.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Forge your own path. No mercy.";
  }
};

export const getPersonalizedPlan = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `As an elite coach at STENCIL, suggest a brief training discipline based on: ${userPrompt}. Use bullet points for exercises.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            discipline: { type: Type.STRING },
            exercises: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            motivation: { type: Type.STRING }
          },
          required: ["title", "discipline", "exercises", "motivation"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
