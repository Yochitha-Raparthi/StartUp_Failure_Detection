const {
    StateGraph,
    Annotation,
    START,
    END
} = require("@langchain/langgraph");

const {
    identifyProblems,
    generateMitigation,
    generateImprovements,
    generateStrategicRecommendations
} = require("./recommendationNodes");


// ==========================================
// LANGGRAPH STATE
// ==========================================

const RecommendationState = Annotation.Root({

    // Original startup information
    project: Annotation(),

    // Existing analysis
    market_analysis: Annotation(),
    competitor_analysis: Annotation(),
    risk_assessment: Annotation(),
    swot_analysis: Annotation(),
    feasibility_assessment: Annotation(),

    // LangGraph generated results
    problem_identification: Annotation(),
    mitigation_strategies: Annotation(),
    improvement_suggestions: Annotation(),
    strategic_recommendations: Annotation()

});


// ==========================================
// CREATE GRAPH
// ==========================================

const workflow = new StateGraph(
    RecommendationState
);


// ==========================================
// ADD NODES
// ==========================================

workflow.addNode(
    "identifyProblems",
    identifyProblems
);

workflow.addNode(
    "generateMitigation",
    generateMitigation
);

workflow.addNode(
    "generateImprovements",
    generateImprovements
);

workflow.addNode(
    "generateStrategicRecommendations",
    generateStrategicRecommendations
);


// ==========================================
// CONNECT NODES
// ==========================================

workflow.addEdge(
    START,
    "identifyProblems"
);

workflow.addEdge(
    "identifyProblems",
    "generateMitigation"
);

workflow.addEdge(
    "generateMitigation",
    "generateImprovements"
);

workflow.addEdge(
    "generateImprovements",
    "generateStrategicRecommendations"
);

workflow.addEdge(
    "generateStrategicRecommendations",
    END
);


// ==========================================
// COMPILE GRAPH
// ==========================================

const recommendationGraph =
    workflow.compile();


// ==========================================
// EXPORT
// ==========================================

module.exports = {
    recommendationGraph
};