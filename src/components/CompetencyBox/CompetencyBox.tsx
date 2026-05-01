import "./CompetencyBox.scss";

import React from "react";

interface CompetencyBoxProps {
  icon?: string;
  title?: React.ReactNode;
  desc?: React.ReactNode;
}

export default function CompetencyBox({
  icon,
  title,
  desc,
}: CompetencyBoxProps) {
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
