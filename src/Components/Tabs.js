import React from "react";
import Tab from "./Tab";

function Tabs({ tabNames }) {
  return (
    <div className="Tabs">

      {
      tabNames.map((tabName, index) => (
        <Tab index= {index} tabName={tabName} />
      ))
      }

    </div>
  );
}

export default Tabs;
