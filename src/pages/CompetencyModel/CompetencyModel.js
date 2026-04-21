import "../../components/SectionStyles/SectionStyles.css";
import "./CompetencyModel.css";

import React, { useState } from "react";
import ListPoint from "../../components/ListPoint/ListPoint";
import ListPointDivider from "../../components/ListPointDivider/ListPointDivider";
import SmallQuote from "../../components/SmallQuote/SmallQuote";
import CompetencyBox from "../../components/CompetencyBox/CompetencyBox";
import PageHeader from "../../components/PageHeader/PageHeader";
import { HOVER_IMAGES } from "../../constants/competencyModelConstants";
import DigitalInterviewBuilderSection from "../../components/DigitalInterviewBuilderSection/DigitalInterviewBuilderSection";
import CompetencyModelLibrarySection from "../../components/DigitalInterviewBuilderSection/sections/CompetencyModelLibrarySection";

function CompetencyModel() {
  const [hoverImgSrc, setHoverImgSrc] = useState(HOVER_IMAGES.default);

  return (
    <>
      <PageHeader
        bkgClassName="bkg-blue"
        heading="Competency Management System"
        imgSrc="./img/header/cycle.png"
        imgAlt="Cycle of reviewing potential candidates."
        description="With the help of Quintela’s proprietary online system, your company can leverage our extensive library to define the exact skill sets that are needed to succeed in a variety of jobs, and then incorporate those competencies into your hiring, development and performance management programs."
      />

      {/* List points: intro paragraph + first ListPoint */}
      <div className="listPointsAssessmentWrapper py-5">
        <div className="listPoints container py-5 listPointsAssessment">
          <ListPointDivider>
            What can a competency model library do for your organization?
            Competency models are frameworks that provide a "recipe" for the
            capabilities needed for good job performance. From marketing to
            manufacturing, from administrative work to accounting and beyond,
            Quintela's competency library platform can be leveraged to help you
            assess candidates and evaluate employees based on the most desirable
            skills for their job.
          </ListPointDivider>
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/airplane.png"
            altImgText="Three people looking at charts."
            heading="Your competency model(s)"
            desc="Take advantage of Quintela's extensive framework and/or upload all of your competency content.  Configure the system around your specific hierarchy and structure.  Manage and segment multiple competency models for those departments and business units that have their own models."
            isImgOnLeft={true}
          />
          <ListPointDivider>
            Assign entities to each competency that will allow you to build any
            talent management assessment. For example, assign interview
            questions to competencies or psychometric items and scoring to each
            competency in your profile.
          </ListPointDivider>
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/assessment-blocks.png"
            altImgText="Browser window with the Quintela interview application."
            heading="Assessment Building Blocks"
            desc="Assign entities to each competency that will allow you to build any talent management assessment. For example, assign interview questions to competencies or psychometric items and scoring to each competency in your profile."
            isImgOnLeft={false}
            hoverImgSrc={hoverImgSrc}
            onHoverImgEnter={() => setHoverImgSrc(HOVER_IMAGES.active)}
            onHoverImgLeave={() => setHoverImgSrc(HOVER_IMAGES.default)}
          />
        </div>
      </div>

      {/* Assessment Builder section and analytics in one container with my-4 */}
      <div className="container py-5 my-5 d-grid gap-4">
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
          <ul className="text-start d-inline-block noBullets">
            <li>Themselves (eg Psychometric Tests)</li>
            <li>Someone Else (eg 360/180 Surveys)</li>
            <li>Something (eg Job Analysis Surveys)</li>
          </ul>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
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

      <div className="listPointsAssessmentWrapper py-5">
        <div className="listPoints container py-5 listPointsAssessment">
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/analytics.png"
            altImgText="Analyzing potential interview candidates."
            heading="Custom Analytics Dashboards"
            desc="Download a single file with all data on-demand. Design and implement a custom analytics dashboard with the metrics and graphs that you need. Include predictive data so that you can assess your quality of hire and legal exposure.  For interviews, evaluate your quality of interview/hire, quality of interviewer, and quality of interview content."
          />
        </div>
      </div>

      <DigitalInterviewBuilderSection
        header="Competency Model Library Benefits"
        body={<CompetencyModelLibrarySection />}
        bkg="blue"
      />

      <SmallQuote
        desc='"We use Quintela for our interview guide system and assessment dashboard because they work with us to create what WE want/need rather than limiting us to off the shelf products that don’t fully meet our needs."'
        title="Director Talent Management, PhD,"
        company="Billion-Dollar Industrial Manufacturer"
        className="pb-0"
      />
    </>
  );
}

export default CompetencyModel;
