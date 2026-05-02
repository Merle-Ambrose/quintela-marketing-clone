import "./FeaturedArticleCard.scss";

import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import type { FeaturedArticleMeta } from "../../types/article";
import isExternalHref from "../../utils/isExternalHref";

export default function FeaturedArticleCard({
  heading,
  desc,
  img,
  alt,
  author,
  date,
  category,
  url,
}: FeaturedArticleMeta) {
  const externalHref = isExternalHref(url);

  return (
    <div className="col">
      <div className="card h-100">
        {externalHref ? (
          <a href={url}>
            <img src={img} alt={alt} className="card-img-top" />
          </a>
        ) : (
          <Link to={url}>
            <img src={img} alt={alt} className="card-img-top" />
          </Link>
        )}
        <div className="card-body d-flex flex-column">
          {externalHref ? (
            <a href={url} className="text-decoration-none text-dark">
              <h5 className="card-title">{heading}</h5>
            </a>
          ) : (
            <Link to={url} className="text-decoration-none text-dark">
              <h5 className="card-title">{heading}</h5>
            </Link>
          )}
          <p className="text-muted small mb-2">
            By {author} | {date} | {category}
          </p>
          <p className="card-text mb-4">{desc}</p>
          <div className="mt-auto">
            <PrimaryButton href={url} className="primaryBtnRead">
              Read More <span className="ms-2">→</span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
