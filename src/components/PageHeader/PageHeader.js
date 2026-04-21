import "./PageHeader.css";

import React from "react";
import IntroHeaderButton from "../IntroHeaderButton/IntroHeaderButton";

function PageHeader({
  bkgClassName,
  heading,
  imgSrc,
  imgAlt,
  description,
  centerContent,
  hideIntroButton,
  isHero,
  ctaHref,
  ctaLabel,
  ctaClassName,
  ctaId,
}) {
  const noImage = !imgSrc;

  const bgClass = bkgClassName || "";
  // build intro button once
  const introButtonElement = !hideIntroButton ? (
    <IntroHeaderButton
      href={ctaHref || "/contact-us"}
      label={ctaLabel || "Schedule a Demo"}
      className={ctaClassName}
      id={ctaId}
    />
  ) : null;

  const heroButtonMarkup = introButtonElement ? (
    <div className="mb-3 text-center">{introButtonElement}</div>
  ) : null;

  const nonHeroButtonMarkup = introButtonElement ? (
    centerContent ? (
      <div className="d-flex justify-content-center">{introButtonElement}</div>
    ) : (
      introButtonElement
    )
  ) : null;

  const heroDescription = description ? (
    <p className="fs-5 fw-bold mb-0 text-center">{description}</p>
  ) : null;

  return (
    <div className={`pageHeader ${isHero ? "heroSection text-center pt-5" : "py-5"}${bgClass ? ` ${bgClass}` : ""}`}>
      <div className={isHero ? "container px-3" : "container"}>
        {isHero ? (
          <>
            <h1 className="fw-bold mb-4">{heading}</h1>
            {heroButtonMarkup}
            {heroDescription}
            <div className="heroImgHangingWrapper">
              {imgSrc && <img src={imgSrc} alt={imgAlt} className="heroImg" />}
            </div>
          </>
        ) : (
          <>
            <h1 className={`pageHeaderHeading text-center${noImage ? " mb-4" : ""}`}>
              {heading}
            </h1>
            <div className="row align-items-center">
              {imgSrc ? (
                <>
                  <div className="col-5">
                    <img src={imgSrc} alt={imgAlt} className="pageHeaderImg" />
                  </div>
                  <div className={`col-7 pageHeaderContent${centerContent ? " text-center" : ""}`}>
                    <p className={centerContent ? "mb-3" : ""}>{description}</p>
                    {nonHeroButtonMarkup}
                  </div>
                </>
              ) : (
                <div className={`col-12 pageHeaderContent${centerContent ? " text-center" : ""}`}>
                  <p className={centerContent ? "mb-3" : ""}>{description}</p>
                  {nonHeroButtonMarkup}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PageHeader;
