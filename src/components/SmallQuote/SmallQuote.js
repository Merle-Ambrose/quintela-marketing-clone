import "./SmallQuote.css";

import React from "react";

function SmallQuote({ desc, title, company, className = "" }) {
  return (
    <section className={`digitalInterviewQuote bg-white py-5 d-flex align-items-center ${className}`}>
      <div className="container text-center">
        <p className="fs-5 fw-bold text-secondary mb-4">{desc}</p>
        <p className="mb-0 text-muted fw-semibold">{title}</p>
        <p className="text-muted small fst-italic">{company}</p>
      </div>
    </section>
  );
}

export default SmallQuote;
