const {
    recommendationGraph
} = require("../langgraph/recommendationGraph");


exports.generateRecommendations = async (req, res) => {

    try {

        console.log("=================================");
        console.log("LANGGRAPH RECOMMENDATION STARTED");
        console.log("=================================");


        const {
            project,
            market_analysis,
            competitor_analysis,
            risk_assessment,
            swot_analysis,
            feasibility_assessment
        } = req.body;


        // ==========================================
        // VALIDATION
        // ==========================================

        if (!project) {

            return res.status(400).json({

                success: false,

                message: "Project data is required"

            });

        }


        console.log("PROJECT:");
        console.log(project);

        console.log("RISK ASSESSMENT:");
        console.log(risk_assessment);

        console.log("SWOT ANALYSIS:");
        console.log(swot_analysis);

        console.log("FEASIBILITY:");
        console.log(feasibility_assessment);


        // ==========================================
        // START LANGGRAPH
        // ==========================================

        console.log("=================================");
        console.log("STARTING LANGGRAPH WORKFLOW");
        console.log("=================================");


        const result =
            await recommendationGraph.invoke({

                project,

                market_analysis,

                competitor_analysis,

                risk_assessment,

                swot_analysis,

                feasibility_assessment

            });


        // ==========================================
        // DISPLAY RESULT
        // ==========================================

        console.log("=================================");
        console.log("LANGGRAPH WORKFLOW COMPLETED");
        console.log("=================================");


        console.log(
            JSON.stringify(
                result,
                null,
                2
            )
        );


        // ==========================================
        // SEND RESPONSE
        // ==========================================

        return res.status(200).json({

            success: true,

            problem_identification:
                result.problem_identification,

            mitigation_strategies:
                result.mitigation_strategies,

            improvement_suggestions:
                result.improvement_suggestions,

            strategic_recommendations:
                result.strategic_recommendations

        });


    } catch (error) {

        console.error(
            "================================="
        );

        console.error(
            "LANGGRAPH RECOMMENDATION ERROR"
        );

        console.error(
            "================================="
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