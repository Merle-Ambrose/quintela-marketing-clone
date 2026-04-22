import "./InterviewGuide.css";

import React from "react";
import ListPoint from "../components/ListPoint/ListPoint";
import ListPointDivider from "../components/ListPointDivider/ListPointDivider";
import SmallQuote from "../components/SmallQuote/SmallQuote";
import DigitalInterviewBuilderSection from "../components/DigitalInterviewBuilderSection/DigitalInterviewBuilderSection";
import DigitalInterviewSection from "../components/DigitalInterviewBuilderSection/sections/DigitalInterviewSection";
import SystemIntegrations from "../components/SystemIntegrations/SystemIntegrations";
import PageHeader from "../components/PageHeader/PageHeader";

function InterviewGuide() {
  return (
    <>
      <PageHeader
        bkgClassName="bkg-blue"
        heading="Digital Interview Guides"
        imgSrc="./img/header/digitalInterview.png"
        imgAlt="Review of potential candidates."
        description="By building digital interview guide systems, hiring managers
                  and recruiters can seamlessly integrate the interview notes
                  and ratings into the hiring process."
      />

      {/* Images/text */}
      <div className="listPointsAssessmentWrapper py-5">
        <div className="listPoints container">
          <ListPointDivider>
            Our interview builder is a tool that allows talent acquisition teams
            to create interview guides, competency models, and screening
            protocols for various positions at an organization.
          </ListPointDivider>
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/guide1.png"
            altImgText="Browser window showing the Quintela interview guide builder."
            heading="Interview Guide Builder"
            desc="Extensive library of competencies and questions. Customizable to fit unique competency models. Create multiple guide versions at once. Ensure consistency during interview process."
          />

          <ListPointDivider>
            Managing all of the interview content can be time-consuming and
            inefficient. By using the digital interview guide system, the
            candidate experience is consistent and the decision-making process
            is streamlined.
          </ListPointDivider>
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/guide2.png"
            altImgText="Browser window showing a list of potential hires in the Quintela application."
            heading="Candidate Dashboard"
            desc="Make your interview guides available to recruiters and hiring managers. Advanced search and filtering features allow users to find their guides quickly. Restrict access to guides and edit features based on role."
            isImgOnLeft={true}
          />
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/guide3.png"
            altImgText="Browser window showing an interviewer an interview guide in the Quintela application."
            heading="Digital Interview Guides"
            desc="Record objective ratings and interview notes digitally. Compare ratings and scores from multiple interviewers. Create database of notes/ratings for future analysis."
          />

          <SystemIntegrations />
        </div>
      </div>

      <SmallQuote
        desc='"In implementing an interview system to manage our competency-based interview guides and content, Quintela has proven that they are NOT the typical vendor. Their defensiveness-free attitude and adaptive approach allows us to address our unique requirements. The teams intelligent responsiveness and desire to solve our critical problems is refreshing."'
        title="Director of Selection & Assessment, PhD,"
        company="Fortune 500 Telecommunications Organization"
      />

      <DigitalInterviewBuilderSection
        header="Digital Interview Online Builder"
        body={<DigitalInterviewSection />}
        bkg="blue"
      />
    </>
  );
}

export default InterviewGuide;
