import React from "react";

interface ArticleProps {
  paragArr: string[];
  details: string;
  heading: string;
}

export default function Article({
  paragArr = [],
  details,
  heading,
}: ArticleProps) {
  return (
    <div className="container py-5">
      <h1>{heading}</h1>
      {details && <p className="text-muted small">{details}</p>}
      {paragArr.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
