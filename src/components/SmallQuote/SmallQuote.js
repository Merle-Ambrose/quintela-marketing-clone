import "./SmallQuote.css";

import React from "react";

function SmallQuote({ desc, title, company }) {
  return (
    <div className="text-center py-5" id="digitalInterviewQuote">
      <div className="container">
        <p id="digitalInterviewQuoteDesc">{desc}</p>
        <p id="digitalInterviewQuoteTitle">{title}</p>
        <p id="digitalInterviewQuoteCompany">{company}</p>
      </div>
    </div>
  );
}

export default SmallQuote;
