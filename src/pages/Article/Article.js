import React from "react";
import "./Article.css";

function Article({ heading, details, paragArr = [] }) {
  return (
    <div className="container article">
      <h1>{heading}</h1>
      <p className="details">{details}</p>
      {paragArr.map((paragraph, index) => (
        <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Article;
