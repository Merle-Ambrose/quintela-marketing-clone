import "./PrimaryButton.scss";

import React from "react";
import { Link } from "react-router-dom";
import isExternalHref from "../../utils/isExternalHref";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({
  href,
  children,
  className = "",
}: PrimaryButtonProps) {
  const externalHref = isExternalHref(href);

  if (externalHref) {
    return (
      <a href={href} className={`primaryBtn ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={`primaryBtn ${className}`}>
      {children}
    </Link>
  );
}
