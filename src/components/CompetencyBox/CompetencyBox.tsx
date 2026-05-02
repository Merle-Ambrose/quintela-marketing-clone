import "./CompetencyBox.scss";

import React from "react";

interface CompetencyBoxProps {
  icon: string;
  title: string;
  desc: string;
}

// React.memo skips re-rendering CompetencyBox when its props haven't changed.
// CompetencyBox itself has no hover state, but its parent (CompetencyModel) does.
// When that hover state updates, React would normally re-render all 9 CompetencyBox
// instances as children of CompetencyModel, even though none of their props changed.
// React.memo prevents that by bailing out early if the prop comparison passes.
const CompetencyBox = React.memo(function CompetencyBox({
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
});

export default CompetencyBox;
