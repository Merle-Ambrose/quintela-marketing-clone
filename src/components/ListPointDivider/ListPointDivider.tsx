import "./ListPointDivider.scss";

import React from "react";

interface ListPointDividerProps {
  children?: React.ReactNode;
}

export default function ListPointDivider({ children }: ListPointDividerProps) {
  return (
    <div className="listPoint listPointDivider d-grid gap-3">
      <div className="listPointDividerParagraph">{children}</div>
    </div>
  );
}
