import "./IntroHeaderButton.css";

import React from "react";

function IntroHeaderButton({ href, label, className, id }) {
  return (
    <a
      href={href}
      className={`introHeaderBtn${className ? ` ${className}` : ""}`}
      id={id}
    >
      {label}
      <div className="introHeaderBtnArrow">
        <i className="bi bi-caret-right"></i>
      </div>
    </a>
  );
}

export default IntroHeaderButton;