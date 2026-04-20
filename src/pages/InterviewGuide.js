import "../components/SectionStyles/SectionStyles.css";

import React from "react";
import ListPoint from "../components/ListPoint/ListPoint";
import SmallQuote from "../components/SmallQuote/SmallQuote";
import SystemIntegrations from "../components/SystemIntegrations/SystemIntegrations";
import PageHeader from "../components/PageHeader/PageHeader";

function InterviewGuide() {
  return (
    <>
      <PageHeader
        id="digitalInterviewHeader"
        bkgClassName="bkg-blue"
        heading="Digital Interview Guides"
        imgSrc="./img/header/digitalInterview.png"
        imgAlt="Review of potential candidates."
        description="By building digital interview guide systems, hiring managers
                  and recruiters can seamlessly integrate the interview notes
                  and ratings into the hiring process."
      />

      {/* Images/text */}
      <div className="listPointsAssessmentWrapper">
        <div className="listPoints container py-5" id="listPointsInterview">
          <div className="listPoint">
            <hr />
            <div className="listPointParagraph">
              Our interview builder is a tool that allows talent acquisition
              teams to create interview guides, competency models, and screening
              protocols for various positions at an organization.
            </div>
            <hr />
          </div>
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/guide1.png"
            altImgText="Browser window showing the Quintela interview guide builder."
            heading="Interview Guide Builder"
            desc="Extensive library of competencies and questions. Customizable to fit unique competency models. Create multiple guide versions at once. Ensure consistency during interview process."
          />

          <div className="listPoint">
            <hr />
            <div className="listPointParagraph">
              Managing all of the interview content can be time-consuming and
              inefficient. By using the digital interview guide system, the
              candidate experience is consistent and the decision-making process
              is streamlined.
            </div>
            <hr />
          </div>
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

      <div className="exerpt exerpt-blue" id="exerptDigitalInterview">
        <div className="container">
          <h1 className="text-center">Digital Interview Online Builder</h1>
          <p>
            Do you know what a digital interview builder can do for your
            company? If you are an HR, recruiting, talent acquisition or talent
            management professional, you know how difficult it can be to create,
            deploy and manage a consistent and effective behavioral interview
            process in your company without a centralized system. Let Quintela
            build that system for you!
          </p>
          <p>
            If your hiring teams and hiring managers are frustrated with your
            approach to managing the interviewing process, reach out to Quintela
            for help building the right online interview guide system for you.
          </p>
          <p>
            Are you aware of the true cost of a "bad hire?" Hiring the wrong
            person could end up costing you thousands of dollars because of poor
            performance, missed opportunities and repeat training. In fact, for
            many roles the cost to replace a bad hire (not including the cost of
            their poor performance) can easily exceed 100% of their annual
            salary. For executive positions, this cost is even higher.
          </p>
          <p>
            Talk about a major drain on your finances. The good news: You can
            avoid bad performers by working with Quintela to develop an online
            interview management system.
          </p>
          <p className="fw-bold">
            Using a digital interview builder to improve your hiring process.
          </p>
          <p>
            At Quintela, we can build you a structured interview guide
            management system that fits your behavioral interviewing process.
            Easily create guides that are customized for each position, allowing
            you to focus clearly on the behaviors you want to see from
            prospects.
          </p>
          <ul>
            <li>
              Our online interview guide system makes it easy for hiring teams
              to conduct interviews and make better hiring decisions based on
              interview data. This data-driven approach prevents your firm from
              wasting thousands on lackluster new hires.
            </li>
            <li>
              You do not have to come up with the interview questions yourself.
              At Quintela, our digital interview builder includes a library of
              questions that can be linked to your competency framework. This
              ensures your interviewing process aligns with the competencies
              specific to your company.
            </li>
            <li>
              These interview guides can be used throughout your organization
              through a central management system. Imagine never having to worry
              about compliance, inconsistency in interviewing, and other
              challenging interview process problems ever again.
            </li>
          </ul>
          <p>
            If you are ready to make hiring faster, easier and more accurate at
            your firm, it is time to call Quintela to learn about our digital
            interview builder. We make managing your candidate interviewing
            process quick and simple, allowing you to fill open positions with
            new hires that will move the needle at your organization. Contact us
            today to get started.
          </p>
        </div>
      </div>
    </>
  );
}

export default InterviewGuide;
