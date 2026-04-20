import "./PageHeader.css";
import "../SectionStyles/SectionStyles.css";

import React from "react";

function PageHeader({
  id,
  bkgClassName,
  heading,
  imgSrc,
  imgAlt,
  description,
}) {
  return (
    <div
      className={`pageHeader${bkgClassName ? ` ${bkgClassName}` : ""}`}
      id={id}
    >
      <div className="container">
        <h1 className="pageHeaderHeading text-center">{heading}</h1>
        <div className="row align-items-center">
          <div className="col-5">
            <img src={imgSrc} alt={imgAlt} className="pageHeaderImg" />
          </div>
          <div className="col-7 pageHeaderContent">
            <p>{description}</p>
            <a href="/contact-us">
              <button type="button" className="introHeaderBtn">
                Schedule a Demo
                <div className="introHeaderBtnArrow">
                  <i className="bi bi-caret-right"></i>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
