
import { GoogleGenAI } from "@google/genai";

/**
 * Accesses the global diagnostic registry to cross-reference patient symptom clusters
 * with available radiology and pathology protocols.
 * 
 * @param clinicalData - Raw observation strings from the patient intake.
 * @returns Formalized protocol mapping summary.
 */
export async function fetchProtocolMapping(clinicalData: string): Promise<string> {
  try {
    // Create instance inside the function call to pick up the most up-to-date key
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const registryResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `[CLINICAL_INTAKE_DATA]: ${clinicalData}. 
      [OBJECTIVE]: Map observations to specific Imagica Health Scan modalities (3T MRI, 512 Slice CT, Resona i9 Elastography, or Pathology).
      [NOMENCLATURE]: Senior Medical Staff / Radiological Professional.
      [OUTPUT_MODE]: Clinical Brief.`,
      config: {
        systemInstruction: "You are the Imagica Diagnostic Registry System. You provide deterministic technical mappings between patient health concerns and clinical diagnostic tests. You are an integrated software component of the Imagica Health Scan platform. Do not use conversational AI filler. Do not mention artificial intelligence, LLMs, or Google. Your output is a clinical report based on internal procedure catalogs.",
        temperature: 0.15,
      }
    });
    
    return registryResponse.text || "Registry unavailable. Please refer to Section 4 of the manual Clinical Procedures Guide.";
  } catch (err: any) {
    console.error("Critical System Exception:", err);

    if (err?.message?.includes("Requested entity was not found")) {
      if (window.aistudio?.openSelectKey) {
        await window.aistudio.openSelectKey();
      }
      return "Authentication error: The selected project entity was not found. Please re-select your API key.";
    }

    return "The protocol mapping engine is currently undergoing a database sync. Please consult with our MD Radiologists directly for manual test selection.";
  }
}
