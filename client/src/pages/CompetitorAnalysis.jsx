import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import "../styles/competitor.css";

import CompetitorPieChart from "../components/charts/CompetitorPieChart";
import CompetitorScoreChart from "../components/charts/CompetitorScoreChart";
import CompetitorTable from "../components/CompetitorTable";
// import CompetitorStrength from "../components/CompetitorStrength";

function CompetitorAnalysis() {

    const { analysis } = useContext(ProjectContext);

    if (!analysis) {
        return (
            <div className="competitor-container">
                <h2>Competitor Intelligence</h2>
                <p>Please analyze a project first.</p>
            </div>
        );
    }

    const competitor = analysis.competitor_analysis;
    const competitors = competitor.top_competitors;

    return (

        <div className="competitor-container">

            {/* Header */}

            <div className="competitor-header">

                <h2>AI Competitor Intelligence</h2>

                <p>
                    AI-powered competitive landscape generated
                    using live market intelligence.
                </p>

            </div>

            {/* KPI Cards */}

            <div className="competitor-grid">

                <div className="competitor-card">

                    <span className="card-title">
                        Competition Level
                    </span>

                    <h2>{competitor.competition_level}</h2>

                </div>

                <div className="competitor-card">

                    <span className="card-title">
                        Competitor Score
                    </span>

                    <h2>{competitor.competitor_score}/100</h2>

                </div>

                <div className="competitor-card">

                    <span className="card-title">
                        Industry Competitiveness
                    </span>

                    <h2>{competitor.industry_competitiveness}/100</h2>

                </div>

                <div className="competitor-card">

                    <span className="card-title">
                        Market Concentration
                    </span>

                    <h2>{competitor.market_concentration}</h2>

                </div>

            </div>

            {/* Charts */}

            <div className="charts-grid">

                <div className="chart-card">

                    <h3>Market Share Distribution</h3>

                    <CompetitorPieChart
                        competitors={competitors}
                    />

                </div>

                <div className="chart-card">

                    <h3>AI Competitor Score</h3>

                    <CompetitorScoreChart
                        competitors={competitors}
                    />

                </div>

            </div>

            {/* Competitor Comparison Table */}

            <div className="table-card">

                <h3>Top Competitors</h3>

                <CompetitorTable
                    competitors={competitors}
                />

            </div>

            {/* Strengths & Weaknesses */}

            {/* <div className="strength-section">

                <h3>Competitor Strengths & Weaknesses</h3>

                <CompetitorStrength
                    competitors={competitors}
                />

            </div> */}

            {/* AI Summary */}

            <div className="summary-card">

                <h3>Industry Summary</h3>

                <p>
                    {competitor.summary}
                </p>


                

            </div>

        </div>

    );

}

export default CompetitorAnalysis;