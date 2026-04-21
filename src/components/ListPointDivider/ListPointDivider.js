import "./ListPointDivider.css";

import React from "react";

function ListPointDivider({ children }) {
  return (
    <div className="listPoint listPointDivider d-grid gap-3">
      <hr className="my-0" />
      <div className="listPointDividerParagraph">{children}</div>
      <hr className="my-0" />
    </div>
  );
}

export default ListPointDivider;
