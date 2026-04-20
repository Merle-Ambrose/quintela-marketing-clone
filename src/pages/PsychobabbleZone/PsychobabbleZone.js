import "../../components/SectionStyles/SectionStyles.css";
import "./PsychobabbleZone.css";

import React from "react";
import FeaturedArticleCard from "../../components/FeaturedArticleCard/FeaturedArticleCard";
import IntroHeaderButton from "../../components/IntroHeaderButton/IntroHeaderButton";
import { FEATURED_ARTICLES } from "../../constants/psychobabbleConstants";

function PsychobabbleZone() {
  return (
    <>
      {/* Hero Section */}
      <div className="heroSection bkg-cmp py-5" id="psychModelHeader">
        <div className="container px-3 text-center">
          <h1 className="introHeaderHeading">Psychobabble-Free Zone</h1>
          <p>
            The word "science" has been so overused in Talent Management that
            it&apos;s lost its meaning. When you hear it, you probably tune out
            just like we do. It is a shame, because there is a lot of value once
            you get past the nonsense. That&apos;s why we decided to offer a
            psychobabble-free zone where we discuss the &quot;science&quot;
            without the better-than-you attitude. We hope you enjoy!
          </p>
          <IntroHeaderButton href="/contact-us" label="Contact Us" />
        </div>
      </div>

      <div className="container pt-three">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 justify-content-center">
          {FEATURED_ARTICLES.map((article) => (
            <FeaturedArticleCard key={article.url} {...article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PsychobabbleZone;
