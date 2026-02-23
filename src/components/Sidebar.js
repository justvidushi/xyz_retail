import React from "react";
import { Link } from "react-router-dom";
import logo from "../xyz_Logo.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="XYZ Logo" width="140" height="40"/>
      <h2 className="logo">XYZ Analytics</h2>
      

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/sales">Sales Dashboard</Link></li>
          <li><Link to="/quality">Quality Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;