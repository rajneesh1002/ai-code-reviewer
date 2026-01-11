const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {

    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "Code is required" });
    }
    
    try {

        const aiResponse = await aiService.generateAIResponse(code);  

        res.send(aiResponse);

    } catch (error) {
        console.error("AI Service Error:", error);
        res.status(500).json({ error: "Failed to generate review" });
    }

}