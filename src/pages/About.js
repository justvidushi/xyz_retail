import React from "react";

function About() {
  return (
    <div>
      <h1 className="title">About This Project</h1>
      <p>The XYZ Retail Analytics Portal provides insights into sales and quality performance
        across all XYZ retail outlets in Bangalore. Users can monitor key KPIs, track trends,
        and compare outlet performance for better decision-making.</p>
      <p>
        This project integrates Tableau dashboards with a React-based web application.
      </p>
      <p><strong>Dashboard Descriptions:</strong></p>

      <p><strong>Sales Dashboard:</strong></p>

      <p>Provides overall sales KPIs: Total Revenue, Net Profit, Profit Margin
        Shows trends over time: Monthly Revenue
        Compares outlets’ performance</p>

      <p><strong>Quality Dashboard:</strong></p>

      <p>Provides operational KPIs: Defect Rate, Return Rate, Customer Complaints
        Shows quality trends over time: Defect Trends
        Compares outlet-level quality performance</p>
    </div>
  );
}

export default About;