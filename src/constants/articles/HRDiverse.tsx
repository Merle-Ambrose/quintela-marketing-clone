import React from "react";
import Article from "../../pages/Article/Article";

export default function HRDiverse() {
  return (
    <Article
      paragArr={META.paragArr}
      details={`by ${META.author} | ${META.date} | ${META.category}`}
      heading={META.heading}
    />
  );
}

export const META = {
  heading: "How diverse are HR vendor executive teams?",
  paragArr: ["Placeholder paragraph for HRDiverse article."],
  desc: "Summary...",
  img: "./img/articles/hrDiverse.jpg",
  alt: "",
  author: "",
  date: "",
  category: "",
  url: "/articles/how-diverse-are-hr-vendor-executive-teams",
};
