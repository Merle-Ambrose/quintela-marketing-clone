import "./Home.scss";

import React from "react";
import CustomerQuote from "../../components/CustomerQuote/CustomerQuote";
import DigitalInterviewBuilderSection from "../../components/DigitalInterviewBuilderSection/DigitalInterviewBuilderSection";
import HomeGeometricInterviewSection from "../../components/DigitalInterviewBuilderSection/sections/HomeGeometricInterviewSection";
import ListPoint from "../../components/ListPoint/ListPoint";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader
        heading="Digital Interview Guides"
        mobileHeading="Digital Interview Guides"
        bkgClassName="bkgBlue"
        isHero
        imgSrc="/img/peopleWorking.png"
        imgAlt="People surrounding a whiteboard choosing a potential hire."
        ctaHref="/contact-us"
        ctaLabel="Schedule a Demo"
        ctaClassName="mb-4"
      />

      <CustomerQuote className="quoteFromCustomerHangingImage" />

      <div className="container listPoints my-5">
        <ListPoint
          url="/digital-online-interview-builder"
          img="/img/listpoint/checkboxes.png"
          altImgText="A meeting held in front of a whiteboard."
          heading="Digital Interview Guides"
          desc="It’s time to move beyond static documents and digitize your interview guides. From updating an interview question to changing a competency title, our solution simplifies the time involved to make these changes and keeps all your interview data in one simple platform.  We are the only interview guide platform that was designed by selection scientists who hate clicking too many times."
        />
        <ListPoint
          url="/assessments"
          img="/img/header/brain.png"
          altImgText="Analysis of a person's brain and potential."
          heading="Assessment Technology"
          desc="Using psychometric tests or competencies to assess candidates and future leaders? Whether you’re using one or many assessments, our seamless dashboard will help you administer, track, and view reports from your test publishers. Use custom reports that integrate scores from multiple assessments."
          isImgOnLeft={true}
        />
        <ListPoint
          url="/competency-model-library"
          img="/img/listpoint/statistics.png"
          altImgText="People analyzing statistics."
          heading="Competency Platform"
          desc="We use the term “competency”, but they are called many different names e.g., capabilities, knowledge/skills/aptitudes, values, etc.  However, what is constant is that they play a critical role in talent management.  They help you define roles, make better hires, understand employee engagement, and develop your leaders, to name a few. What is also constant is that they are almost impossible to keep track of and manage."
        />
      </div>

      <DigitalInterviewBuilderSection
        header="Digital Interview Builder"
        body={<HomeGeometricInterviewSection />}
        bkg="geometric"
      />
    </>
  );
}
