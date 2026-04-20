import "../../components/SectionStyles/SectionStyles.css";
import "./Home.css";

import React from "react";
import CustomerQuote from "../../components/CustomerQuote/CustomerQuote";
import DigitalInterviewBuilderSection from "../../components/DigitalInterviewBuilderSection/DigitalInterviewBuilderSection";
import IntroHeaderButton from "../../components/IntroHeaderButton/IntroHeaderButton";
import ListPoint from "../../components/ListPoint/ListPoint";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="heroSection text-center bkg-blue pt-5">
        <div className="container px-3">
          <h1 className="fw-bold mb-4">Digital Interview Guides</h1>
          <IntroHeaderButton
            href="/contact-us"
            label="Schedule a Demo"
            className="mb-4"
            id="btnHomeSchedule"
          />
          <div className="heroImgHangingWrapper">
            <img
              src="./img/peopleWorking.png"
              alt="People surrounding a whiteboard choosing a potential hire."
              className="heroImg"
            />
          </div>
        </div>
      </div>

      <CustomerQuote className="quoteFromCustomerHangingImage" />

      <div className="container listPoints py-5 my-5" id="listPointsHome">
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

      <DigitalInterviewBuilderSection />
    </>
  );
}

export default Home;
