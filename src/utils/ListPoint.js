import React from "react";

function ListPoint({ img, altImgText, heading, desc, url, isImgOnLeft }) {
  const textBlock = (
    <div
      className={`listPointText col-5${isImgOnLeft ? "" : " listPointTextLeft"}`}
      style={isImgOnLeft ? { marginLeft: "30px" } : { marginRight: "30px" }}
    >
      <h1>{heading}</h1>
      <p>{desc}</p>
      <a href={url}>
        <button type="button">Know More</button>
      </a>
    </div>
  );

  const imageBlock = (
    <img
      src={img}
      alt={altImgText}
      className={`listPointImg col-7${isImgOnLeft ? " listPointImgLeft" : ""}`}
    />
  );

  return (
    <div className="listPoint row justify-content-center align-items-center">
      {isImgOnLeft ? imageBlock : textBlock}
      {isImgOnLeft ? textBlock : imageBlock}
    </div>
  );
}

export default ListPoint;
