const Groq = require("groq-sdk");
const { searchStartupInfo } = require("../services/searchService");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

exports.generateAnalysis = async (req, res) => {

    try {

        const project = req.body;

        // -----------------------------
        // Get Live Market Information
        // -----------------------------
        const searchResult = await searchStartupInfo(project);

        const marketInformation = searchResult.results
            .map((item) => item.content)
            .join("\n\n");

        
             
         const prompt = `
You are an expert Startup Market Intelligence AI.

Analyze the startup using LIVE market research.

PROJECT

Startup Name:
${project.startupName}

Industry:
${project.industry}

Business Model:
${project.businessModel}

Budget:
₹${project.budget} INR

Target Market:
${project.targetMarket}

Description:
${project.description}

==================================================

LIVE MARKET RESEARCH

${marketInformation}

==================================================

IMPORTANT

Use the live market research.

Estimate realistic values if exact values are unavailable.

Return ONLY valid JSON.

{
  "market_analysis": {

    "tam": 0,

    "sam": 0,

    "som": 0,

    "growth_rate": 0,

    "market_size": 0,

    "investment_score": 0,

    "competition_score": 0,

    "market_trend":[
      {"year":2022,"value":0},
      {"year":2023,"value":0},
      {"year":2024,"value":0},
      {"year":2025,"value":0},
      {"year":2026,"value":0}
    ],

    "summary":""
  },

"competitor_analysis":{

"competition_level":"High",

"competitor_score":82,

"industry_competitiveness":78,

"market_concentration":"Moderate",

"summary":"",

"top_competitors":[

{

"name":"",

"market_share":0,

"funding":0,

"revenue":0,

"employees":0,

"founded":"",

"website":"",

"ai_score":0,

"strengths":[

"",

"",

""

],

"weaknesses":[

"",

""

]

}

]

}
Competitor Analysis Instructions
Return market_share values whose total is approximately 100.

The sum of all competitors' market shares should equal 100.

If exact data is unavailable, estimate realistic percentages.

• Search the web for competitors.

• Return the top competitors.

• Return as many competitors as available (3-6).

• Do NOT invent names.

• Estimate:

Market Share

Funding (Crores INR)

Revenue (Crores INR)

Employees

Founded Year

Website

AI Competitive Score (0-100)

• AI Score depends on

Market Share

Innovation

Funding

Brand

Technology

Customer Adoption

Return strengths and weaknesses for every competitor.
Competitive Advantage must never be empty.

Provide 3-5 sentences explaining how this startup can compete against existing competitors.

Consider:

• price

• technology

• AI

• customer experience

• innovation

• scalability

• partnerships

  "risk_assessment":{

      "overall_risk":"",

      "success_probability":0,

      "financial_risk":0,

      "market_risk":0,

      "technical_risk":0,

      "execution_risk":0

  },

  "recommendations":[
      ""
  ],

  "dashboard":{

      "overall_score":0,

      "market_readiness":0,

      "innovation_score":0,

      "investment_score":0

  }

}

Rules

Return ONLY JSON.

No markdown.

No explanation.

No text.

All percentages must be numeric.

All scores must be between 0 and 100.

All money values should be in Indian Rupees (Crores).

`;
        // -----------------------------
        // Call Groq
        // -----------------------------
        const completion = await groq.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            temperature: 0.3,

            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],

            response_format: {
                type: "json_object",
            },
        });

        const aiResponse =
            completion.choices[0].message.content;

        const analysis = JSON.parse(aiResponse);

        res.status(200).json(analysis);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "AI Analysis Failed",
            error: error.message,
        });

    }

};