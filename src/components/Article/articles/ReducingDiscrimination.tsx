import React from "react";
import Article from "../Article";
import type { ArticleMeta } from "../../../types/article";

export default function ReducingDiscrimination() {
  return (
    <Article
      paragArr={META.paragArr}
      details={`by ${META.author} | ${META.date} | ${META.category}`}
      heading={META.heading}
    />
  );
}

export const META: ArticleMeta = {
  heading: "Reducing Discrimination with Digital Interview Guides",
  paragArr: [
    "Despite changing times, hiring discrimination is still as prevalent today as it was 20 years ago. Over the years, more and more organizations have tried to mandate hiring practices that reduce bias and discrimination based on race, ethnicity, gender, sexual orientation or age, but studies show that little has changed. Some hiring practices show promise though – blind interviews and digital interview guides ensure standardization in the interview process, helping to protect interviewees from potential bias.",
    "Organizational leaders understand the benefits of having a diverse workforce. In fact, a study by Techstars shows that 72 percent of technology company founders believe in the importance of diversity. That would sound very promising, but only 12 percent of those founders actually have five or more diverse employees in technology roles, so it’s clear that their plans are not working. This type of bias or discrimination may be completely unconscious but is still there nonetheless.",
    "To reduce discrimination in hiring, the first step is interview standardization. When organizations commit to widespread standardization with digital interview guides, interviewers must ask every candidate the same set of questions depending on the job type, which reduces the potential for bias. Within the guide, interviewers may rate responses and keep track of notes, but this standardized, tracked process can make it easier for hiring leaders to recognize bias after reviewing interview guide forms.",
    "Studies dating back to the 1990s show that white applicants received, on average, 36 percent more callbacks that African American applicants and 24 percent more callbacks than Latino applicants with identical resumes, and according to Harvard Business Review, these numbers remain practically unchanged for African Americans.",
    "Thus, when organizations combine pre-employment assessments with standardized interview practices and interview guides, they may see reduced bias over time. At the very least, perhaps these practices will make it possible for leaders to identify where the bias is coming from within their organization and make further changes.",
    "If your organization is not already practicing structured interviews, it may be time to consider a change in order to find the right person for the job and still be sure you’re avoiding discrimination in the process, resulting in greater diversity and better business practices.",
    "Article originally published on Business2Community.",
  ],
  desc: "Despite changing times, hiring discrimination is still as prevalent today as it was 20 years ago. Over the years, more and more organizations have tried to mandate hiring practices that reduce bias and discrimination based on race, ethnicity, gender, sexual...",
  img: "/img/articles/handshake.jpg",
  alt: "Article thumbnail about reducing discrimination",
  author: "Joel Quintela",
  date: "Mar 23, 2022",
  category: "Diversity, Equity, and Inclusion",
  url: "/articles/reducing-discrimination-with-digital-interview-guides",
};
