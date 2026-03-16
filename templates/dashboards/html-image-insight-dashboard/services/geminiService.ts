
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

// Initializing the Google GenAI client using the required named parameter and environment variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function analyzeHTMLContent(html: string): Promise<AnalysisResult> {
  const model = 'gemini-3-flash-preview';
  
  const response = await ai.models.generateContent({
    model,
    contents: `Analyze the following HTML and extract all image links. For each image, provide a suggested alt text, a category (e.g., logo, illustration, background, avatar), and describe the context in which it appears. Also provide a brief summary of the visual assets and 3 recommendations for SEO and accessibility improvements.
    
    HTML:
    ${html}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          images: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                url: { type: Type.STRING },
                altText: { type: Type.STRING },
                category: { type: Type.STRING },
                context: { type: Type.STRING },
              },
              required: ["id", "url", "category"]
            }
          },
          summary: { type: Type.STRING },
          recommendations: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["images", "summary", "recommendations"]
      }
    }
  });

  try {
    // Accessing text content directly via the .text property as per guidelines.
    const text = response.text;
    const result = JSON.parse(text || '{}');
    return result as AnalysisResult;
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    throw new Error("Analysis failed to produce a valid response.");
  }
}
