// import { useContext } from "react";
// import { ProjectContext } from "../context/ProjectContext";
// import "../styles/assessmentReport.css";

// const AssessmentReport = () => {

//     const { analysis, project } = useContext(ProjectContext);


//     // ==========================================
//     // NO ANALYSIS
//     // ==========================================

//     if (!analysis) {

//         return (
//             <div className="report-container">

//                 <div className="report-empty">

//                     <h2>Assessment Report</h2>

//                     <p>
//                         Please submit a project and generate AI analysis first.
//                     </p>

//                 </div>

//             </div>
//         );
//     }


//     // ==========================================
//     // EXTRACT DATA
//     // ==========================================

//     const dashboard = analysis.dashboard || {};
//     const risk = analysis.risk_assessment || {};
//     const feasibility = analysis.feasibility_assessment || {};
//     const competitor = analysis.competitor_analysis || {};
//     const swot = analysis.swot_analysis || {};

//     const problemIdentification =
//         analysis.problem_identification || [];

//     const mitigationStrategies =
//         analysis.mitigation_strategies || [];

//     const improvementSuggestions =
//         analysis.improvement_suggestions || [];

//     const strategicRecommendations =
//         analysis.strategic_recommendations || [];

//     const recommendations =
//         analysis.recommendations || [];


//     return (

//         <div className="report-container">


//             {/* ==========================================
//                 REPORT HEADER
//             ========================================== */}

//             <div className="report-header">

//                 <h2>
//                     Comprehensive Assessment Report
//                 </h2>

//                 <p>
//                     AI-powered evaluation and strategic assessment
//                     of your startup project
//                 </p>

//             </div>


//             {/* ==========================================
//                 PROJECT INFORMATION
//             ========================================== */}

//             <div className="report-section">

//                 <h3>Project Information</h3>

//                 <div className="report-info-grid">

//                     <div>
//                         <span>Startup Name</span>
//                         <strong>
//                             {project?.startupName || "N/A"}
//                         </strong>
//                     </div>

//                     <div>
//                         <span>Industry</span>
//                         <strong>
//                             {project?.industry || "N/A"}
//                         </strong>
//                     </div>

//                     <div>
//                         <span>Business Model</span>
//                         <strong>
//                             {project?.businessModel || "N/A"}
//                         </strong>
//                     </div>

//                     <div>
//                         <span>Target Market</span>
//                         <strong>
//                             {project?.targetMarket || "N/A"}
//                         </strong>
//                     </div>

//                     <div>
//                         <span>Budget</span>
//                         <strong>
//                             {project?.budget || "N/A"}
//                         </strong>
//                     </div>

//                 </div>

//                 {project?.description && (

//                     <div className="description-box">

//                         <span>Project Description</span>

//                         <p>
//                             {project.description}
//                         </p>

//                     </div>

//                 )}

//             </div>


//             {/* ==========================================
//                 EXECUTIVE SUMMARY
//             ========================================== */}

//             <div className="report-section">

//                 <h3>Executive Summary</h3>

//                 <div className="summary-box">

//                     <div>

//                         <span>Overall Score</span>

//                         <strong>
//                             {dashboard.overall_score ?? 0}%
//                         </strong>

//                     </div>

//                     <div>

//                         <span>Overall Risk</span>

//                         <strong>
//                             {risk.overall_risk || "N/A"}
//                         </strong>

//                     </div>

//                     <div>

//                         <span>Success Probability</span>

//                         <strong>
//                             {risk.success_probability ?? 0}%
//                         </strong>

//                     </div>

//                     <div>

//                         <span>Overall Feasibility</span>

//                         <strong>
//                             {feasibility.overall_feasibility || "N/A"}
//                         </strong>

//                     </div>

//                 </div>

//             </div>


//             {/* ==========================================
//                 OVERALL EVALUATION
//             ========================================== */}

//             <div className="report-section">

//                 <h3>Overall Evaluation</h3>

//                 <div className="score-grid">

//                     <div className="score-card">

//                         <span>Overall Score</span>

//                         <strong>
//                             {dashboard.overall_score ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="score-card">

//                         <span>Market Readiness</span>

