import React from "react";
import "../App/App.css";

function Article({ heading, details, paragArr = [] }) {
  return (
    <div className="container contentSection">
      <h1 className="mb-3 display-5">{heading}</h1>
      <p className="text-secondary small content-details">{details}</p>
      {paragArr.map((paragraph, index) => (
        <p
          key={`${index}-${paragraph.slice(0, 20)}`}
          className="text-muted content-paragraph"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default Article;
