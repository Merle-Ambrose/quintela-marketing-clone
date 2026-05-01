import "./IntroHeaderButton.scss";

import React from "react";

interface IntroHeaderButtonProps {
  href: string;
  label: string;
  className?: string;
}

export default function IntroHeaderButton({
  href,
  label,
  className,
}: IntroHeaderButtonProps) {
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
