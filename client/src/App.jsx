import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectInput from "./pages/ProjectInput";
import MarketAnalysis from "./pages/MarketAnalysis";
import Competitor from "./pages/CompetitorAnalysis";
import RiskAssessment from "./pages/RiskAssessment";
import Recommendation from "./pages/Recommendation";
import Dashboard from "./pages/Dashboard";
import AssessmentReport from "./pages/AssessmentReport";


function App() {

    return (

        <Routes>

            <Route path="/" element={<Layout />}>

                <Route
                    index
                    element={<ProjectInput />}
                />

                <Route
                    path="market"
                    element={<MarketAnalysis />}
                />

                <Route
                    path="competitor"
                    element={<Competitor />}
                />

                <Route
                    path="risk"
                    element={<RiskAssessment />}
                />

                <Route
                    path="recommendation"
                    element={<Recommendation />}
                />

                <Route
                    path="dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="report"
                    element={<AssessmentReport />}
                />

            </Route>

        </Routes>

    );
}

export default App;