//                         <strong>
//                             {dashboard.market_readiness ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="score-card">

//                         <span>Innovation Score</span>

//                         <strong>
//                             {dashboard.innovation_score ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="score-card">

//                         <span>Investment Score</span>

//                         <strong>
//                             {dashboard.investment_score ?? 0}%
//                         </strong>

//                     </div>

//                 </div>

//             </div>


//             {/* ==========================================
//                 RISK ASSESSMENT
//             ========================================== */}

//             <div className="report-section">

//                 <h3>Risk Assessment</h3>

//                 <div className="report-grid">

//                     <div className="report-metric">

//                         <span>Risk Score</span>

//                         <strong>
//                             {risk.risk_score ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="report-metric">

//                         <span>Financial Risk</span>

//                         <strong>
//                             {risk.financial_risk ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="report-metric">

//                         <span>Market Risk</span>

//                         <strong>
//                             {risk.market_risk ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="report-metric">

//                         <span>Technical Risk</span>

//                         <strong>
//                             {risk.technical_risk ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="report-metric">

//                         <span>Execution Risk</span>

//                         <strong>
//                             {risk.execution_risk ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="report-metric">

//                         <span>Success Probability</span>

//                         <strong>
//                             {risk.success_probability ?? 0}%
//                         </strong>

//                     </div>

//                 </div>

//                 <div className="status-box">

//                     <span>Overall Risk Level</span>

//                     <strong>
//                         {risk.overall_risk || "N/A"}
//                     </strong>

//                 </div>

//             </div>


//             {/* ==========================================
//                 FEASIBILITY ASSESSMENT
//             ========================================== */}

//             <div className="report-section">

//                 <h3>Feasibility Assessment</h3>

//                 <div className="report-grid">

//                     <div className="report-metric">

//                         <span>Technical Feasibility</span>

//                         <strong>
//                             {feasibility.technical_feasibility ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="report-metric">

//                         <span>Financial Feasibility</span>

//                         <strong>
//                             {feasibility.financial_feasibility ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="report-metric">

//                         <span>Market Feasibility</span>

//                         <strong>
//                             {feasibility.market_feasibility ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="report-metric">

//                         <span>Operational Feasibility</span>

//                         <strong>
//                             {feasibility.operational_feasibility ?? 0}%
//                         </strong>

//                     </div>

//                 </div>

//                 <div className="status-box">

//                     <span>Overall Feasibility</span>

//                     <strong>
//                         {feasibility.overall_feasibility || "N/A"}
//                     </strong>

//                 </div>

//             </div>


//             {/* ==========================================
//                 COMPETITOR INTELLIGENCE
//             ========================================== */}

//             <div className="report-section">

//                 <h3>Competitor Intelligence</h3>

//                 <div className="report-grid">

//                     <div className="report-metric">

//                         <span>Competition Level</span>

//                         <strong>
//                             {competitor.competition_level || "N/A"}
//                         </strong>

//                     </div>

//                     <div className="report-metric">

//                         <span>Competitor Score</span>

//                         <strong>
//                             {competitor.competitor_score ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="report-metric">

//                         <span>Industry Competitiveness</span>

//                         <strong>
//                             {competitor.industry_competitiveness ?? 0}%
//                         </strong>

//                     </div>

//                     <div className="report-metric">

//                         <span>Market Concentration</span>

//                         <strong>
//                             {competitor.market_concentration || "N/A"}
//                         </strong>

//                     </div>

//                 </div>

//             </div>


//             {/* ==========================================
//                 SWOT ANALYSIS
//             ========================================== */}

//             <div className="report-section">

//                 <h3>SWOT Analysis</h3>

//                 <div className="report-swot-grid">


//                     <div className="report-list-card">

//                         <h4>Strengths</h4>

//                         <ul>

//                             {(swot.strengths || []).map(
//                                 (item, index) => (

//                                     <li key={index}>
//                                         {item}
//                                     </li>

//                                 )
//                             )}

//                         </ul>

//                     </div>


//                     <div className="report-list-card">

//                         <h4>Weaknesses</h4>

//                         <ul>

