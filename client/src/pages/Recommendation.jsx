import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import "../styles/recommendation.css";

function Recommendation() {

    const { analysis } = useContext(ProjectContext);

    if (!analysis) {
        return (
            <div className="recommendation-container">
                <h2>No analysis available</h2>
                <p>
                    Please submit a project first to generate recommendations.
                </p>
            </div>
        );
    }

    const {
        problem_identification = [],
        mitigation_strategies = [],
        improvement_suggestions = [],
        strategic_recommendations = []
    } = analysis;

    return (

        <div className="recommendation-container">

            <div className="recommendation-header">

                <h2>Strategic Recommendations</h2>

                <p>
                    AI-powered analysis, risk mitigation and strategic
                    recommendations for your startup.
                </p>

            </div>


            {/* ==========================================
                PROBLEM IDENTIFICATION
            ========================================== */}

            <section className="recommendation-section">

                <h3>Problem Identification</h3>

                <div className="recommendation-grid">

                    {problem_identification.map((item, index) => (

                        <div
                            className="recommendation-card"
                            key={index}
                        >

                            <div className="card-top">

                                <span className="area">
                                    {item.area}
                                </span>

                                <span
                                    className={`priority ${item.priority?.toLowerCase()}`}
                                >
                                    {item.priority}
                                </span>

                            </div>

                            <h4>
                                {item.problem}
                            </h4>

                        </div>

                    ))}

                </div>

            </section>


            {/* ==========================================
                MITIGATION STRATEGIES
            ========================================== */}

            <section className="recommendation-section">

                <h3>Risk Mitigation Strategies</h3>

                <div className="recommendation-grid">

                    {mitigation_strategies.map((item, index) => (

                        <div
                            className="recommendation-card"
                            key={index}
                        >

                            <div className="card-top">

                                <span className="area">
                                    {item.area}
                                </span>

                                <span
                                    className={`priority ${item.priority?.toLowerCase()}`}
                                >
                                    {item.priority}
                                </span>

                            </div>

                            <h4>
                                {item.risk}
                            </h4>

                            <p>
                                {item.mitigation}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* ==========================================
                IMPROVEMENT SUGGESTIONS
            ========================================== */}

            <section className="recommendation-section">

                <h3>Improvement Suggestions</h3>

                <div className="recommendation-grid">

                    {improvement_suggestions.map((item, index) => (

                        <div
                            className="recommendation-card"
                            key={index}
                        >

                            <div className="card-top">

                                <span className="area">
                                    {item.area}
                                </span>

                                <span
                                    className={`priority ${item.priority?.toLowerCase()}`}
                                >
                                    {item.priority}
                                </span>

                            </div>

                            <h4>
                                {item.problem}
                            </h4>

                            <p>
                                {item.improvement}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* ==========================================
                STRATEGIC RECOMMENDATIONS
            ========================================== */}

            <section className="recommendation-section">

                <h3>Strategic Recommendations</h3>

                <div className="recommendation-grid">

                    {strategic_recommendations.map((item, index) => (

                        <div
                            className="recommendation-card strategic-card"
                            key={index}
                        >

                            <div className="card-top">

                                <span className="area">
                                    {item.area}
                                </span>

                                <span
                                    className={`priority ${item.priority?.toLowerCase()}`}
                                >
                                    {item.priority}
                                </span>

                            </div>

                            <h4>
                                {item.recommendation}
                            </h4>

                            <p>
                                <strong>Action:</strong>{" "}
                                {item.action}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

        </div>

    );
}

export default Recommendation;