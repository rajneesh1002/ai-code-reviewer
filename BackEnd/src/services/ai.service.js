const {GoogleGenAI} = require('@google/genai');
const {systemInstruction} = require('../constants/prompts');

const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GEMINI_KEY});


async function generateAIResponse(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            config: {
             systemInstruction: systemInstruction,
                
            },
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error('Error generating AI response:', error);
        throw error;
    }   
}

module.exports = { generateAIResponse };