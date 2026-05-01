import "./CustomerQuote.scss";

import React from "react";
import useIsMobile from "../../utils/useIsMobile";

interface CustomerQuoteProps {
  className?: string;
}

export default function CustomerQuote({ className }: CustomerQuoteProps) {
  const isMobile = useIsMobile();
  return (
    <div className={`quoteFromCustomer ${className ? `${className}` : ""}`}>
      <div className="container">
        <div className="row align-items-start justify-content-center g-4">
          <div className="col-12 col-md-2 text-center text-md-end quoteLogo align-self-start">
            <img
              src="./img/companies/SRHM.png"
              alt="SHRM Logo"
              className="img-fluid pt-1"
            />
          </div>
          <div className="col-12 col-md-10 quoteText">
            <p className="quote">
              {isMobile
                ? '"Using the [Quintela] Interview Guide Platform is highly intuitive—which is a must for HR professionals and hiring managers with decreased bandwidth and increased responsibilities. One of the best parts of the platform is... it reduces much of the leg work typically required by recruiters to prepare interviewers, while providing candidates a more consistent and polished interview experience."'
                : '"Quintela is unique because they are selection science experts who build simple, easy-to-use HR technology. Using the Interview Guide Platform is highly intuitive—which is a must for HR professionals and hiring managers with decreased bandwidth and increased responsibilities. One of the best parts of the platform is it helps equip interviewers with practical tips on how to structure the interview, how to ask probing questions, what to look for and how to evaluate. It reduces much of the leg work typically required by recruiters to prepare interviewers, while providing candidates a more consistent and polished interview experience."'}
            </p>
            <div>
              <p className="quoteName">Ashley Miller</p>
              <p className="quoteCredential">
                Director, Digital Products & Services, SHRM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
