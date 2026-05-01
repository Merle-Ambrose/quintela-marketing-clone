import "./IntroHeaderButton.scss";

import React from "react";
import { Link } from "react-router-dom";
import isExternalHref from "../../utils/isExternalHref";

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
  const externalHref = isExternalHref(href);

  if (externalHref) {
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

  return (
    <Link
      to={href}
      className={`introHeaderBtn${className ? ` ${className}` : ""}`}
    >
      {label}
      <div className="introHeaderBtnArrow">
        <i className="bi bi-chevron-right"></i>
      </div>
    </Link>
  );
}
