const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

exports.generateRecommendations = async (req, res) => {

    try {

        console.log("=================================");
        console.log("STRATEGIC RECOMMENDATION STARTED");
        console.log("=================================");

        const {
            project,
            market_analysis,
            competitor_analysis,
            risk_assessment,
            swot_analysis,
            feasibility_assessment
        } = req.body;

        console.log("Project:", project);
        console.log("Risk Assessment:", risk_assessment);
        console.log("SWOT Analysis:", swot_analysis);
        console.log("Feasibility:", feasibility_assessment);


        // ==========================================
        // VALIDATION
        // ==========================================

        if (!project) {
            return res.status(400).json({
                success: false,
                message: "Project data is required"
            });
        }


        // ==========================================
        // AI PROMPT
        // ==========================================

        const prompt = `

You are an expert startup strategic advisor.

Analyze the startup using the following information.

PROJECT INFORMATION
====================

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


MARKET ANALYSIS
================

${JSON.stringify(market_analysis, null, 2)}


COMPETITOR ANALYSIS
====================

${JSON.stringify(competitor_analysis, null, 2)}


RISK ASSESSMENT
================

${JSON.stringify(risk_assessment, null, 2)}


SWOT ANALYSIS
==============

${JSON.stringify(swot_analysis, null, 2)}


FEASIBILITY ASSESSMENT
=======================

${JSON.stringify(feasibility_assessment, null, 2)}


TASK
====

Identify the most important problems and generate:

1. Risk mitigation strategies
2. Improvement suggestions
3. Strategic recommendations

RETURN ONLY VALID JSON.

Use exactly this structure:

{
    "problem_identification": [
        {
            "area": "",
            "problem": "",
            "priority": ""
        }
    ],

    "mitigation_strategies": [
        {
            "area": "",
            "risk": "",
            "mitigation": "",
            "priority": ""
        }
    ],

    "improvement_suggestions": [
        {
            "area": "",
            "problem": "",
            "improvement": "",
            "priority": ""
        }
    ],

    "strategic_recommendations": [
        {
            "area": "",
            "recommendation": "",
            "action": "",
            "priority": ""
        }
    ]
}


RULES
=====

1. Return ONLY JSON.
2. Do not return markdown.
3. Do not return explanations.
4. Never return null.
5. Never omit required fields.
6. Priority must be one of:
   "High"
   "Medium"
   "Low"
7. Recommendations must be practical and actionable.
8. Recommendations must be based on the provided analysis.
9. Do not give generic recommendations.
10. Focus on the most important problems first.

`;


        // ==========================================
        // GROQ AI
        // ==========================================

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


        // ==========================================
        // PARSE AI RESPONSE
        // ==========================================

        const content =
            completion.choices[0].message.content;

        console.log("AI RECOMMENDATION RESPONSE:");

        console.log(content);


        const result =
            JSON.parse(content);


        // ==========================================
        // VALIDATION
        // ==========================================

        if (!result.problem_identification) {

            throw new Error(
                "problem_identification missing"
            );

        }

        if (!result.mitigation_strategies) {

            throw new Error(
                "mitigation_strategies missing"
            );

        }

        if (!result.improvement_suggestions) {

            throw new Error(
                "improvement_suggestions missing"
            );

        }

        if (!result.strategic_recommendations) {

            throw new Error(
                "strategic_recommendations missing"
            );

        }


        // ==========================================
        // SEND RESPONSE
        // ==========================================

        console.log("=================================");
        console.log("STRATEGIC RECOMMENDATION COMPLETED");
        console.log("=================================");

        console.log(
            JSON.stringify(
                result,
                null,
                2
            )
        );


        return res.status(200).json({

            success: true,

            ...result

        });


    } catch (error) {

        console.error(
            "STRATEGIC RECOMMENDATION ERROR:"
        );

        console.error(error);


        return res.status(500).json({

            success: false,

            message:
                "Strategic recommendation generation failed",

            error:
                error.message

        });

    }

};