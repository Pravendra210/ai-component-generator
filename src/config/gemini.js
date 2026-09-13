import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const generateComponent = async(prompt, framework) => {
    const fullPrompt = `
You are an expert frontend developer and UI designer.

Generate a complete UI component based on the user's request.

Selected framework:
${framework}

User request:
${prompt}

Requirements:
- Create a modern and attractive UI.
- Make it fully responsive.
- Generate clean, production-quality code.
- Use appropriate HTML and CSS for the selected framework.
- If HTML + Tailwind CSS is selected, use Tailwind classes.
- If HTML + Bootstrap is selected, use Bootstrap classes.
- If HTML + CSS is selected, use normal CSS.
- Return ONLY the code.
- Do not use markdown code fences.
- Do not add explanations before or after the code.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: fullPrompt,
    });

    return response.text;
};