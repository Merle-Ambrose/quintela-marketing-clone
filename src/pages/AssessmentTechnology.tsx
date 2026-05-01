import React from "react";
import ListPoint from "../components/ListPoint/ListPoint";
import ListPointDivider from "../components/ListPointDivider/ListPointDivider";
import SmallQuote from "../components/SmallQuote/SmallQuote";
import SystemIntegrations from "../components/SystemIntegrations/SystemIntegrations";
import PageHeader from "../components/PageHeader/PageHeader";

export default function AssessmentTechnology() {
  return (
    <>
      <PageHeader
        bkgClassName="assessmentTechnologyHeader"
        heading="Assessment Technology"
        mobileHeading="Assessment Tech"
        mobileDescription="Manage multiple assessments from one dashboard."
        imgSrc="./img/header/brain.png"
        imgAlt="Review of potential candidates."
        description="Assessments are valuable across the employee lifecycle, and switching platforms burdens talent teams. Manage all assessments from one dashboard that tracks completions and provides fast access to reports."
        descClassName="mb-1"
      />

      {/* Images/text */}
      <div className="listPointsAssessmentWrapper py-5">
        <div className="listPoints container listPointsAssessment">
          <ListPointDivider>
            Our assessment solution is used for both talent acquisition and
            development purposes. Whether you have a high-volume hiring event or
            an internal development program, our platform integrates multiple
            assessment vendors, proprietary assessments, or competencies in a
            simple dashboard with just the information you need. The result is
            an efficient assessment process based on your evaluation framework
            and competency models that helps you screen and select the right
            talent in a fraction of the time. For programs that focus on talent
            development for existing employees, the dashboard can be used to
            lessen burden of test administration, track assessment completion
            progress, and store several reports in one participant record.
          </ListPointDivider>
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/admin.png"
            altImgText="Team of people analyzing candidate options."
            heading="Administering"
            desc="Create test batteries using assessments from multiple vendors. Customize with your own tests or 360s. Build custom competencies and scores. Combine competencies into job profiles. Send participants one link to access all tests."
          />
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/tracking.png"
            altImgText="Two people picking between three candidates."
            heading="Tracking Completions"
            desc="Eliminate spreadsheets and mail merge processes. Check participants progress through a dashboard. Improve participant experience with consistent communication. Access both custom reports and vendor reports quickly."
            isImgOnLeft={true}
          />
          <ListPoint
            url="/contact-us"
            img="./img/listpoint/reports.png"
            altImgText="Magnifying a person's profile."
            heading="Accessing Reports"
            desc="Streamline multiple test results into a single report. Customize output to your unique competencies. Dynamically adjust text based on thresholds. Add interview questions or development tips."
          />
          <SystemIntegrations />
        </div>
      </div>

      <SmallQuote
        desc='"With their unique blend of I-O and IT expertise, the Quintela Group helped us streamline our multiple assessment processes and competency reporting capabilities. The teams outstanding consulting and customer service focus allowed us to replace an outdated and manual system, freeing up our time to focus on more strategic tasks."'
        title="HR Director Organizational Development, PhD"
        company="Fortune 500 Big Box Retailer"
        className="pb-0"
      />
    </>
  );
}
