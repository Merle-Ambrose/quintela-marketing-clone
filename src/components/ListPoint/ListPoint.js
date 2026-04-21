import "./ListPoint.css";

import React from "react";

function KnowMoreButton({ url }) {
  return (
    <a href={url} className="listPointBtn">
      Know More
    </a>
  );
}

function ListPoint({
  img,
  altImgText,
  heading,
  desc,
  url,
  isImgOnLeft,
  hoverImgSrc,
  onHoverImgEnter,
  onHoverImgLeave,
}) {
  const isHoverable = !!hoverImgSrc && !!onHoverImgEnter && !!onHoverImgLeave;

  const textBlock = (
    <div className={`listPointText col-12 d-grid gap-3 ${isHoverable ? 'col-lg-4' : 'col-lg'}`}>
      <h1>{heading}</h1>
      <p>{desc}</p>
      <KnowMoreButton url={url} />
    </div>
  );

  const imageBlock = (
    <div className={`col-12 d-flex justify-content-center ${isHoverable ? 'col-lg-8' : 'col-lg-auto'}`}>
      <img
        src={hoverImgSrc || img}
        alt={altImgText}
        className={`img-fluid ${isHoverable ? 'hoverImg' : 'listPointImg'}`}
        onMouseEnter={onHoverImgEnter}
        onMouseLeave={onHoverImgLeave}
      />
    </div>
  );

  return (
    <div className={`listPoint row align-items-center justify-content-center ${isHoverable ? 'g-5' : ''}`}>
      {isImgOnLeft ? imageBlock : textBlock}
      {isImgOnLeft ? textBlock : imageBlock}
    </div>
  );
}

export default ListPoint;
