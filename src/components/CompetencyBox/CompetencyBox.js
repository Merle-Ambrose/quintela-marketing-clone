import "./CompetencyBox.css";

import React from "react";

function CompetencyBox({ icon, title, desc }) {
  return (
    <div className="col">
      <div className="modelBox d-flex flex-grow-1 p-4 m-3">
        <div className="modelboxIcon mb-3">
          <i className={icon}></i>
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default CompetencyBox;
