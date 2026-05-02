import React from "react";
import Article from "../Article";
import type { ArticleMeta } from "../../../types/article";

export default function DigitalInterview() {
  return (
    <Article
      paragArr={META.paragArr}
      details={`by ${META.author} | ${META.date} | ${META.category}`}
      heading={META.heading}
    />
  );
}

export const META: ArticleMeta = {
  heading: "Interview like a Pro: How to Interview Candidates with Confidence",
  paragArr: [
    "In today’s standardized, digitized world, the interview is not what it used to be. Once upon a time, an interviewer had the confidence to walk into a room and spit out question after question, rating the candidate in their mind and walking away with an opinion already made. Today, the interview process can be tricky to navigate as a hiring manager, recruiter or peer interviewer, but with a structured interview guide, it’s actually quite simple. All you have to do is ask, evaluate and rate.",
    "In an age when standardization is more important than ever, digital interview guides can take on the heavy lifting. Gone are the days of week-long interview prep. Now, interviewers simply open the online structured interview guide and assess the candidates’ fit for the job, ensuring every candidate is asked the same questions and judged according to the same scale. When you’re interviewing hundreds of candidates for multiple job types, the workload also weighs heavily on staff members, trickling down to impact the candidate experience. Thanks to standardization with digital interview guides, staff and candidates benefit from more targeted interview questions and a custom rating scale set by the organization.",
    "According to SHRM, one source of stress for many employees, especially those in talent acquisition and human resources, is the pressure to keep up with a constantly changing field. Rather than letting your hiring managers, recruiters or other staff become overwhelmed by the company’s fast paced hiring plan, give them the resources to develop confidence and do their jobs better. With digital interview guides, a hiring manager could walk into an interview after 5 minutes of preparation – the time it takes to access one document – and have a structured conversation with a candidate that assesses the various competencies required for the job. Much like confidence affects an interviewee’s ability to impress the organization, it affects how well an interviewer can impress the candidate, who is simultaneously judging the organization and its candidate experience based on the interview. Studies show that organizations that invest in a strong candidate experience improve their quality of hires by at least 70 percent, so taking the time to create digital interview guides with custom questions for each type of job can quickly impact ROI. No pressure, right? Luckily, with the right tools, interviewing and assessing candidates becomes a breeze. Learn more about how digital interview guides can help increase quality of hire all while keeping headaches to a minimum, and contact Quintela to request a demo.",
  ],
  desc: "In today’s standardized, digitized world, the interview is not what it used to be. Once upon a time, an interviewer had the confidence to walk into a room and spit out question after question, rating the candidate in their mind and walking away with an opinion already...",
  img: "/img/articles/personInterview.jpg",
  alt: "Article thumbnail about interview confidence",
  author: "Joel Quintela",
  date: "Mar 2, 2022",
  category: "Interview Guides",
  url: "/articles/interview-like-a-pro-how-to-interview-candidates-with-confidence",
};
