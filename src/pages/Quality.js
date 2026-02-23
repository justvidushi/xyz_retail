import React from "react";

function Quality() {
  return (
    <div>
      <h1 className="dashboard">Quality Dashboard</h1>
      <iframe
        src="https://public.tableau.com/views/XYZRetailChainQualityAnalytics/QualityDashboard?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        width="100%"
        height="800"
        title="Quality Dashboard"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      ></iframe>
    </div>
  );
}

export default Quality;