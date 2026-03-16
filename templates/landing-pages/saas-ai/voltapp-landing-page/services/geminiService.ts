
import { GoogleGenAI, Type } from "@google/genai";
import { AIPerformanceResponse } from "../types";

const API_KEY = process.env.API_KEY || "";

export const getPerformanceInsights = async (useCase: string): Promise<AIPerformanceResponse> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze performance requirements for the following app use case: "${useCase}". 
    How can VOLTAPP's zero-latency architecture help? 
    Focus on technical bottlenecks and performance solutions.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING, description: "A high-level summary of performance needs." },
          insights: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                latencyImpact: { type: Type.STRING },
                recommendation: { type: Type.STRING },
                voltStrategy: { type: Type.STRING, description: "How VOLTAPP solves this specific problem." }
              },
              required: ["latencyImpact", "recommendation", "voltStrategy"]
            }
          }
        },
        required: ["summary", "insights"]
      }
    }
  });

  try {
    return JSON.parse(response.text) as AIPerformanceResponse;
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    return {
      summary: "Error generating custom insights. Please try again.",
      insights: []
    };
  }
};
