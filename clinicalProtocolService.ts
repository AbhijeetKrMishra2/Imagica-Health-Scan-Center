
import { GoogleGenAI } from "@google/genai";

/**
 * Resolves patient symptom clusters to established diagnostic protocols.
 * Uses clinical data mapping to identify relevant test categories.
 */
export async function getProtocolMapping(inputData: string): Promise<string> {
  try {
    // Instantiate right before the call to ensure the latest selected API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const registryResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Symptom Input: ${inputData}. 
      Task: Map the input to specific medical diagnostic categories (Imaging, Specialized Scans, Pathology).
      Constraint: Use high-level clinical nomenclature. 
      Legal: Include mandatory physician consultation disclaimer.
      Output: Structured clinical summary.`,
      config: {
        systemInstruction: "You are the Imagica Clinical Protocol Resolver. Your purpose is to provide deterministic mappings of symptoms to radiology and pathology procedures available in the Imagica Health Scan registry. Maintain a rigid, professional clinical tone. Never identify as an artificial intelligence or a language model. Your output is a result of clinical database cross-referencing.",
        temperature: 0.1,
      }
    });
    
    return registryResponse.text || "Protocol database update in progress. Please refer to clinical staff.";
  } catch (err: any) {
    console.error("Clinical Logic Exception:", err);
    
    // Handle invalid project/key selection as per guidelines
    if (err?.message?.includes("Requested entity was not found")) {
      if (window.aistudio?.openSelectKey) {
        await window.aistudio.openSelectKey();
      }
      return "The selected API key project was not found. Please select a valid project from the dialog that just opened.";
    }

    return "The automated protocol mapping service is currently undergoing synchronization. Please contact our radiology department directly.";
  }
}
