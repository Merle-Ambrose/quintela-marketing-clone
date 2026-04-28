import "./ListPointDivider.css";

import React from "react";

function ListPointDivider({ children }) {
  return (
    <div className="listPoint listPointDivider d-grid gap-3">
      <div className="listPointDividerParagraph">{children}</div>
    </div>
  );
}

export default ListPointDivider;
