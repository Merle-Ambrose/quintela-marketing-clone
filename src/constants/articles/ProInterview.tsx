import React from "react";
import Article from "../../pages/Article/Article";
import type { ArticleMeta } from "../../types/article";

export default function ProInterview() {
  return (
    <Article
      paragArr={META.paragArr}
      details={`by ${META.author} | ${META.date} | ${META.category}`}
      heading={META.heading}
    />
  );
}

export const META: ArticleMeta = {
  heading: "The Two Ways Digital Interview Guides Keep You Legally Compliant",
  paragArr: [
    "Studies show that about 30 percent of interviewers know whether or not they want to hire you within the first 90 seconds of an interview. Despite the ease of making such quick judgments of candidates, it’s not necessarily legal to “go with your gut.” While your organization may trust your opinion of a candidate, it will want to keep track of documents that prove interviews are legally compliant. The best way to ensure compliance is by utilizing digital interview guides that help recruiters or managers follow a structured interview plan and keep notes of the interview.",
    "If you’re not sure how to protect your organization, there are at least two ways digital interview guides keep you legally compliant.",
    "First, maintaining an organized record of digital interview guides will help decrease your team’s stress in the case of an audit. When interviewers meet with candidates, they can simply take notes within the digital interview guide and save it in a designated place for easy reference. Not only does this save time and productivity but decreases the possibility that your organization may be fined due to lack of compliance.",
    "By integrating digital interview guides with your organization’s applicant tracking system, all of the candidate’s information is together and easily accessible for an audit. Together, it’s easier for organizations or HR professionals to show proof of why a candidate was not hired for a job.",
    "Compliance may vary from state to state, and if your organization hires across multiple states, you’ll want to be prepared for a variety of scenarios. For example, some states limit inquiries about crimes or convictions, so it’s important to ensure that digital interview guides in these states do not contain questions about the candidate’s criminal history as it could be seen as a failure to comply.",
    "By taking the time to review all state laws regarding these and other topics, organizations can create a variety of standardized interview guides with specific questions that are known to comply with state hiring laws, reducing potential headaches for the organization. Surely, the legal department will be thankful for your effort to maintain compliance throughout the hiring process.",
    "These two ways of ensuring hiring compliance with digital interview guides can help save your organization from future fines or lawsuits.",
    "Learn more about how digital interview guides can help increase quality of hire all while keeping headaches to a minimum, and contact Quintela to request a demo.",
  ],
  desc: "Studies show that about 30 percent of interviewers know whether or not they want to hire you within the first 90 seconds of an interview. Despite the ease of making such quick judgments of candidates, it’s not necessarily legal to “go with your gut.” While your...",
  img: "./img/articles/videoInterview.jpg",
  alt: "Article thumbnail about interview legal compliance",
  author: "Joel Quintela",
  date: "Mar 20, 2022",
  category: "Legal Compliance",
  url: "/articles/the-two-ways-digital-interview-guides-keep-you-legally-compliant",
};
