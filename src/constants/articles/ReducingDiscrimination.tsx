import React from "react";
import Article from "../../pages/Article/Article";

export default function ReducingDiscrimination() {
  return (
    <Article
      paragArr={META.paragArr}
      details={`by ${META.author} | ${META.date} | ${META.category}`}
      heading={META.heading}
    />
  );
}

export const META = {
  heading: "Reducing Discrimination with Digital Interview Guides",
  paragArr: ["Placeholder paragraph for ReducingDiscrimination article."],
  desc: "Summary...",
  img: "./img/articles/reducingDiscrimination.jpg",
  alt: "",
  author: "",
  date: "",
  category: "",
  url: "/articles/reducing-discrimination-with-digital-interview-guides",
};
