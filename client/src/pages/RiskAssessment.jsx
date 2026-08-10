import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import "../styles/riskAssessment.css";

const RiskAssessment = () => {

    const { analysis } = useContext(ProjectContext);

    console.log("=================================");
    console.log("RISK ASSESSMENT PAGE");
    console.log("Full Analysis:", analysis);
    console.log("Risk Assessment:", analysis?.risk_assessment);
    console.log("SWOT Analysis:", analysis?.swot_analysis);
    console.log("Feasibility:", analysis?.feasibility_assessment);
    console.log("=================================");


    // =========================================================
    // NO ANALYSIS
    // =========================================================

    if (!analysis) {

        return (
            <div className="risk-container">

                <div className="card">

                    <h2>No AI Analysis Available</h2>

                    <p>
                        Please submit a project from the Project Input
                        page and generate the AI analysis first.
                    </p>

                </div>

            </div>
        );
    }


    // =========================================================
    // RISK ASSESSMENT
    // =========================================================

    const risk = analysis?.risk_assessment || {};


    const successProbability =
        Number(risk?.success_probability ?? 0);


    const financialRisk =
        Number(risk?.financial_risk ?? 0);


    const marketRisk =
        Number(risk?.market_risk ?? 0);


    const technicalRisk =
        Number(risk?.technical_risk ?? 0);


    const executionRisk =
        Number(risk?.execution_risk ?? 0);


    /*
     * Your current backend response does not contain risk_score.
     *
     * Therefore, if risk_score exists, use it.
     * Otherwise calculate the average of the four risk factors.
     */

    const riskScore =
        risk?.risk_score !== undefined &&
        risk?.risk_score !== null
            ? Number(risk.risk_score)
            : Math.round(
                (
                    financialRisk +
                    marketRisk +
                    technicalRisk +
                    executionRisk
                ) / 4
            );


    // =========================================================
    // SWOT
    // =========================================================

    const swot = analysis?.swot_analysis || {};


    const strengths =
        Array.isArray(swot?.strengths)
            ? swot.strengths
            : [];


    const weaknesses =
        Array.isArray(swot?.weaknesses)
            ? swot.weaknesses
            : [];


    const opportunities =
        Array.isArray(swot?.opportunities)
            ? swot.opportunities
            : [];


    const threats =
        Array.isArray(swot?.threats)
            ? swot.threats
            : [];


    // =========================================================
    // FEASIBILITY
    // =========================================================

    const feasibility =
        analysis?.feasibility_assessment || {};


    const technicalFeasibility =
        Number(feasibility?.technical_feasibility ?? 0);


    const financialFeasibility =
        Number(feasibility?.financial_feasibility ?? 0);


    const marketFeasibility =
        Number(feasibility?.market_feasibility ?? 0);


    const operationalFeasibility =
        Number(feasibility?.operational_feasibility ?? 0);


    const overallFeasibility =
        feasibility?.overall_feasibility ||
        "Not Available";


    // =========================================================
    // HELPER FUNCTION FOR SWOT
    // =========================================================

    const renderSwotItems = (items, emptyMessage) => {

        if (!items || items.length === 0) {

            return (
                <li className="empty-item">
                    {emptyMessage}
                </li>
            );

        }

        return items.map((item, index) => (

            <li key={index}>
                {item}
            </li>

        ));

    };


    // =========================================================
    // PAGE
    // =========================================================

    return (

        <div className="risk-container">

            <h1>Risk Assessment</h1>


            {/* =================================================
                OVERALL RISK
            ================================================= */}

            <div className="card">

                <h2>Overall Risk Assessment</h2>

                <div className="risk-score">


                    {/* SCORE CIRCLE */}

                    <div className="circle">

                        <h2>
                            {riskScore}%
                        </h2>

                    </div>


                    {/* RISK INFORMATION */}

                    <div className="risk-summary">

                        <h3>
                            {risk?.overall_risk ||
                                "Not Available"}
                        </h3>

                        <p>
                            Success Probability:
                            {" "}
                            <strong>
                                {successProbability}%
                            </strong>
                        </p>

                    </div>

                </div>

            </div>


            {/* =================================================
                RISK FACTORS
            ================================================= */}

            <div className="card">

                <h2>Risk Factors</h2>


                <div className="risk-grid">


                    {/* FINANCIAL */}

                    <div className="risk-box">

                        <h3>
                            Financial Risk
                        </h3>

                        <p>
                            {financialRisk}%
                        </p>

                    </div>


                    {/* MARKET */}

                    <div className="risk-box">

                        <h3>
                            Market Risk
                        </h3>

                        <p>
                            {marketRisk}%
                        </p>

                    </div>


                    {/* TECHNICAL */}

                    <div className="risk-box">

                        <h3>
                            Technical Risk
                        </h3>

                        <p>
                            {technicalRisk}%
                        </p>

                    </div>


                    {/* EXECUTION */}

                    <div className="risk-box">

                        <h3>
                            Execution Risk
                        </h3>

                        <p>
                            {executionRisk}%
                        </p>

                    </div>

                </div>

            </div>


            {/* =================================================
                SWOT ANALYSIS
            ================================================= */}

            <div className="card">

                <h2>SWOT Analysis</h2>


                <div className="swot-grid">


                    {/* ================= STRENGTHS ================= */}

                    <div className="swot-box">

                        <h3>
                            Strengths
                        </h3>

                        <ul>

                            {renderSwotItems(
                                strengths,
                                "No strengths available"
                            )}

                        </ul>

                    </div>


                    {/* ================= WEAKNESSES ================= */}

                    <div className="swot-box">

                        <h3>
                            Weaknesses
                        </h3>

                        <ul>

                            {renderSwotItems(
                                weaknesses,
                                "No weaknesses available"
                            )}

                        </ul>

                    </div>


                    {/* ================= OPPORTUNITIES ================= */}

                    <div className="swot-box">

                        <h3>
                            Opportunities
                        </h3>

                        <ul>

                            {renderSwotItems(
                                opportunities,
                                "No opportunities available"
                            )}

                        </ul>

                    </div>


                    {/* ================= THREATS ================= */}

                    <div className="swot-box">

                        <h3>
                            Threats
                        </h3>

                        <ul>

                            {renderSwotItems(
                                threats,
                                "No threats available"
                            )}

                        </ul>

                    </div>

                </div>

            </div>


            {/* =================================================
                PROJECT FEASIBILITY
            ================================================= */}

            <div className="card">

                <h2>Project Feasibility</h2>


                <table className="feasibility-table">

                    <tbody>


                        {/* TECHNICAL */}

                        <tr>

                            <td>
                                Technical Feasibility
                            </td>

                            <td>
                                {technicalFeasibility}%
                            </td>

                        </tr>


                        {/* FINANCIAL */}

                        <tr>

                            <td>
                                Financial Feasibility
                            </td>

                            <td>
                                {financialFeasibility}%
                            </td>

                        </tr>


                        {/* MARKET */}

                        <tr>

                            <td>
                                Market Feasibility
                            </td>

                            <td>
                                {marketFeasibility}%
                            </td>

                        </tr>


                        {/* OPERATIONAL */}

                        <tr>

                            <td>
                                Operational Feasibility
                            </td>

                            <td>
                                {operationalFeasibility}%
                            </td>

                        </tr>


                        {/* OVERALL */}

                        <tr>

                            <td>
                                <strong>
                                    Overall Feasibility
                                </strong>
                            </td>

                            <td>
                                <strong>
                                    {overallFeasibility}
                                </strong>
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    );
};

export default RiskAssessment;