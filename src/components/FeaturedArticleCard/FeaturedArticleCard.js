import "./FeaturedArticleCard.css";

import React from "react";

function FeaturedArticleCard({
  heading,
  desc,
  img,
  alt,
  author,
  date,
  category,
  url,
}) {
  return (
    <div className="col">
      <div className="articleBox h-100">
        <a href={url}>
          <img src={img} alt={alt} />
        </a>
        <div className="articleBoxText">
          <a href={url}>
            <h5>{heading}</h5>
          </a>
          <p className="articleBoxCredit">
            By {author} | {date} | {category}
          </p>
          <p>{desc}</p>
          <p>
            <a href={url}>Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticleCard;