//                             {(swot.weaknesses || []).map(
//                                 (item, index) => (

//                                     <li key={index}>
//                                         {item}
//                                     </li>

//                                 )
//                             )}

//                         </ul>

//                     </div>


//                     <div className="report-list-card">

//                         <h4>Opportunities</h4>

//                         <ul>

//                             {(swot.opportunities || []).map(
//                                 (item, index) => (

//                                     <li key={index}>
//                                         {item}
//                                     </li>

//                                 )
//                             )}

//                         </ul>

//                     </div>


//                     <div className="report-list-card">

//                         <h4>Threats</h4>

//                         <ul>

//                             {(swot.threats || []).map(
//                                 (item, index) => (

//                                     <li key={index}>
//                                         {item}
//                                     </li>

//                                 )
//                             )}

//                         </ul>

//                     </div>

//                 </div>

//             </div>


//             {/* ==========================================
//                 PROBLEMS IDENTIFIED
//             ========================================== */}

//             <div className="report-section">

//                 <h3>Problems Identified</h3>

//                 <div className="report-text-list">

//                     {problemIdentification.length > 0 ? (

//                         problemIdentification.map(
//                             (item, index) => (

//                                 <div
//                                     className="report-list-item"
//                                     key={index}
//                                 >

//                                     <span>
//                                         {index + 1}
//                                     </span>

//                                     <p>
//                                         {item}
//                                     </p>

//                                 </div>

//                             )
//                         )

//                     ) : (

//                         <p className="no-report-data">
//                             No problems identified.
//                         </p>

//                     )}

//                 </div>

//             </div>


//             {/* ==========================================
//                 MITIGATION STRATEGIES
//             ========================================== */}

//             <div className="report-section">

//                 <h3>Mitigation Strategies</h3>

//                 <div className="report-text-list">

//                     {mitigationStrategies.length > 0 ? (

//                         mitigationStrategies.map(
//                             (item, index) => (

//                                 <div
//                                     className="report-list-item"
//                                     key={index}
//                                 >

//                                     <span>
//                                         {index + 1}
//                                     </span>

//                                     <p>
//                                         {item}
//                                     </p>

//                                 </div>

//                             )
//                         )

//                     ) : (

//                         <p className="no-report-data">
//                             No mitigation strategies available.
//                         </p>

//                     )}

//                 </div>

//             </div>


//             {/* ==========================================
//                 IMPROVEMENT SUGGESTIONS
//             ========================================== */}

//             <div className="report-section">

//                 <h3>Improvement Suggestions</h3>

//                 <div className="report-text-list">

//                     {improvementSuggestions.length > 0 ? (

//                         improvementSuggestions.map(
//                             (item, index) => (

//                                 <div
//                                     className="report-list-item"
//                                     key={index}
//                                 >

//                                     <span>
//                                         {index + 1}
//                                     </span>

//                                     <p>
//                                         {item}
//                                     </p>

//                                 </div>

//                             )
//                         )

//                     ) : (

//                         <p className="no-report-data">
//                             No improvement suggestions available.
//                         </p>

//                     )}

//                 </div>

//             </div>


//             {/* ==========================================
//                 AI RECOMMENDATIONS
//             ========================================== */}

//             <div className="report-section">

//                 <h3>AI Recommendations</h3>

//                 <div className="report-text-list">

//                     {recommendations.length > 0 ? (

//                         recommendations.map(
//                             (item, index) => (

//                                 <div
//                                     className="report-list-item"
//                                     key={index}
//                                 >

//                                     <span>
//                                         {index + 1}
//                                     </span>

//                                     <p>
//                                         {item}
//                                     </p>

//                                 </div>

//                             )
//                         )

//                     ) : (

//                         <p className="no-report-data">
//                             No recommendations available.
//                         </p>

//                     )}

//                 </div>

//             </div>


//             {/* ==========================================
//                 STRATEGIC RECOMMENDATIONS
//             ========================================== */}

//             <div className="report-section">

//                 <h3>Strategic Recommendations</h3>

//                 <div className="strategic-report-list">

//                     {strategicRecommendations.length > 0 ? (

