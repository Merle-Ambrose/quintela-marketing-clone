import React from "react";
import Article from "../../pages/Article/Article";

export default function ProInterview() {
  return (
    <Article
      paragArr={META.paragArr}
      details={`by ${META.author} | ${META.date} | ${META.category}`}
      heading={META.heading}
    />
  );
}

export const META = {
  heading: "The Two Ways Digital Interview Guides Keep You Legally Compliant",
  paragArr: ["Placeholder paragraph for ProInterview article."],
  desc: "Summary...",
  img: "./img/articles/proInterview.jpg",
  alt: "",
  author: "",
  date: "",
  category: "",
  url: "/articles/the-two-ways-digital-interview-guides-keep-you-legally-compliant",
};
