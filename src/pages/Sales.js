import React from "react";

function Sales() {
  return (
    <div>
      <h1 className="dashboard">Sales Dashboard</h1>
      <iframe
        src="https://public.tableau.com/views/XYZRetailChainSalesAnalytics/SalesDashboard?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        width="100%"
        height="800"
        title="Sales Dashboard"
      ></iframe>
    </div>
  );
}

export default Sales;