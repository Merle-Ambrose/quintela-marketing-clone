import React from "react";
import FeaturedArticleCard from "../components/FeaturedArticleCard";
import { CMP_BACKGROUND_STYLE } from "../constants/backgroundStyles";
import { FEATURED_ARTICLES } from "../constants/psychobabbleConstants";

function PsychobabbleZone() {
  return (
    <>
      {/* Page Introduction */}
      <div className="digitalInterviewQuote">
        <div
          className="midnightBackground"
          id="psychModelHeader"
          style={CMP_BACKGROUND_STYLE}
        >
          <h1 className="introHeaderHeading text-center">
            Psychobabble-Free Zone
          </h1>
          <div className="container">
            <div className="text-center">
              <p>
                The word “science” has been so overused in Talent Management
                that it’s lost its meaning. When you hear it, you probably tune
                out just like we do. It is a shame, because there is a lot of
                value once you get past the BS. That’s why we decided to offer a
                psychobabble-free zone where we discuss the “science” without
                the better-than-you attitude. We hope you enjoy!
              </p>
              <a href="/contact-us">
                <button type="button" className="introHeaderBtn">
                  Contact Us
                  <div className="introHeaderBtnArrow">
                    <i className="bi bi-caret-right"></i>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {FEATURED_ARTICLES.map((article, index) => (
            <React.Fragment key={article.url}>
              <FeaturedArticleCard {...article} />
              {index < FEATURED_ARTICLES.length - 2 && (
                <div className="col-1 paddingArticles"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-1 paddingArticles"></div>
          <div className="col-3"></div>
          <div className="col-1 paddingArticles"></div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}

export default PsychobabbleZone;
