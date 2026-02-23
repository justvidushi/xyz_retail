import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Quality from "./pages/Quality";
import About from "./pages/About";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/quality" element={<Quality />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;