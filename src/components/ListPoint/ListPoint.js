import "./ListPoint.css";

import React from "react";

function KnowMoreButton({ url }) {
  return (
    <a href={url} className="listPointBtn">
      Know More
    </a>
  );
}

function ListPoint({ img, altImgText, heading, desc, url, isImgOnLeft }) {
  const textBlock = (
    <div className="listPointText col-12 col-lg d-grid gap-3">
      <h1>{heading}</h1>
      <p>{desc}</p>
      <KnowMoreButton url={url} />
    </div>
  );

  const imageBlock = (
    <div className="col-12 col-lg-auto d-flex justify-content-center">
      <img src={img} alt={altImgText} className="listPointImg img-fluid" />
    </div>
  );

  return (
    <div className="listPoint row g-0 gap-5 align-items-center justify-content-center">
      {isImgOnLeft ? imageBlock : textBlock}
      {isImgOnLeft ? textBlock : imageBlock}
    </div>
  );
}

export default ListPoint;
