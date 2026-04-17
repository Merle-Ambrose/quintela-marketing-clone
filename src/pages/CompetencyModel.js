import React, { useState } from "react";
import ListPoint from "../utils/ListPoint";
import SmallQuote from "../utils/SmallQuote";
import CompetencyBox from "../components/CompetencyBox";
import { BLUE_BACKGROUND_STYLE } from "../constants/backgroundStyles";
import { HOVER_IMAGES } from "../constants/competencyModelConstants";

function CompetencyModel() {
  const [hoverImgSrc, setHoverImgSrc] = useState(HOVER_IMAGES.default);

  return (
    <>
      {/* Page Introduction */}
      <div className="digitalInterviewQuote">
        <div
          className="midnightBackground"
          id="competencyModelHeader"
          style={BLUE_BACKGROUND_STYLE}
        >
          <h1 className="introHeaderHeading text-center">
            Competency Management System
          </h1>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-2"></div>
              <img
                src="./img/header/cycle.png"
                alt="Cycle of reviewing potential candidates."
                className="introHeaderImg col-4"
                id="introHeaderAssessmentTechnology"
              />
              <div className="introHeaderText col-4 align-self-center">
                <p>
                  With the help of Quintela’s proprietary online system, your
                  company can leverage our extensive library to define the exact
                  skill sets that are needed to succeed in a variety of jobs,
                  and then incorporate those competencies into your hiring,
                  development and performance management programs.
                </p>
                <div className="text-center">
                  <a href="/contact-us">
                    <button type="button" className="introHeaderBtn">
                      Schedule a Demo
                      <div className="introHeaderBtnArrow">
                        <i className="bi bi-caret-right"></i>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images/text */}
      <div style={{ backgroundColor: "#f8fbfe" }}>
        <div className="listPoints container" id="listPointsAssessment">
          <div className="listPoint">
            <hr />
            <div className="listPointParagraph">
              What can a competency model library do for your organization?
              Competency models are frameworks that provide a “recipe” for the
              capabilities needed for good job performance. From marketing to
              manufacturing, from administrative work to accounting and beyond,
              Quintela’s competency library platform can be leveraged to help
              you assess candidates and evaluate employees based on the most
              desirable skills for their job.
            </div>
            <hr />
          </div>
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/airplane.png"
            altImgText="Three people looking at charts."
            heading="Your competency model(s)"
            desc="Take advantage of Quintela’s extensive framework and/or upload all of your competency content.  Configure the system around your specific hierarchy and structure.  Manage and segment multiple competency models for those departments and business units that have their own models."
            isImgOnLeft={true}
          />

          <div
            className="listPoint row justify-content-center"
            id="competencyAssessmentDiv"
          >
            <div className="listPointText col-3" id="hoverImgDesc">
              <h1>Assessment Building Blocks</h1>
              <p>
                Assign entities to each competency that will allow you to build
                any talent management assessment. For example, assign interview
                questions to competencies or psychometric items and scoring to
                each competency in your profile.
              </p>
              <a href="/contact-us">
                <button type="button">Know More</button>
              </a>
            </div>
            <div className="col-8">
              <img
                src={hoverImgSrc}
                alt="Browser window with the Quintela interview application."
                className=""
                id="hoverImg"
                onMouseEnter={() => setHoverImgSrc(HOVER_IMAGES.active)}
                onMouseLeave={() => setHoverImgSrc(HOVER_IMAGES.default)}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          paddingBottom: "100px",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <div id="assessmentBuilderDiv">
          <h1>
            Only Competency-Based Assessment Builder That You Will Ever Need
          </h1>
          <p>
            Build any talent assessment by combining a list of competencies and
            their assigned entities. We are real assessment experts, so we knew
            we had to design our platform to account for the only three
            assessment processes.
          </p>
          <p>Someone provides information about…</p>
          <ul>
            <li>Themselves (eg Psychometric Tests)</li>
            <li>Someone Else (eg 360/180 Surveys)</li>
            <li>Something (eg Job Analysis Surveys)</li>
          </ul>
        </div>

        <div className="row justify-content-center">
          <CompetencyBox
            icon="bi bi-pen"
            title="Job Analyses"
            desc="Create job analysis surveys with your items/sections.  Send surveys to hundreds of job experts.  Receive a simple summary report with descriptive and aggregated ratings."
          />
          <CompetencyBox
            icon="bi bi-bar-chart-line"
            title="Job Profiles"
            desc="Send a list of competencies to one or more job experts to select/rank critical competencies. Receive a simple summary report with descriptive and aggregated ratings."
          />
          <CompetencyBox
            icon="bi bi-globe"
            title="Psychometric Assessments"
            desc="Assign test items to each competency & add scoring algorithms. Create an assessment by  combining competencies. Items are ordered/randomized."
          />
        </div>

        <div className="row justify-content-center">
          <CompetencyBox
            icon="bi bi-journal-richtext"
            title="360/180 Degree Surveys"
            desc="Easily create surveys for one or multiple individuals to rate someone else. Receive a simple summary report with aggregated ratings."
          />
          <CompetencyBox
            icon="bi bi-briefcase-fill"
            title="Performance Surveys"
            desc="Create an assessment that allows one person (usually a manager) to rate their direct report and/or dotted line individuals."
          />
          <CompetencyBox
            icon="bi bi-wallet2"
            title="Interview Guides"
            desc="Use a simple builder to create interview guides. Assign guides to hiring team. Print PDF/Word or enter notes and scores into eGuides."
          />
        </div>

        <div className="row justify-content-center">
          <CompetencyBox
            icon="bi bi-envelope-paper"
            title="Engagement Surveys"
            desc="Create organizational and/or engagement surveys and send them to some or all of your employees. Utilize an interactive analytics dashboard that can be filtered by fields like department, gender, etc."
          />
          <CompetencyBox
            icon="bi bi-tag"
            title="Individual Assessments"
            desc="Combine multiple assessments, typically designed to simulate a day in the life of the target role. Receive simple reports for the leaders who completed the assessment battery and/or for their coaches."
          />
          <CompetencyBox
            icon="bi bi-calendar"
            title="Assessment Centers"
            desc="Create a multi-rater, multi-method assessment battery to be administered to a group of individuals, typical high potential employees. Capture all rater notes and scores online."
          />
        </div>
      </div>

      <div style={{ backgroundColor: "#f8fbfe" }}>
        <div className="listPoints container" id="listPointsAssessment">
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/analytics.png"
            altImgText="Analyzing potential interview candidates."
            heading="Custom Analytics Dashboards"
            desc="Download a single file with all data on-demand. Design and implement a custom analytics dashboard with the metrics and graphs that you need. Include predictive data so that you can assess your quality of hire and legal exposure.  For interviews, evaluate your quality of interview/hire, quality of interviewer, and quality of interview content."
          />
        </div>
      </div>

      <div
        className="exerpt"
        id="exerptDigitalInterview"
        style={BLUE_BACKGROUND_STYLE}
      >
        <div className="container">
          <h1>A competency model library supports your business goals</h1>
          <p>
            A competency library platform can be used for both individuals and
            business units, setting expectations and defining roles.
            Competencies provide a common language for discussing capabilities
            and behaviors that are critical for your company.
          </p>
          <p>
            Competency models have become increasingly popular because they
            reveal opportunities and methods for training, especially in highly
            specialized and leadership roles. Furthermore, a competency model
            library can be useful in the hiring process, as it offers clear
            communication to hiring managers, and even candidates, about the
            expectations of the job. This consistency allows your hiring team to
            make better decisions, finding the right fit for your position,
            thanks to defined roles and functions.
          </p>
          <p>
            The Quintela competency management system has been extensively
            researched and includes competency definitions and specifications
            for multiple types and levels of roles.
          </p>
          <p>
            Quintela can help you find the right competencies that fit your
            company, providing you with the support you need to make the right
            talent management decisions. Ready to get started with your
            competency model library? Contact us today to learn more about
            custom solutions for your business.
          </p>
        </div>
      </div>

      <SmallQuote
        desc='"We use Quintela for our interview guide system and assessment dashboard because they work with us to create what WE want/need rather than limiting us to off the shelf products that don’t fully meet our needs."'
        title="Director Talent Management, PhD,"
        company="Billion-Dollar Industrial Manufacturer"
      />
    </>
  );
}

export default CompetencyModel;
