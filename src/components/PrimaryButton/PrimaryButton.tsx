import "./PrimaryButton.scss";

import React from "react";

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
  return (
    <a href={href} className={`primaryBtn ${className}`}>
      {children}
    </a>
  );
}
