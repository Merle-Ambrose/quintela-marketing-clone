import "./CompetencyBox.css";

import React from "react";

function CompetencyBox({ icon, title, desc }) {
  return (
    <div className="col">
      <div className="modelBox d-flex flex-grow-1">
        <div>
          <div className="modelboxIcon">
            <i className={icon}></i>
          </div>
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CompetencyBox;
