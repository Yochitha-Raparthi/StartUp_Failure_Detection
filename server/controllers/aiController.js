const Groq = require("groq-sdk");

const {
    searchStartupInfo
} = require("../services/searchService");

const {
    generateSwot
} = require("./swotController");


const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


exports.generateAnalysis = async (req, res) => {

    try {

        console.log("=================================");
        console.log("AI ANALYSIS STARTED");
        console.log("=================================");


        // ==================================================
        // 1. GET PROJECT DATA
        // ==================================================

        const project = req.body;

        console.log("PROJECT DATA:");
        console.log(project);


        // ==================================================
        // 2. LIVE MARKET RESEARCH
        // ==================================================

        console.log("=================================");
        console.log("STARTING MARKET RESEARCH");
        console.log("=================================");

        const searchResult =
            await searchStartupInfo(project);


        const marketInformation =
            searchResult.results
                .map(item => item.content)
                .join("\n\n");


        console.log("MARKET RESEARCH RECEIVED");


        // ==================================================
        // 3. MAIN AI ANALYSIS
        // ==================================================

        console.log("=================================");
        console.log("GENERATING MAIN AI ANALYSIS");
        console.log("=================================");


        const prompt = `

You are an expert Startup Evaluation AI.

Analyze the following startup using the project information
and live market research.

========================================
PROJECT INFORMATION
========================================

Startup Name:
${project.startupName}

Industry:
${project.industry}

Business Model:
${project.businessModel}

Budget:
₹${project.budget}

Target Market:
${project.targetMarket}

Description:
${project.description}


========================================
LIVE MARKET RESEARCH
========================================

${marketInformation}


========================================
RETURN EXACTLY THIS JSON STRUCTURE
========================================

{
    "market_analysis": {
        "tam": 0,
        "sam": 0,
        "som": 0,
        "growth_rate": 0,
        "market_size": 0,
        "investment_score": 0,
        "competition_score": 0,

        "market_trend": [
            {
                "year": 2022,
                "value": 0
            },
            {
                "year": 2023,
                "value": 0
            },
            {
                "year": 2024,
                "value": 0
            },
            {
                "year": 2025,
                "value": 0
            },
            {
                "year": 2026,
                "value": 0
            }
        ],

        "summary": ""
    },


    "competitor_analysis": {

        "competition_level": "",

        "competitor_score": 0,

        "industry_competitiveness": 0,

        "market_concentration": "",

        "summary": "",

        "top_competitors": [

            {
                "name": "",
                "market_share": 0,
                "funding": 0,
                "revenue": 0,
                "employees": 0,
                "founded": "",
                "website": "",
                "ai_score": 0,

                "strengths": [
                    "",
                    "",
                    ""
                ],

                "weaknesses": [
                    "",
                    ""
                ]
            }

        ],

        "competitive_advantage": ""
    },


    "risk_assessment": {

        "risk_score": 0,

        "overall_risk": "",

        "success_probability": 0,

        "financial_risk": 0,

        "market_risk": 0,

        "technical_risk": 0,

        "execution_risk": 0
    },


    "recommendations": [
        "",
        "",
        "",
        ""
    ],


    "dashboard": {

        "overall_score": 0,

        "market_readiness": 0,

        "innovation_score": 0,

        "investment_score": 0
    }
}


========================================
RULES
========================================

1. Return ONLY valid JSON.

2. Do not return markdown.

3. Do not return explanations.

4. Do not use code fences.

5. Never return null.

6. Never omit any field.

7. All scores must be numbers between 0 and 100.

8. Use realistic estimates when exact data is unavailable.

9. Find real competitors from the provided market research.

10. Return 3-6 real competitors.

11. Do not invent competitor names.

12. Money values must be represented in INR Crores.

13. Market share values should be realistic.

14. risk_score must be between 0 and 100.

15. success_probability must be between 0 and 100.
16. Financial risk, market risk, technical risk, and execution risk must be based specifically on the startup information.
17. Do not use fixed or default risk values.
18. Different startup inputs should produce different risk assessments when their financial, market, technical, or execution conditions differ.
19. risk_score should represent the overall level of the four individual risks.
20. success_probability should decrease as risk_score increases.
21. Do not simply repeat the same risk values for different startups.

`;


        const completion =
    await groq.chat.completions.create({

        model: "openai/gpt-oss-120b",

        temperature: 0.2,

        response_format: {
            type: "json_object"
        },

        messages: [
            {
                role: "system",
                content:
                    "You are a startup evaluation expert. Always return valid JSON."
            },
            {
                role: "user",
                content: prompt
            }
        ]

    });

        // ==================================================
        // 4. PARSE MAIN AI RESPONSE
        // ==================================================

        const content =
            completion.choices[0].message.content;


        console.log("=================================");
        console.log("MAIN AI RESPONSE");
        console.log("=================================");

        console.log(content);


        const analysis =
            JSON.parse(content);
        // ==================================================
// CALCULATE RISK SCORE FROM AI RISK FACTORS
// ==================================================

const risk = analysis.risk_assessment || {};

const financialRisk =
    Number(risk.financial_risk) || 0;

const marketRisk =
    Number(risk.market_risk) || 0;

const technicalRisk =
    Number(risk.technical_risk) || 0;

const executionRisk =
    Number(risk.execution_risk) || 0;


// Calculate average risk

const calculatedRiskScore = Math.round(
    (
        financialRisk +
        marketRisk +
        technicalRisk +
        executionRisk
    ) / 4
);


// Success probability is opposite of risk

const calculatedSuccessProbability =
    100 - calculatedRiskScore;


// Determine overall risk level

let calculatedOverallRisk;

if (calculatedRiskScore <= 30) {

    calculatedOverallRisk = "Low";

}
else if (calculatedRiskScore <= 60) {

    calculatedOverallRisk = "Moderate";

}
else {

    calculatedOverallRisk = "High";

}


// Replace AI-generated values with calculated values

analysis.risk_assessment = {

    ...analysis.risk_assessment,

    risk_score: calculatedRiskScore,

    success_probability:
        calculatedSuccessProbability,

    overall_risk:
        calculatedOverallRisk

};


console.log("=================================");
console.log("CALCULATED RISK ASSESSMENT");
console.log("=================================");

console.log({
    financialRisk,
    marketRisk,
    technicalRisk,
    executionRisk,
    riskScore: calculatedRiskScore,
    successProbability:
        calculatedSuccessProbability,
    overallRisk:
        calculatedOverallRisk
});

        console.log("=================================");
        console.log("MAIN ANALYSIS SECTIONS");
        console.log("=================================");

        console.log(
            Object.keys(analysis)
        );


        // ==================================================
        // 5. GENERATE SWOT + FEASIBILITY
        // ==================================================

        console.log("=================================");
        console.log("GENERATING SWOT + FEASIBILITY");
        console.log("=================================");


        const swotData =
            await generateSwot(project);


        console.log("=================================");
        console.log("SWOT CONTROLLER RESPONSE");
        console.log("=================================");

        console.log(
            JSON.stringify(
                swotData,
                null,
                2
            )
        );


        // ==================================================
        // 6. CHECK SWOT RESPONSE
        // ==================================================

        if (!swotData) {

            throw new Error(
                "generateSwot() returned undefined"
            );

        }


        if (!swotData.swot_analysis) {

            throw new Error(
                "swot_analysis missing from generateSwot()"
            );

        }


        if (!swotData.feasibility_assessment) {

            throw new Error(
                "feasibility_assessment missing from generateSwot()"
            );

        }


        // ==================================================
        // 7. CREATE FINAL RESPONSE
        // ==================================================

        const finalAnalysis = {

            // MAIN AI ANALYSIS
            market_analysis:
                analysis.market_analysis,

            competitor_analysis:
                analysis.competitor_analysis,

            risk_assessment:
                analysis.risk_assessment,

            recommendations:
                analysis.recommendations,

            dashboard:
                analysis.dashboard,


            // SWOT + FEASIBILITY
            swot_analysis:
                swotData.swot_analysis,

            feasibility_assessment:
                swotData.feasibility_assessment

        };


        // ==================================================
        // 8. FINAL CHECK
        // ==================================================

        console.log("=================================");
        console.log("FINAL ANALYSIS SECTIONS");
        console.log("=================================");

        console.log(
            Object.keys(finalAnalysis)
        );


        console.log("=================================");
        console.log("FULL FINAL ANALYSIS");
        console.log("=================================");

        console.log(
            JSON.stringify(
                finalAnalysis,
                null,
                2
            )
        );


        // ==================================================
        // 9. SEND TO FRONTEND
        // ==================================================

        return res.status(200).json(
            finalAnalysis
        );


    } catch (error) {


        // ==================================================
        // ERROR HANDLING
        // ==================================================

        console.error("=================================");
        console.error("AI ANALYSIS ERROR");
        console.error("=================================");

        console.error(error);


        return res.status(500).json({

            success: false,

            message:
                "AI Analysis Failed",

            error:
                error.message

        });

    }

};