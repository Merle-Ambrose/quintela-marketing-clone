import React from "react";
import ListPoint from "../utils/ListPoint";
import SmallQuote from "../utils/SmallQuote";
import SystemIntegrations from "../utils/SystemIntegrations";

function AssessmentTechnology() {
  return (
    <>
      {/* Page Introduction */}
      <div className="digitalInterviewQuote">
        <div className="midnightBackground" id="assessmentTechnologyHeader">
          <h1 className="introHeaderHeading text-center">
            Assessment Technology
          </h1>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-1"></div>
              <img
                src="./img/header/brain.png"
                alt="Review of potential candidates."
                className="introHeaderImg col-4"
                id="introHeaderAssessmentTechnology"
              />
              <div className="introHeaderText col-4">
                <p>
                  Assessments have become a valuable talent management tool
                  throughout the entire employee experience. Unfortunately, this
                  also creates a significant challenge for talent management
                  professionals who have to jump from one assessment platform to
                  another. What if you could manage all of your assessments from
                  one platform?
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
              Our assessment solution is used for both talent acquisition and
              development purposes. Whether you have a high-volume hiring event
              or an internal development program, our platform integrates
              multiple assessment vendors, proprietary assessments, or
              competencies in a simple dashboard with just the information you
              need. The result is an efficient assessment process based on your
              evaluation framework and competency models that helps you screen
              and select the right talent in a fraction of the time. For
              programs that focus on talent development for existing employees,
              the dashboard can be used to lessen burden of test administration,
              track assessment completion progress, and store several reports in
              one participant record.
            </div>
            <hr />
          </div>
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
      />
    </>
  );
}

export default AssessmentTechnology;
