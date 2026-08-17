import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import "../styles/dashboard.css";

const Dashboard = () => {

    const { analysis } = useContext(ProjectContext);

    console.log("Dashboard Analysis:", analysis);

    // No analysis available
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

    const dashboard = analysis?.dashboard || {};

    return (
        <div className="dashboard-container">

            {/* ================= HEADER ================= */}

            <div className="dashboard-header">

                <h2>Project Dashboard</h2>

                <p>
                    AI-powered overview of your project evaluation
                </p>

            </div>


            {/* ================= KPI CARDS ================= */}

            <div className="dashboard-grid">

                {/* Overall Score */}

                <div className="dashboard-card">

                    <span className="card-title">
                        Overall Score
                    </span>

                    <h2>
                        {dashboard?.overall_score ?? 0}%
                    </h2>

                </div>


                {/* Market Readiness */}

                <div className="dashboard-card">

                    <span className="card-title">
                        Market Readiness
                    </span>

                    <h2>
                        {dashboard?.market_readiness ?? 0}%
                    </h2>

                </div>


                {/* Innovation Score */}

                <div className="dashboard-card">

                    <span className="card-title">
                        Innovation Score
                    </span>

                    <h2>
                        {dashboard?.innovation_score ?? 0}%
                    </h2>

                </div>


                {/* Investment Score */}

                <div className="dashboard-card">

                    <span className="card-title">
                        Investment Score
                    </span>

                    <h2>
                        {dashboard?.investment_score ?? 0}%
                    </h2>

                </div>

            </div>


            {/* ================= RECOMMENDATIONS ================= */}

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

        </div>
    );
};

export default Dashboard;