import React from "react";
import CustomerQuote from "../utils/CustomerQuote";
import ListPoint from "../utils/ListPoint";
import {
  BLUE_BACKGROUND_STYLE,
  GEOMETRIC_EXCERPT_STYLE,
} from "../constants/backgroundStyles";

function Home() {
  return (
    <>
      <div className="digitalInterviewQuote">
        <div className="midnightBackground" style={BLUE_BACKGROUND_STYLE}></div>
        <div className="digitalInterviewOverlay text-center">
          <h1>Digital Interview Guides</h1>
          <a href="/contact-us">
            <button
              type="button"
              className="introHeaderBtn"
              id="btnHomeSchedule"
            >
              Schedule a Demo
              <div className="introHeaderBtnArrow">
                <i className="bi bi-caret-right"></i>
              </div>
            </button>
          </a>
          <br />
          <img
            src="./img/peopleWorking.png"
            alt="People surrounding a whiteboard choosing a potential hire."
          />
        </div>
        <CustomerQuote />

        <div className="container listPoints" id="listPointsHome">
          <ListPoint
            url="/digital-online-interview-builder"
            img="./img/listpoint/checkboxes.png"
            altImgText="A meeting held in front of a whiteboard."
            heading="Digital Interview Guides"
            desc="It’s time to move beyond static documents and digitize your interview guides. From updating an interview question to changing a competency title, our solution simplifies the time involved to make these changes and keeps all your interview data in one simple platform.  We are the only interview guide platform that was designed by selection scientists who hate clicking too many times."
          />
          <ListPoint
            url="/assessments"
            img="./img/header/brain.png"
            altImgText="Analysis of a person's brain and potential."
            heading="Assessment Technology"
            desc="Using psychometric tests or competencies to assess candidates and future leaders? Whether you’re using one or many assessments, our seamless dashboard will help you administer, track, and view reports from your test publishers. Use custom reports that integrate scores from multiple assessments."
            isImgOnLeft={true}
          />
          <ListPoint
            url="/competency-model-library"
            img="./img/listpoint/statistics.png"
            altImgText="People analyzing statistics."
            heading="Competency Platform"
            desc="We use the term “competency”, but they are called many different names, are called many different names e.g., capabilities, knowledge/skills/aptitudes, values, etc.  However, what is constant is that they play a critical role in talent management.  They help you define roles, make better hires, understand employee engagement, and develop your leaders, to name a few. What is also constant is that they are almost impossible to keep track of and manage."
          />
        </div>

        <div className="exerpt" style={GEOMETRIC_EXCERPT_STYLE}>
          <div className="container">
            <h1 className="text-center">Digital Interview Builder</h1>
            <p>
              Are you a human resources professional looking for the right
              digital interview builder? In today’s talent management
              marketplace, it can be difficult to find the right fit — both for
              your interview management system, and for candidates themselves.
              At Quintela, we pride ourselves on taking the guesswork out of
              your hiring and performance management appraisal systems. Our goal
              is to help you save time and energy, all while improving the
              accuracy of your hiring and performance management efforts. From
              assessment systems through the full lifetime of an employee’s
              career at your firm, Quintela’s custom solutions can help you
              overcome your talent management challenges. Use our products to
              develop a more strategic approach that will carry your human
              resources and hiring efforts into a solid future. How a digital
              interview builder supports all organizational roles Your hiring
              managers are probably experts in their technical fields — they are
              not always savvy when it comes to proper hiring practices, or even
              the legal elements behind finding the right candidate. Instead of
              struggling to educate every individual manager about the
              subtleties of hiring, why not trust a performance management
              appraisal systems expert instead? Quintela offers interviewing
              guides that are designed to make consistent, measurable
              interviewing not only possible, but, in fact, the norm for your
              company. Our human resources platforms allow for:
            </p>
            <ul>
              <li>
                More consistent evaluations and interviews, thanks to
                predetermined questions and guidelines
              </li>
              <li>Better measurement with quantitative ranking systems</li>
              <li>
                Less waste and duplication of effort, leading to a faster
                interviewing process that nets higher-quality candidates
              </li>
              <li>
                Faster reviews, with the ability to rank multiple candidates at
                once
              </li>
              <li>
                Fewer burdensome, procedural tasks and more meaningful
                interactions with your team
              </li>
              <li>
                Lower legal risk, thanks to a compliance-focused interviewing
                system
              </li>
              <li>And more</li>
            </ul>
            <p>
              Human resources professionals are notoriously overburdened and
              managing the hiring process from start to finish can seem like an
              overwhelming task. Instead of trying to “boil the ocean” with your
              hiring teams, why not trust Quintela’s smart solutions for your
              business? Our digital interview builder is just one element of our
              comprehensive product and service offerings. We can help you craft
              a custom competency library, interview scheme and talent
              management support program to propel your company to success. Give
              your employees and hiring teams the advantage of consistent,
              reliable support — give them access to Quintela. Contact us today
              to learn more about our diverse array of options for your company,
              no matter your industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
