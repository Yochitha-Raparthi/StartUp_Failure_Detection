import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import "../styles/dashboard.css";

const Dashboard = () => {

    const { analysis, project } = useContext(ProjectContext);

    console.log("Dashboard Analysis:", analysis);

    // ==========================================
    // NO ANALYSIS
    // ==========================================

    if (!analysis) {

        return (
            <div className="dashboard-container">

                <div className="dashboard-header">

                    <h2>Project Dashboard</h2>

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


    return (

        <div className="dashboard-container">


            {/* ==========================================
                HEADER
            ========================================== */}

            <div className="dashboard-header">

                <h2>Project Risk Dashboard</h2>

                <p>
                    AI-powered overview of your startup evaluation
                </p>

            </div>


            {/* ==========================================
                PROJECT SUMMARY
            ========================================== */}

            <div className="project-summary-card">

                <h3>Project Overview</h3>

                <div className="project-summary-grid">

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

                </div>

            </div>


            {/* ==========================================
                OVERALL EVALUATION
            ========================================== */}

            <h3 className="section-title">
                Overall Evaluation
            </h3>

            <div className="dashboard-grid">


                <div className="dashboard-card">

                    <span className="card-title">
                        Overall Score
                    </span>

                    <h2>
                        {dashboard.overall_score ?? 0}%
                    </h2>

                </div>


                <div className="dashboard-card">

                    <span className="card-title">
                        Market Readiness
                    </span>

                    <h2>
                        {dashboard.market_readiness ?? 0}%
                    </h2>

                </div>


                <div className="dashboard-card">

                    <span className="card-title">
                        Innovation Score
                    </span>

                    <h2>
                        {dashboard.innovation_score ?? 0}%
                    </h2>

                </div>


                <div className="dashboard-card">

                    <span className="card-title">
                        Investment Score
                    </span>

                    <h2>
                        {dashboard.investment_score ?? 0}%
                    </h2>

                </div>

            </div>


            {/* ==========================================
                RISK ASSESSMENT
            ========================================== */}

            <h3 className="section-title">
                Risk Assessment
            </h3>

            <div className="risk-grid">


                <div className="risk-card">

                    <span>Overall Risk Score</span>

                    <strong>
                        {risk.risk_score ?? 0}%
                    </strong>

                </div>


                <div className="risk-card">

                    <span>Success Probability</span>

                    <strong>
                        {risk.success_probability ?? 0}%
                    </strong>

                </div>


                <div className="risk-card">

                    <span>Financial Risk</span>

                    <strong>
                        {risk.financial_risk ?? 0}%
                    </strong>

                </div>


                <div className="risk-card">

                    <span>Market Risk</span>

                    <strong>
                        {risk.market_risk ?? 0}%
                    </strong>

                </div>


                <div className="risk-card">

                    <span>Technical Risk</span>

                    <strong>
                        {risk.technical_risk ?? 0}%
                    </strong>

                </div>


                <div className="risk-card">

                    <span>Execution Risk</span>

                    <strong>
                        {risk.execution_risk ?? 0}%
                    </strong>

                </div>

            </div>


            {/* ==========================================
                RISK LEVEL
            ========================================== */}

            <div className="risk-status-card">

                <div>

                    <span className="card-title">
                        Overall Risk Level
                    </span>

                    <h2>
                        {risk.overall_risk || "Not Available"}
                    </h2>

                </div>


                <div>

                    <span className="card-title">
                        Success Probability
                    </span>

                    <h2>
                        {risk.success_probability ?? 0}%
                    </h2>

                </div>

            </div>


            {/* ==========================================
                FEASIBILITY
            ========================================== */}

            <h3 className="section-title">
                Feasibility Assessment
            </h3>

            <div className="feasibility-grid">


                <div className="feasibility-card">

                    <span>Technical Feasibility</span>

                    <strong>
                        {feasibility.technical_feasibility ?? 0}%
                    </strong>

                    <div className="progress-bar">

                        <div
                            style={{
                                width: `${feasibility.technical_feasibility ?? 0}%`
                            }}
                        />

                    </div>

                </div>


                <div className="feasibility-card">

                    <span>Financial Feasibility</span>

                    <strong>
                        {feasibility.financial_feasibility ?? 0}%
                    </strong>

                    <div className="progress-bar">

                        <div
                            style={{
                                width: `${feasibility.financial_feasibility ?? 0}%`
                            }}
                        />

                    </div>

                </div>


                <div className="feasibility-card">

                    <span>Market Feasibility</span>

                    <strong>
                        {feasibility.market_feasibility ?? 0}%
                    </strong>

                    <div className="progress-bar">

                        <div
                            style={{
                                width: `${feasibility.market_feasibility ?? 0}%`
                            }}
                        />

                    </div>

                </div>


                <div className="feasibility-card">

                    <span>Operational Feasibility</span>

                    <strong>
                        {feasibility.operational_feasibility ?? 0}%
                    </strong>

                    <div className="progress-bar">

                        <div
                            style={{
                                width: `${feasibility.operational_feasibility ?? 0}%`
                            }}
                        />

                    </div>

                </div>

            </div>


            <div className="feasibility-status">

                <span>Overall Feasibility</span>

                <strong>
                    {feasibility.overall_feasibility || "Not Available"}
                </strong>

            </div>


            {/* ==========================================
                COMPETITOR SUMMARY
            ========================================== */}

            <h3 className="section-title">
                Competitor Intelligence
            </h3>

            <div className="competitor-summary">

                <div>

                    <span>Competition Level</span>

                    <strong>
                        {competitor.competition_level || "N/A"}
                    </strong>

                </div>

                <div>

                    <span>Competitor Score</span>

                    <strong>
                        {competitor.competitor_score ?? 0}%
                    </strong>

                </div>

                <div>

                    <span>Industry Competitiveness</span>

                    <strong>
                        {competitor.industry_competitiveness ?? 0}%
                    </strong>

                </div>

                <div>

                    <span>Market Concentration</span>

                    <strong>
                        {competitor.market_concentration || "N/A"}
                    </strong>

                </div>

            </div>


            {/* ==========================================
                SWOT
            ========================================== */}

            <h3 className="section-title">
                SWOT Analysis
            </h3>

            <div className="swot-grid">


                <div className="swot-card">

                    <h3>Strengths</h3>

                    <ul>

                        {(swot.strengths || []).map(
                            (item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>


                <div className="swot-card">

                    <h3>Weaknesses</h3>

                    <ul>

                        {(swot.weaknesses || []).map(
                            (item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>


                <div className="swot-card">

                    <h3>Opportunities</h3>

                    <ul>

                        {(swot.opportunities || []).map(
                            (item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>


                <div className="swot-card">

                    <h3>Threats</h3>

                    <ul>

                        {(swot.threats || []).map(
                            (item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )}

                    </ul>

                </div>

            </div>


            {/* ==========================================
                AI RECOMMENDATIONS
            ========================================== */}

            <div className="recommendations-card">

                <h3>AI Recommendations</h3>

                <div className="recommendations-list">

                    {analysis?.recommendations?.length > 0 ? (

                        analysis.recommendations.map(
                            (recommendation, index) => (

                                <div
                                    className="recommendation-item"
                                    key={index}
                                >

                                    <span className="recommendation-number">
                                        {index + 1}
                                    </span>

                                    <p>
                                        {recommendation}
                                    </p>

                                </div>

                            )
                        )

                    ) : (

                        <p className="no-data">
                            No recommendations available.
                        </p>

                    )}

                </div>

            </div>


            {/* ==========================================
                STRATEGIC RECOMMENDATIONS
            ========================================== */}

            <div className="recommendations-card">

                <h3>Strategic Recommendations</h3>

                <div className="strategic-list">

                    {(analysis.strategic_recommendations || []).map(
                        (item, index) => (

                            <div
                                className="strategic-item"
                                key={index}
                            >

                                <span>
                                    {item.priority || "Priority"}
                                </span>

                                <div>

                                    <strong>
                                        {item.area}
                                    </strong>

                                    <p>
                                        {item.recommendation}
                                    </p>

                                    <small>
                                        Action: {item.action}
                                    </small>

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>


        </div>
    );
};

export default Dashboard;