const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});


const generateSwot = async (project) => {

    try {

        console.log("=================================");
        console.log("SWOT + FEASIBILITY GENERATION");
        console.log("=================================");

        console.log("Project received by SWOT:");
        console.log(project);


        const prompt = `

You are an expert startup evaluation and business analysis AI.

Analyze the following startup.

STARTUP INFORMATION
==============================

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


RETURN ONLY THIS JSON:

{
    "swot_analysis": {
        "strengths": [
            "",
            "",
            ""
        ],
        "weaknesses": [
            "",
            "",
            ""
        ],
        "opportunities": [
            "",
            "",
            ""
        ],
        "threats": [
            "",
            "",
            ""
        ]
    },

    "feasibility_assessment": {
        "technical_feasibility": 0,
        "financial_feasibility": 0,
        "market_feasibility": 0,
        "operational_feasibility": 0,
        "overall_feasibility": ""
    }
}


RULES
==============================

1. Return ONLY valid JSON.
2. Do not return markdown.
3. Do not return explanations.
4. Never return null.
5. Never omit any field.
6. All feasibility scores must be between 0 and 100.
7. strengths must contain 3-5 items.
8. weaknesses must contain 3-5 items.
9. opportunities must contain 3-5 items.
10. threats must contain 3-5 items.
11. overall_feasibility must be one of:
    "Highly Feasible"
    "Feasible"
    "Moderately Feasible"
    "Low Feasibility"

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
                    "You are a startup strategic reasoning expert. Always return valid JSON."
            },
            {
                role: "user",
                content: prompt
            }
        ]

    });

        const content =
            completion.choices[0].message.content;


        console.log("SWOT AI RESPONSE:");
        console.log(content);


        const result =
            JSON.parse(content);


        console.log("SWOT RESULT:");
        console.log(
            JSON.stringify(
                result,
                null,
                2
            )
        );


        // ==========================================
        // VALIDATION
        // ==========================================

        if (!result.swot_analysis) {

            throw new Error(
                "swot_analysis missing from AI response"
            );

        }


        if (!result.feasibility_assessment) {

            throw new Error(
                "feasibility_assessment missing from AI response"
            );

        }


        // ==========================================
        // RETURN DATA TO aiController
        // ==========================================

        return {

            swot_analysis:
                result.swot_analysis,

            feasibility_assessment:
                result.feasibility_assessment

        };


    } catch (error) {

        console.error("SWOT GENERATION ERROR:");
        console.error(error);

        throw error;

    }

};


// IMPORTANT
// Export the function itself
module.exports = {
    generateSwot
};