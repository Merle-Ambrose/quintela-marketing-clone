import "./FeaturedArticleCard.scss";

import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import ArticleMeta from "../../types/article";

export default function FeaturedArticleCard({
  heading,
  desc,
  img,
  alt,
  author,
  date,
  category,
  url,
}: ArticleMeta) {
  return (
    <div className="col">
      <div className="card h-100">
        <a href={url}>
          <img src={img} alt={alt} className="card-img-top" />
        </a>
        <div className="card-body d-flex flex-column">
          <a href={url} className="text-decoration-none text-dark">
            <h5 className="card-title">{heading}</h5>
          </a>
          <p className="text-muted small mb-2">
            By {author} | {date} | {category}
          </p>
          <p className="card-text mb-4">{desc}</p>
          <div className="mt-auto">
            <PrimaryButton href={url} className="primaryBtn--read">
              Read More <span className="ms-2">→</span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
