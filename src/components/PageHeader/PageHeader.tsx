import "./PageHeader.scss";

import React from "react";
import useIsMobile from "../../utils/useIsMobile";
import IntroHeaderButton from "../IntroHeaderButton/IntroHeaderButton";

interface PageHeaderBaseProps {
  heading: string;
  mobileHeading: string;
  bkgClassName?: string;
  description?: string;
  mobileDescription?: string;
  centerContent?: boolean;
  hideIntroButton?: boolean;
  descClassName?: string;
  isHero?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
  ctaClassName?: string;
}

type PageHeaderImageProps =
  | {
      imgSrc: string;
      imgAlt: string;
    }
  | {
      imgSrc?: undefined;
      imgAlt?: string;
    };

type PageHeaderProps = PageHeaderBaseProps & PageHeaderImageProps;

export default function PageHeader({
  bkgClassName,
  heading,
  mobileHeading,
  imgSrc,
  imgAlt,
  description,
  mobileDescription,
  centerContent,
  hideIntroButton,
  descClassName,
  isHero,
  ctaHref,
  ctaLabel,
  ctaClassName,
}: PageHeaderProps) {
  const noImage = !imgSrc;
  const isMobile = useIsMobile();

  const bgClass = bkgClassName || "";
  const introButtonElement = !hideIntroButton ? (
    <IntroHeaderButton
      href={ctaHref || "/contact-us"}
      label={ctaLabel || "Schedule a Demo"}
      className={ctaClassName}
    />
  ) : null;

  const heroButtonMarkup = introButtonElement ? (
    <div className="mb-3 text-center">{introButtonElement}</div>
  ) : null;
  const nonHeroButtonMarkup = introButtonElement ? (
    <div className="text-center">{introButtonElement}</div>
  ) : null;

  const heroDescription = description ? (
    <p className="fs-5 fw-bold mb-0 text-center">{description}</p>
  ) : null;

  const effectiveHeading = isMobile && mobileHeading ? mobileHeading : heading;
  const effectiveDescription =
    isMobile && mobileDescription ? mobileDescription : description;

  return (
    <div
      className={`pageHeader ${isHero ? "heroSection text-center pt-5" : "py-5"}${bgClass ? ` ${bgClass}` : ""}`}
    >
      <div className={isHero ? "container px-3" : "container"}>
        {isHero ? (
          <>
            <h1 className="fw-bold mb-4">{effectiveHeading}</h1>
            {heroButtonMarkup}
            {heroDescription ? (
              heroDescription
            ) : effectiveDescription ? (
              <p className="fs-5 fw-bold mb-0 text-center">
                {effectiveDescription}
              </p>
            ) : null}
            <div className="heroImgHangingWrapper">
              {imgSrc && (
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className="heroImg"
                  decoding="async"
                  loading="eager"
                />
              )}
            </div>
          </>
        ) : (
          <>
            <h1
              className={`pageHeaderHeading text-center${noImage ? " noImgHeader mb-4" : ""}`}
            >
              {effectiveHeading}
            </h1>
            <div className="row align-items-center">
              {imgSrc ? (
                <>
                  <div className="col-5">
                    <img
                      src={imgSrc}
                      alt={imgAlt}
                      className="pageHeaderImg"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className={`col-7 pageHeaderContent${centerContent ? " text-center" : ""}`}
                  >
                    <p className={centerContent ? "mb-3" : descClassName}>
                      {effectiveDescription}
                    </p>
                    {nonHeroButtonMarkup}
                  </div>
                </>
              ) : (
                <div
                  className={`col-12 pageHeaderContent${centerContent ? " text-center" : ""}`}
                >
                  <p className={centerContent ? "mb-3" : ""}>
                    {effectiveDescription}
                  </p>
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
