import "./SmallQuote.scss";

import React from "react";

interface SmallQuoteProps {
  desc: string;
  title: string;
  company: string;
  className?: string;
}

export default function SmallQuote({
  desc,
  title,
  company,
  className = "",
}: SmallQuoteProps) {
  const quoteStyle = {
    "--quote-bg-image": 'url("/img/bkgs/quote.png")',
  } as React.CSSProperties;

  return (
    <section
      className={`digitalInterviewQuote bg-white py-5 d-flex align-items-center ${className}`}
      style={quoteStyle}
    >
      <div className="container text-center">
        <p className="fs-5 fw-bold text-secondary mb-4">{desc}</p>
        <p className="mb-0 text-muted fw-semibold">{title}</p>
        <p className="text-muted small fst-italic">{company}</p>
      </div>
    </section>
  );
}
