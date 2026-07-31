// import { useContext } from "react";
// import "../styles/market.css";
// import { ProjectContext } from "../context/ProjectContext";
// import MarketTrendChart from "../components/charts/MarketTrendChart";
// import TamSamSomChart from "../components/charts/TamSamSomChart";
// import ScoreProgress from "../components/charts/ScoreProgress";

// function MarketAnalysis() {

//     const { analysis } = useContext(ProjectContext);

//     if (!analysis) {

//         return (
//             <div className="market-container">
//                 <h2>Market Analysis</h2>
//                 <p>Please analyze a project first.</p>
//             </div>
//         );

//     }

//     const market = analysis.market_analysis;

//     return (

//         <div className="market-container">

//             <div className="market-header">

//     <h2>Market Analysis</h2>

// </div>

//             <div className="market-grid">

//                 <div className="market-card">
//     <h4>TAM</h4>
//     <p>₹ {market.tam} Cr</p>
//     <div className="market-growth">

// ▲ Growing

// </div>
// </div>

// <div className="market-card">
//     <h4>SAM</h4>
//     <p>₹ {market.sam} Cr</p>
// </div>

// <div className="market-card">
//     <h4>SOM</h4>
//     <p>₹ {market.som} Cr</p>
// </div>

// <div className="market-card">
//     <h4>Growth Rate</h4>
//     <p>{market.growth_rate}%</p>
// </div>

// <div className="market-card">
//     <h4>Market Size</h4>
//     <p>₹ {market.market_size} Cr</p>
// </div>

// <div className="market-card">
//     <h4>Investment Score</h4>
//     <p>{market.investment_score}/100</p>
// </div>

// <div className="market-card">
//     <h4>Competition Score</h4>
//     <p>{market.competition_score}/100</p>
// </div>

// <div className="market-card full-width">
//     <h4>Summary</h4>
//     <p>{market.summary}</p>
// </div>
// <div className="market-chart">

//     <h3>Market Trend (5 Years)</h3>

//     <MarketTrendChart

//         data={market.market_trend}
//         options={market.lineOptions}
//     />

// </div>

// <div className="market-chart">

//     <h3>TAM • SAM • SOM</h3>

//     <TamSamSomChart

//         market={market}

//     />

// </div>

// <div className="market-chart">

//     <h3>Investment Score</h3>

//     <ScoreProgress

//         title="Investment"

//         value={market.investment_score}

//         color="#22C55E"

//     />

//     <ScoreProgress

//         title="Competition"

//         value={market.competition_score}

//         color="#F59E0B"

//     />

// </div>
//             </div>

//         </div>

//     );

// }

// export default MarketAnalysis;




//new code
import { useContext } from "react";
import "../styles/market.css";
import { ProjectContext } from "../context/ProjectContext";

import MarketTrendChart from "../components/charts/MarketTrendChart";
import TamSamSomChart from "../components/charts/TamSamSomChart";
import ScoreProgress from "../components/charts/ScoreProgress";

function MarketAnalysis() {

    const { analysis } = useContext(ProjectContext);

    if (!analysis) {
        return (
            <div className="market-container">
                <h2>Market Analysis</h2>
                <p>Please analyze a project first.</p>
            </div>
        );
    }

    const market = analysis.market_analysis;

    return (

        <div className="market-container">

            {/* Header */}

            <div className="market-header">

                <h2>Market Intelligence</h2>

                

            </div>

            {/* KPI CARDS */}

            <div className="market-grid">

                <div className="market-card">
                    <span className="card-title">TAM</span>
                    <h2>₹ {market.tam} Cr</h2>
                </div>

                <div className="market-card">
                    <span className="card-title">SAM</span>
                    <h2>₹ {market.sam} Cr</h2>
                </div>

                <div className="market-card">
                    <span className="card-title">SOM</span>
                    <h2>₹ {market.som} Cr</h2>
                </div>

                <div className="market-card">
                    <span className="card-title">Growth</span>
                    <h2>{market.growth_rate}%</h2>
                </div>

                <div className="market-card">
                    <span className="card-title">Market Size</span>
                    <h2>₹ {market.market_size} Cr</h2>
                </div>

                <div className="market-card">
                    <span className="card-title">Investment Score</span>
                    <h2>{market.investment_score}/100</h2>
                </div>

            </div>

            {/* CHARTS */}

            <div className="charts-grid">

                <div className="chart-card">

                    <h3>Market Trend (Last 5 Years)</h3>

                    <MarketTrendChart
                        data={market.market_trend}
                    />

                </div>

                <div className="chart-card">

                    <h3>TAM • SAM • SOM</h3>

                    <TamSamSomChart
                        market={market}
                    />

                </div>

            </div>

            {/* SCORE */}

            <div className="score-card">

                <h3>Industry Scores</h3>

                <ScoreProgress
                    title="Investment"
                    value={market.investment_score}
                    color="#22C55E"
                />

                <ScoreProgress
                    title="Competition"
                    value={market.competition_score}
                    color="#F59E0B"
                />

            </div>

            {/* SUMMARY */}

            <div className="summary-card">

                <h3>Summary</h3>

                <p>{market.summary}</p>

            </div>

        </div>

    );

}

export default MarketAnalysis;