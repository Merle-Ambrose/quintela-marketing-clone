import "./IntroHeaderButton.css";

import React from "react";

function IntroHeaderButton({ href, label, className }) {
  return (
    <a
      href={href}
      className={`introHeaderBtn${className ? ` ${className}` : ""}`}
    >
      {label}
      <div className="introHeaderBtnArrow">
        <i className="bi bi-chevron-right"></i>
      </div>
    </a>
  );
}

export default IntroHeaderButton;
