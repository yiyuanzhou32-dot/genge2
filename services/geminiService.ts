import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// NOTE: In a real production app, ensure API_KEY is set in environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (
  prompt: string,
  mode: 'chat' | 'translate' | 'summarize',
  context?: string
): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash';
    let finalPrompt = prompt;
    let systemInstruction = "You are a helpful academic and professional assistant for Forestry, Tourism, and National Parks studies.";

    if (mode === 'translate') {
      systemInstruction = "You are a professional translator specializing in academic tourism and forestry terminology. Translate the following text into fluent, academic Chinese (if English) or English (if Chinese). Only provide the translation.";
    } else if (mode === 'summarize') {
      systemInstruction = "You are an expert researcher. Summarize the provided text into clear, concise bullet points, highlighting key policy changes, academic findings, or practical implications for the tourism/forestry industry.";
    }

    if (context) {
      finalPrompt = `Context: ${context}\n\nQuery: ${prompt}`;
    }

    const response = await ai.models.generateContent({
      model: modelId,
      contents: finalPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error processing your request. Please check your API key or network connection.";
  }
};
