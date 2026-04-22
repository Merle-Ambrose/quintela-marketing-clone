import "./PsychobabbleZone.css";

import React from "react";
import FeaturedArticleCard from "../../components/FeaturedArticleCard/FeaturedArticleCard";
import { FEATURED_ARTICLES } from "../../constants/psychobabbleConstants";
import PageHeader from "../../components/PageHeader/PageHeader";

function PsychobabbleZone() {
  return (
    <>
      <PageHeader
        heading="Psychobabble-Free Zone"
        description={
          'The word "science" has been so overused in Talent Management that it\'s lost its meaning. When you hear it, you probably tune out just like we do. It is a shame, because there is a lot of value once you get past the nonsense. That\'s why we decided to offer a psychobabble-free zone where we discuss the "science" without the better-than-you attitude. We hope you enjoy!'
        }
        bkgClassName="bkg-cmp text-center"
      />

      <div className="container pt-three">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2 g-4 justify-content-center">
          {FEATURED_ARTICLES.map((article) => (
            <FeaturedArticleCard key={article.url} {...article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PsychobabbleZone;
