import "../styles/layout.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />

      <div className="layout">
        <Sidebar />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;