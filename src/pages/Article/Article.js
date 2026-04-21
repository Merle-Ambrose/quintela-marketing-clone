import React from "react";
import "./Article.css";

function Article({ heading, details, paragArr = [] }) {
  return (
    <div className="container articleContainer">
      <h1 className="mb-3 display-5">{heading}</h1>
      <p className="text-secondary small details-article">{details}</p>
      {paragArr.map((paragraph, index) => (
        <p
          key={`${index}-${paragraph.slice(0, 20)}`}
          className="text-muted article-paragraph"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default Article;
