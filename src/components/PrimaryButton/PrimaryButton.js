import "./PrimaryButton.css";

import React from "react";

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a href={href} className={`primaryBtn ${className}`}>
      {children}
    </a>
  );
}

export default PrimaryButton;
