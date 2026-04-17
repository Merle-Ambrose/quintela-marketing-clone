import React from "react";
import { QUOTE_BACKGROUND_STYLE } from "../constants/backgroundStyles";

function SmallQuote({ desc, title, company }) {
  return (
    <div className="container">
      <div
        className="text-center"
        id="digitalInterviewQuote"
        style={QUOTE_BACKGROUND_STYLE}
      >
        <p id="digitalInterviewQuoteDesc">{desc}</p>
        <p id="digitalInterviewQuoteTitle">{title}</p>
        <p id="digitalInterviewQuoteCompany">{company}</p>
      </div>
    </div>
  );
}

export default SmallQuote;
