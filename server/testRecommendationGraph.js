require("dotenv").config();

const {
    recommendationGraph
} = require("./langgraph/recommendationGraph");


async function testGraph() {

    try {

        console.log("=================================");
        console.log("LANGGRAPH TEST STARTED");
        console.log("=================================");


        const result =
            await recommendationGraph.invoke({

                project: {
                    startupName: "TechTeach",
                    industry: "Education",
                    businessModel: "SaaS",
                    budget: "3241428",
                    targetMarket: "Students",
                    description:
                        "An AI-powered education platform for students."
                },

                market_analysis: {
                    market_size: 2500,
                    growth_rate: 20
                },

                competitor_analysis: {
                    competition_level: "High",
                    competitor_score: 70
                },

                risk_assessment: {
                    risk_score: 25,
                    overall_risk: "Low",
                    success_probability: 75
                },

                swot_analysis: {
                    strengths: [
                        "AI technology",
                        "Student-focused platform",
                        "SaaS model"
                    ],
                    weaknesses: [
                        "Limited initial funding",
                        "New brand",
                        "Limited users"
                    ],
                    opportunities: [
                        "Growing EdTech market",
                        "AI adoption",
                        "Online education"
                    ],
                    threats: [
                        "Strong competitors",
                        "Technology changes",
                        "User acquisition costs"
                    ]
                },

                feasibility_assessment: {
                    technical_feasibility: 60,
                    financial_feasibility: 40,
                    market_feasibility: 80,
                    operational_feasibility: 50,
                    overall_feasibility:
                        "Moderately Feasible"
                }

            });


        console.log(
            "================================="
        );

        console.log(
            "LANGGRAPH RESULT:"
        );

        console.log(
            JSON.stringify(
                result,
                null,
                2
            )
        );

        console.log(
            "================================="
        );

    } catch (error) {

        console.error(
            "LANGGRAPH ERROR:"
        );

        console.error(error);

    }

}


testGraph();