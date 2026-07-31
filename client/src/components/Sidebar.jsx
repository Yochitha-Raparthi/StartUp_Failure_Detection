import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        <h2>Startup Failure Detection</h2>
      </div>

      <NavLink to="/">Project Input</NavLink>

      <NavLink to="/market">
        Market Analysis
      </NavLink>

      <NavLink to="/competitor">
        Competitor Intelligence
      </NavLink>

      <NavLink to="/risk">
        Risk Assessment
      </NavLink>

      <NavLink to="/recommendation">
        Recommendations
      </NavLink>

      <NavLink to="/dashboard">
        Dashboard
      </NavLink>

    </div>
  );
}

export default Sidebar;