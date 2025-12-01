import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

// FIX: Initialize GoogleGenAI directly with process.env.API_KEY as per guidelines, removing the redundant apiKey variable and check.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateProjectConsultation = async (userIdea: string, language: 'en' | 'ar' = 'en'): Promise<AIResponse> => {
  const langInstruction = language === 'ar' 
    ? "Respond strictly in Arabic." 
    : "Respond strictly in English.";

  const prompt = `
    You are a senior technical consultant for Apex Synex, a web development agency.
    A potential client has this idea for a web project: "${userIdea}".
    
    ${langInstruction}
    Please provide a professional, encouraging, and technical consultation breakdown.
    Keep the tone professional yet approachable.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: {
              type: Type.STRING,
              description: "A 2-sentence enthusiastic summary of the potential of this idea. In the requested language.",
            },
            estimatedTimeline: {
              type: Type.STRING,
              description: "An estimated range (e.g., '4-6 weeks') for an MVP. In the requested language.",
            },
            recommendedTechStack: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3-4 technologies best suited for this. Technical terms can remain in English if common, otherwise translate.",
            },
            keyFeatures: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 core features essential for the MVP. In the requested language.",
            },
          },
          required: ["summary", "estimatedTimeline", "recommendedTechStack", "keyFeatures"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as AIResponse;
    }
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
