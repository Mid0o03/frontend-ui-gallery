
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBonsaiAdvice = async (userQuery: string): Promise<string> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: "You are an expert Bonsai Sensei. Provide poetic yet practical advice on bonsai care, history, and styling. Keep responses concise and inspiring.",
      },
    });
    return response.text || "I am reflecting on the wisdom of the trees. Please ask again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The winds are restless. I cannot hear the trees clearly right now.";
  }
};

export const identifyBonsaiFromImage = async (base64Image: string): Promise<string> => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
          { text: "Identify this bonsai style and species. Provide care tips for this specific plant." }
        ]
      },
      config: {
        systemInstruction: "Identify bonsai styles and species. Provide detailed care advice based on visual cues.",
      }
    });
    return response.text || "I see a beautiful form, but its species remains a mystery to me.";
  } catch (error) {
    console.error("Gemini Image Error:", error);
    return "The image is blurred by the morning mist. Try another view.";
  }
};
