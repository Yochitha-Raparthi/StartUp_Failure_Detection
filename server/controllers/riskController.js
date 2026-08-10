const axios = require("axios");

const analyzeRisk = async (req, res) => {

    try {

        const {
            startup_name,
            industry,
            business_model,
            target_market,
            budget,
            description
        } = req.body;

        const prompt = `
You are a startup evaluation expert.

Analyze the following startup.

Startup Name: ${startup_name}

Industry: ${industry}

Business Model: ${business_model}

Target Market: ${target_market}

Budget: ${budget}

Description:
${description}

Return ONLY JSON in this format:

{
  "riskScore": 30,
  "riskLevel": "Low",
  "strengths": [],
  "weaknesses": [],
  "opportunities": [],
  "threats": [],
  "technical": 5,
  "financial": 4,
  "market": 5,
  "operational": 4,
  "overall": "Highly Feasible"
}
`;

        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`
                }
            }
        );

        const content =
            response.data.choices[0].message.content;

        res.json(JSON.parse(content));

    } catch (err) {

        console.log(err);

        res.status(500).json({
            error: "Risk Analysis Failed"
        });

    }

};

module.exports = {
    analyzeRisk
};