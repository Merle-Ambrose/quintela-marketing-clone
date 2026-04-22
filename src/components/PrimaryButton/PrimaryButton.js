import "./PrimaryButton.css";

import React from "react";

function PrimaryButton({ href, children, className = "", id }) {
  return (
    <a href={href} className={`primaryBtn ${className}`} id={id}>
      {children}
    </a>
  );
}

export default PrimaryButton;
