
import { GoogleGenAI } from "@google/genai";

export async function generateDynamicImage(prompt: string): Promise<string> {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  // Using gemini-2.5-flash-image for standard image tasks
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: prompt,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1"
      }
    }
  });

  if (!response.candidates?.[0]?.content?.parts) {
    throw new Error("Failed to generate image parts.");
  }

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
    }
  }

  throw new Error("No image data found in response.");
}
