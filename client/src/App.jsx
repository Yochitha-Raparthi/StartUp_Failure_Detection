// // import Dashboard from "./pages/Dashboard";

// // function App() {
// //   return <Dashboard />;
// // }

// // export default App;
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

// import Layout from "./components/Layout";

// import ProjectInput from "./pages/ProjectInput";
// import MarketAnalysis from "./pages/MarketAnalysis";
// import Competitor from "./pages/Competitor";
// import RiskAssessment from "./pages/RiskAssessment";
// import Recommendation from "./pages/Recommendation";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <BrowserRouter>

//       <Routes>

//         <Route path="/" element={<Layout />}>

//           <Route index element={<ProjectInput />} />

//           <Route path="market" element={<MarketAnalysis />} />

//           <Route path="competitor" element={<Competitor />} />

//           <Route path="risk" element={<RiskAssessment />} />

//           <Route
//             path="recommendation"
//             element={<Recommendation />}
//           />

//           <Route
//             path="dashboard"
//             element={<Dashboard />}
//           />

//         </Route>

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./components/Layout";

import ProjectInput from "./pages/ProjectInput";
import MarketAnalysis from "./pages/MarketAnalysis";
import Competitor from "./pages/CompetitorAnalysis";
import RiskAssessment from "./pages/RiskAssessment";
import Recommendation from "./pages/Recommendation";
import Dashboard from "./pages/Dashboard";

function App() {
  return (

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<ProjectInput />} />

          <Route path="market" element={<MarketAnalysis />} />

          <Route path="competitor" element={<Competitor />} />

          <Route path="risk" element={<RiskAssessment />} />

          <Route
            path="recommendation"
            element={<Recommendation />}
          />

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

        </Route>

      </Routes>

  );
}

export default App;