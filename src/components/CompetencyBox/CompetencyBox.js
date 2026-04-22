import "./CompetencyBox.css";

import React from "react";

function CompetencyBox({ icon, title, desc }) {
  return (
    <div className="modelBox p-4">
      <div className="modelboxIcon mb-4">
        <i className={icon}></i>
      </div>
      <h5 className="mb-2">{title}</h5>
      <p>{desc}</p>
    </div>
  );
}

export default CompetencyBox;