//                         strategicRecommendations.map(
//                             (item, index) => (

//                                 <div
//                                     className="strategic-report-item"
//                                     key={index}
//                                 >

//                                     <div className="priority-badge">

//                                         {item.priority || "Priority"}

//                                     </div>

//                                     <div>

//                                         <h4>
//                                             {item.area || "Strategic Area"}
//                                         </h4>

//                                         <p>
//                                             {item.recommendation || ""}
//                                         </p>

//                                         <small>
//                                             Action: {item.action || "N/A"}
//                                         </small>

//                                     </div>

//                                 </div>

//                             )
//                         )

//                     ) : (

//                         <p className="no-report-data">
//                             No strategic recommendations available.
//                         </p>

//                     )}

//                 </div>

//             </div>


//             {/* ==========================================
//                 REPORT FOOTER
//             ========================================== */}

//             <div className="report-footer">

//                 <p>
//                     This assessment is generated using AI-based
//                     market, competitor, risk, feasibility, and
//                     strategic analysis.
//                 </p>

//             </div>


//         </div>
//     );
// };


// export default AssessmentReport;



import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import "../styles/assessmentReport.css";

const AssessmentReport = () => {
    const { analysis, project } = useContext(ProjectContext);

    // ==========================================
    // NO ANALYSIS
    // ==========================================

    if (!analysis) {
        return (
            <div className="report-container">
                <div className="report-empty">
                    <h2>Assessment Report</h2>

                    <p>
                        Please submit a project and generate AI analysis first.
                    </p>
                </div>
            </div>
        );
    }

    // ==========================================
    // EXTRACT DATA
    // ==========================================

    const dashboard = analysis.dashboard || {};
    const risk = analysis.risk_assessment || {};
    const feasibility = analysis.feasibility_assessment || {};
    const competitor = analysis.competitor_analysis || {};
    const swot = analysis.swot_analysis || {};

    const problemIdentification =
        Array.isArray(analysis.problem_identification)
            ? analysis.problem_identification
            : [];

    const mitigationStrategies =
        Array.isArray(analysis.mitigation_strategies)
            ? analysis.mitigation_strategies
            : [];

    const improvementSuggestions =
        Array.isArray(analysis.improvement_suggestions)
            ? analysis.improvement_suggestions
            : [];

    const strategicRecommendations =
        Array.isArray(analysis.strategic_recommendations)
            ? analysis.strategic_recommendations
            : [];

    const recommendations =
        Array.isArray(analysis.recommendations)
            ? analysis.recommendations
            : [];

    return (
        <div className="report-container">

            {/* ==========================================
                REPORT HEADER
            ========================================== */}

            <div className="report-header">

                <h2>
                    Comprehensive Assessment Report
                </h2>

                <p>
                    AI-powered evaluation and strategic assessment
                    of your startup project
                </p>

            </div>


            {/* ==========================================
                PROJECT INFORMATION
            ========================================== */}

            <div className="report-section">

                <h3>Project Information</h3>

                <div className="report-info-grid">

                    <div>
                        <span>Startup Name</span>

                        <strong>
                            {project?.startupName || "N/A"}
                        </strong>
                    </div>

                    <div>
                        <span>Industry</span>

                        <strong>
                            {project?.industry || "N/A"}
                        </strong>
                    </div>

                    <div>
                        <span>Business Model</span>

                        <strong>
                            {project?.businessModel || "N/A"}
                        </strong>
                    </div>

                    <div>
                        <span>Target Market</span>

                        <strong>
                            {project?.targetMarket || "N/A"}
                        </strong>
                    </div>

                    <div>
                        <span>Budget</span>

                        <strong>
                            {project?.budget || "N/A"}
                        </strong>
                    </div>

                </div>


                {project?.description && (

                    <div className="description-box">

                        <span>Project Description</span>

                        <p>
                            {project.description}
                        </p>

                    </div>

                )}

            </div>


            {/* ==========================================
                EXECUTIVE SUMMARY
            ========================================== */}

            <div className="report-section">

                <h3>Executive Summary</h3>

                <div className="summary-box">

                    <div>

                        <span>Overall Score</span>

                        <strong>
                            {dashboard.overall_score ?? 0}%
                        </strong>

                    </div>

                    <div>

                        <span>Overall Risk</span>

                        <strong>
                            {risk.overall_risk || "N/A"}
                        </strong>

                    </div>

                    <div>

                        <span>Success Probability</span>

                        <strong>
                            {risk.success_probability ?? 0}%
                        </strong>

                    </div>

                    <div>

                        <span>Overall Feasibility</span>

                        <strong>
                            {feasibility.overall_feasibility || "N/A"}
                        </strong>

                    </div>

                </div>

            </div>


            {/* ==========================================
                OVERALL EVALUATION
            ========================================== */}

            <div className="report-section">

                <h3>Overall Evaluation</h3>

                <div className="score-grid">

                    <div className="score-card">

                        <span>Overall Score</span>

                        <strong>
                            {dashboard.overall_score ?? 0}%
                        </strong>

                    </div>

                    <div className="score-card">

                        <span>Market Readiness</span>

                        <strong>
                            {dashboard.market_readiness ?? 0}%
                        </strong>

                    </div>

                    <div className="score-card">

                        <span>Innovation Score</span>

                        <strong>
                            {dashboard.innovation_score ?? 0}%
                        </strong>

                    </div>

                    <div className="score-card">

                        <span>Investment Score</span>

                        <strong>
                            {dashboard.investment_score ?? 0}%
                        </strong>

                    </div>

                </div>

            </div>


            {/* ==========================================
                RISK ASSESSMENT
            ========================================== */}

            <div className="report-section">

                <h3>Risk Assessment</h3>

                <div className="report-grid">

                    <div className="report-metric">

                        <span>Risk Score</span>

                        <strong>
                            {risk.risk_score ?? 0}%
                        </strong>

                    </div>

                    <div className="report-metric">

                        <span>Financial Risk</span>

                        <strong>
                            {risk.financial_risk ?? 0}%
                        </strong>

                    </div>

                    <div className="report-metric">

                        <span>Market Risk</span>

                        <strong>
                            {risk.market_risk ?? 0}%
                        </strong>

                    </div>

                    <div className="report-metric">

                        <span>Technical Risk</span>

                        <strong>
                            {risk.technical_risk ?? 0}%
                        </strong>

                    </div>

                    <div className="report-metric">

                        <span>Execution Risk</span>

                        <strong>
                            {risk.execution_risk ?? 0}%
                        </strong>

                    </div>

                    <div className="report-metric">

                        <span>Success Probability</span>

                        <strong>
                            {risk.success_probability ?? 0}%
                        </strong>

                    </div>

                </div>


                <div className="status-box">

                    <span>Overall Risk Level</span>

                    <strong>
                        {risk.overall_risk || "N/A"}
                    </strong>

                </div>

            </div>


            {/* ==========================================
                FEASIBILITY ASSESSMENT
            ========================================== */}

            <div className="report-section">

                <h3>Feasibility Assessment</h3>

                <div className="report-grid">

                    <div className="report-metric">

                        <span>Technical Feasibility</span>

                        <strong>
                            {feasibility.technical_feasibility ?? 0}%
                        </strong>

                    </div>

                    <div className="report-metric">

                        <span>Financial Feasibility</span>

                        <strong>
                            {feasibility.financial_feasibility ?? 0}%
                        </strong>

                    </div>

                    <div className="report-metric">

                        <span>Market Feasibility</span>

                        <strong>
                            {feasibility.market_feasibility ?? 0}%
                        </strong>

                    </div>

                    <div className="report-metric">

                        <span>Operational Feasibility</span>

                        <strong>
                            {feasibility.operational_feasibility ?? 0}%
                        </strong>

                    </div>

                </div>


                <div className="status-box">

                    <span>Overall Feasibility</span>

                    <strong>
                        {feasibility.overall_feasibility || "N/A"}
                    </strong>

                </div>

            </div>


            {/* ==========================================
                COMPETITOR INTELLIGENCE
            ========================================== */}

            <div className="report-section">

                <h3>Competitor Intelligence</h3>

                <div className="report-grid">

                    <div className="report-metric">

                        <span>Competition Level</span>

                        <strong>
                            {competitor.competition_level || "N/A"}
                        </strong>

                    </div>

                    <div className="report-metric">

                        <span>Competitor Score</span>

                        <strong>
                            {competitor.competitor_score ?? 0}%
                        </strong>

                    </div>

                    <div className="report-metric">

                        <span>Industry Competitiveness</span>

                        <strong>
                            {competitor.industry_competitiveness ?? 0}%
                        </strong>

                    </div>

                    <div className="report-metric">

                        <span>Market Concentration</span>

                        <strong>
                            {competitor.market_concentration || "N/A"}
                        </strong>

                    </div>

                </div>

            </div>


            {/* ==========================================
                SWOT ANALYSIS
            ========================================== */}

            <div className="report-section">

                <h3>SWOT Analysis</h3>

                <div className="report-swot-grid">

                    {/* STRENGTHS */}

                    <div className="report-list-card">

                        <h4>Strengths</h4>

                        <ul>

                            {(swot.strengths || []).map(
                                (item, index) => (

                                    <li key={index}>

                                        {typeof item === "object"
                                            ? item.text ||
                                              item.description ||
                                              JSON.stringify(item)
                                            : item}

                                    </li>

                                )
                            )}

                        </ul>

                    </div>


                    {/* WEAKNESSES */}

                    <div className="report-list-card">

                        <h4>Weaknesses</h4>

                        <ul>

                            {(swot.weaknesses || []).map(
                                (item, index) => (

                                    <li key={index}>

                                        {typeof item === "object"
                                            ? item.text ||
                                              item.description ||
                                              JSON.stringify(item)
                                            : item}

                                    </li>

                                )
                            )}

                        </ul>

                    </div>


                    {/* OPPORTUNITIES */}

                    <div className="report-list-card">

                        <h4>Opportunities</h4>

                        <ul>

                            {(swot.opportunities || []).map(
                                (item, index) => (

                                    <li key={index}>

                                        {typeof item === "object"
                                            ? item.text ||
                                              item.description ||
                                              JSON.stringify(item)
                                            : item}

                                    </li>

                                )
                            )}

                        </ul>

                    </div>


                    {/* THREATS */}

                    <div className="report-list-card">

                        <h4>Threats</h4>

                        <ul>

                            {(swot.threats || []).map(
                                (item, index) => (

                                    <li key={index}>

                                        {typeof item === "object"
                                            ? item.text ||
                                              item.description ||
                                              JSON.stringify(item)
                                            : item}

                                    </li>

                                )
                            )}

                        </ul>

                    </div>

                </div>

            </div>


            {/* ==========================================
                PROBLEMS IDENTIFIED
            ========================================== */}

            <div className="report-section">

                <h3>Problems Identified</h3>

                <div className="report-text-list">

                    {problemIdentification.length > 0 ? (

                        problemIdentification.map(
                            (item, index) => (

                                <div
                                    className="report-list-item"
                                    key={index}
                                >

                                    <span>
                                        {index + 1}
                                    </span>


                                    <div>

                                        {typeof item === "object" ? (

                                            <>
                                                <p>
                                                    <strong>Area:</strong>{" "}
                                                    {item.area || "N/A"}
                                                </p>

                                                <p>
                                                    <strong>Problem:</strong>{" "}
                                                    {item.problem || "N/A"}
                                                </p>

                                                <p>
                                                    <strong>Priority:</strong>{" "}
                                                    {item.priority || "N/A"}
                                                </p>
                                            </>

                                        ) : (

                                            <p>
                                                {item}
                                            </p>

                                        )}

                                    </div>

                                </div>

                            )
                        )

                    ) : (

                        <p className="no-report-data">
                            No problems identified.
                        </p>

                    )}

                </div>

            </div>


            {/* ==========================================
                MITIGATION STRATEGIES
            ========================================== */}

            <div className="report-section">

                <h3>Mitigation Strategies</h3>

                <div className="report-text-list">

                    {mitigationStrategies.length > 0 ? (

                        mitigationStrategies.map(
                            (item, index) => (

                                <div
                                    className="report-list-item"
                                    key={index}
                                >

                                    <span>
                                        {index + 1}
                                    </span>


                                    <div>

                                        {typeof item === "object" ? (

                                            <>
                                                <p>
                                                    <strong>Area:</strong>{" "}
                                                    {item.area || "N/A"}
                                                </p>

                                                <p>
                                                    <strong>Mitigation:</strong>{" "}
                                                    {item.mitigation || "N/A"}
                                                </p>

                                                <p>
                                                    <strong>Priority:</strong>{" "}
                                                    {item.priority || "N/A"}
                                                </p>
                                            </>

                                        ) : (

                                            <p>
                                                {item}
                                            </p>

                                        )}

                                    </div>

                                </div>

                            )
                        )

                    ) : (

                        <p className="no-report-data">
                            No mitigation strategies available.
                        </p>

                    )}

                </div>

            </div>


            {/* ==========================================
                IMPROVEMENT SUGGESTIONS
            ========================================== */}

            <div className="report-section">

                <h3>Improvement Suggestions</h3>

                <div className="report-text-list">

                    {improvementSuggestions.length > 0 ? (

                        improvementSuggestions.map(
                            (item, index) => (

                                <div
                                    className="report-list-item"
                                    key={index}
                                >

                                    <span>
                                        {index + 1}
                                    </span>


                                    <div>

                                        {typeof item === "object" ? (

                                            <>
                                                <p>
                                                    <strong>Area:</strong>{" "}
                                                    {item.area || "N/A"}
                                                </p>

                                                <p>
                                                    <strong>Suggestion:</strong>{" "}
                                                    {item.suggestion || "N/A"}
                                                </p>

                                                <p>
                                                    <strong>Priority:</strong>{" "}
                                                    {item.priority || "N/A"}
                                                </p>
                                            </>

                                        ) : (

                                            <p>
                                                {item}
                                            </p>

                                        )}

                                    </div>

                                </div>

                            )
                        )

                    ) : (

                        <p className="no-report-data">
                            No improvement suggestions available.
                        </p>

                    )}

                </div>

            </div>


            {/* ==========================================
                AI RECOMMENDATIONS
            ========================================== */}

            <div className="report-section">

                <h3>AI Recommendations</h3>

                <div className="report-text-list">

                    {recommendations.length > 0 ? (

                        recommendations.map(
                            (item, index) => (

                                <div
                                    className="report-list-item"
                                    key={index}
                                >

                                    <span>
                                        {index + 1}
                                    </span>

                                    <p>
                                        {typeof item === "object"
                                            ? item.recommendation ||
                                              item.text ||
                                              item.description ||
                                              JSON.stringify(item)
                                            : item}
                                    </p>

                                </div>

                            )
                        )

                    ) : (

                        <p className="no-report-data">
                            No recommendations available.
                        </p>

                    )}

                </div>

            </div>


            {/* ==========================================
                STRATEGIC RECOMMENDATIONS
            ========================================== */}

            <div className="report-section">

                <h3>Strategic Recommendations</h3>

                <div className="strategic-report-list">

                    {strategicRecommendations.length > 0 ? (

                        strategicRecommendations.map(
                            (item, index) => (

                                <div
                                    className="strategic-report-item"
                                    key={index}
                                >

                                    <div className="priority-badge">

                                        {item.priority || "Priority"}

                                    </div>


                                    <div>

                                        <h4>
                                            {item.area || "Strategic Area"}
                                        </h4>

                                        <p>
                                            {item.recommendation || ""}
                                        </p>

                                        <small>
                                            Action:{" "}
                                            {item.action || "N/A"}
                                        </small>

                                    </div>

                                </div>

                            )
                        )

                    ) : (

                        <p className="no-report-data">
                            No strategic recommendations available.
                        </p>

                    )}

                </div>

            </div>


            {/* ==========================================
                REPORT FOOTER
            ========================================== */}

            <div className="report-footer">

                <p>
                    This assessment is generated using AI-based
                    market, competitor, risk, feasibility, and
                    strategic analysis.
                </p>

            </div>

        </div>
    );
};


export default AssessmentReport;
