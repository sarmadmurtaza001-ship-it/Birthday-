
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generatePersonalizedWish(relationshipContext: string): Promise<string[]> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate 5 unique, deeply romantic, and poetic birthday wishes for a partner. The mood should be elegant and heartfelt. Context: ${relationshipContext}. Format them as a list.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text.trim());
    }
    return ["You are the best thing that ever happened to me.", "Happy Birthday, my love!"];
  } catch (error) {
    console.error("Gemini Error:", error);
    return [
      "In the book of my life, you are the most beautiful chapter. Happy Birthday!",
      "Every day with you feels like a gift. Today, I celebrate the greatest gift of all: You.",
      "To the one who holds my heart – may your day be as radiant as your smile.",
      "Happy Birthday to my best friend, my soulmate, and my forever.",
      "Loving you is the easiest thing I've ever done. Cheers to another year of us."
    ];
  }
}
