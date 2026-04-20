import "./PageHeader.css";
import "../SectionStyles/SectionStyles.css";

import React from "react";
import IntroHeaderButton from "../IntroHeaderButton/IntroHeaderButton";

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
      className={`pageHeader py-5${bkgClassName ? ` ${bkgClassName}` : ""}`}
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
            <IntroHeaderButton href="/contact-us" label="Schedule a Demo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
