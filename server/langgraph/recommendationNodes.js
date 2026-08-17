const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});


// ==========================================
// 1. IDENTIFY PROBLEMS
// ==========================================

async function identifyProblems(state) {

    console.log("LANGGRAPH NODE: IDENTIFY PROBLEMS");

    const prompt = `
You are a startup risk analysis expert.

Analyze the following startup information.

PROJECT:
${JSON.stringify(state.project, null, 2)}

RISK ASSESSMENT:
${JSON.stringify(state.risk_assessment, null, 2)}

SWOT:
${JSON.stringify(state.swot_analysis, null, 2)}

FEASIBILITY:
${JSON.stringify(state.feasibility_assessment, null, 2)}

Identify the most important problems affecting the startup.

Return ONLY valid JSON.

{
    "problem_identification": [
        {
            "area": "",
            "problem": "",
            "priority": ""
        }
    ]
}

Priority must be:
"High"
"Medium"
"Low"
`;

    const completion = await groq.chat.completions.create({

        model: "openai/gpt-oss-120b",

        temperature: 0.2,

        response_format: {
            type: "json_object"
        },

        messages: [
            {
                role: "system",
                content:
                    "You are a startup problem identification expert. Return valid JSON only."
            },
            {
                role: "user",
                content: prompt
            }
        ]

    });

    const result =
        JSON.parse(
            completion.choices[0].message.content
        );

    return {
        problem_identification:
            result.problem_identification
    };
}


// ==========================================
// 2. GENERATE MITIGATION STRATEGIES
// ==========================================

async function generateMitigation(state) {

    console.log("LANGGRAPH NODE: MITIGATION STRATEGIES");

    const prompt = `
You are a startup risk mitigation expert.

PROJECT:
${JSON.stringify(state.project, null, 2)}

IDENTIFIED PROBLEMS:
${JSON.stringify(state.problem_identification, null, 2)}

RISK ASSESSMENT:
${JSON.stringify(state.risk_assessment, null, 2)}

Generate practical risk mitigation strategies.

Return ONLY valid JSON.

{
    "mitigation_strategies": [
        {
            "area": "",
            "risk": "",
            "mitigation": "",
            "priority": ""
        }
    ]
}

Priority must be:
"High"
"Medium"
"Low"
`;

    const completion = await groq.chat.completions.create({

        model: "openai/gpt-oss-120b",

        temperature: 0.2,

        response_format: {
            type: "json_object"
        },

        messages: [
            {
                role: "system",
                content:
                    "You are a startup risk mitigation expert. Return valid JSON only."
            },
            {
                role: "user",
                content: prompt
            }
        ]

    });

    const result =
        JSON.parse(
            completion.choices[0].message.content
        );

    return {
        mitigation_strategies:
            result.mitigation_strategies
    };
}


// ==========================================
// 3. IMPROVEMENT SUGGESTIONS
// ==========================================

async function generateImprovements(state) {

    console.log("LANGGRAPH NODE: IMPROVEMENT SUGGESTIONS");

    const prompt = `
You are a startup improvement strategist.

PROJECT:
${JSON.stringify(state.project, null, 2)}

PROBLEMS:
${JSON.stringify(state.problem_identification, null, 2)}

SWOT:
${JSON.stringify(state.swot_analysis, null, 2)}

FEASIBILITY:
${JSON.stringify(state.feasibility_assessment, null, 2)}

Generate practical improvements for the startup.

Return ONLY valid JSON.

{
    "improvement_suggestions": [
        {
            "area": "",
            "problem": "",
            "improvement": "",
            "priority": ""
        }
    ]
}

Priority must be:
"High"
"Medium"
"Low"
`;

    const completion = await groq.chat.completions.create({

        model: "openai/gpt-oss-120b",

        temperature: 0.2,

        response_format: {
            type: "json_object"
        },

        messages: [
            {
                role: "system",
                content:
                    "You are a startup improvement expert. Return valid JSON only."
            },
            {
                role: "user",
                content: prompt
            }
        ]

    });

    const result =
        JSON.parse(
            completion.choices[0].message.content
        );

    return {
        improvement_suggestions:
            result.improvement_suggestions
    };
}


// ==========================================
// 4. STRATEGIC RECOMMENDATIONS
// ==========================================

async function generateStrategicRecommendations(state) {

    console.log(
        "LANGGRAPH NODE: STRATEGIC RECOMMENDATIONS"
    );

    const prompt = `
You are an expert startup strategic advisor.

PROJECT:
${JSON.stringify(state.project, null, 2)}

PROBLEMS:
${JSON.stringify(state.problem_identification, null, 2)}

MITIGATION STRATEGIES:
${JSON.stringify(state.mitigation_strategies, null, 2)}

IMPROVEMENTS:
${JSON.stringify(state.improvement_suggestions, null, 2)}

Generate final strategic recommendations.

Return ONLY valid JSON.

{
    "strategic_recommendations": [
        {
            "area": "",
            "recommendation": "",
            "action": "",
            "priority": ""
        }
    ]
}

Priority must be:
"High"
"Medium"
"Low"
`;

    const completion = await groq.chat.completions.create({

        model: "openai/gpt-oss-120b",

        temperature: 0.2,

        response_format: {
            type: "json_object"
        },

        messages: [
            {
                role: "system",
                content:
                    "You are a startup strategic advisor. Return valid JSON only."
            },
            {
                role: "user",
                content: prompt
            }
        ]

    });

    const result =
        JSON.parse(
            completion.choices[0].message.content
        );

    return {
        strategic_recommendations:
            result.strategic_recommendations
    };
}


module.exports = {

    identifyProblems,

    generateMitigation,

    generateImprovements,

    generateStrategicRecommendations

};