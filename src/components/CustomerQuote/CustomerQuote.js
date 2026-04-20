import "./CustomerQuote.css";

import React from "react";

function CustomerQuote({ className }) {
  return (
    <div className={`quoteFromCustomer${className ? ` ${className}` : ""}`}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-sm-3 quoteLogo">
            <img src="./img/companies/SRHM.png" alt="SHRM Logo" id="srhmLogo" />
          </div>
          <div className="col-sm-8 quoteText">
            <p className="quote">
              Quintela is unique because they are selection science experts who
              build simple, easy-to-use HR technology. Using the Interview Guide
              Platform is highly intuitive—which is a must for HR professionals
              and hiring managers with decreased bandwidth and increased
              responsibilities. One of the best parts of the platform is it
              helps equip interviewers with practical tips on how to structure
              the interview, how to ask probing questions, what to look for and
              how to evaluate. It reduces much of the leg work typically
              required by recruiters to prepare interviewers, while providing
              candidates a more consistent and polished interview experience.
            </p>
            <p className="quoteName">Ashley Miller</p>
            <p className="quoteCredential">
              Director, Digital Products & Services, SHRM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerQuote;
