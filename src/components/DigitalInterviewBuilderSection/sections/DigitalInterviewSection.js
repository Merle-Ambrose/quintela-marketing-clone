import React from "react";
import useIsMobile from "../../../utils/useIsMobile";

function DigitalInterviewSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <p>
          A digital interview builder centralizes interview content so teams can
          create, deploy, and manage consistent behavioral interviews from one
          place, reducing fragmentation and manual work. It also keeps interview
          materials current as roles evolve.
        </p>
        <p>
          Structured guides focus interviews on measurable behaviors, which
          reduces the risk and cost of poor hires and improves decision quality.
          Linking questions to competencies produces clearer, comparable data
          across candidates.
        </p>
        <ul>
          <li>Centralized content, templates and question libraries</li>
          <li>Structured, measurable guides linked to competencies</li>
          <li>Better data to compare candidates consistently</li>
        </ul>
        <p>
          Quintela helps you build and maintain guides, set scoring rules, and
          establish workflows that make interviewing faster, fairer, and more
          data-driven. Contact us to learn how to implement this at scale.
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        Do you know what a digital interview builder can do for your company? If
        you are an HR, recruiting, talent acquisition or talent management
        professional, you know how difficult it can be to create, deploy and
        manage a consistent and effective behavioral interview process in your
        company without a centralized system. Let Quintela build that system for
        you!
      </p>
      <p>
        If your hiring teams and hiring managers are frustrated with your
        approach to managing the interviewing process, reach out to Quintela for
        help building the right online interview guide system for you.
      </p>
      <p>
        Are you aware of the true cost of a 'bad hire?' Hiring the wrong person
        could end up costing you thousands of dollars because of poor
        performance, missed opportunities and repeat training. In fact, for many
        roles the cost to replace a bad hire (not including the cost of their
        poor performance) can easily exceed 100% of their annual salary. For
        executive positions, this cost is even higher.
      </p>
      <p>
        Talk about a major drain on your finances. The good news: You can avoid
        bad performers by working with Quintela to develop an online interview
        management system.
      </p>
      <p className="fw-bold">
        Using a digital interview builder to improve your hiring process.
      </p>
      <p>
        At Quintela, we can build you a structured interview guide management
        system that fits your behavioral interviewing process. Easily create
        guides that are customized for each position, allowing you to focus
        clearly on the behaviors you want to see from prospects.
      </p>
      <ul>
        <li>
          Our online interview guide system makes it easy for hiring teams to
          conduct interviews and make better hiring decisions based on interview
          data. This data-driven approach prevents your firm from wasting
          thousands on lackluster new hires.
        </li>
        <li>
          You do not have to come up with the interview questions yourself. At
          Quintela, our digital interview builder includes a library of
          questions that can be linked to your competency framework. This
          ensures your interviewing process aligns with the competencies
          specific to your company.
        </li>
        <li>
          These interview guides can be used throughout your organization
          through a central management system. Imagine never having to worry
          about compliance, inconsistency in interviewing, and other challenging
          interview process problems ever again.
        </li>
      </ul>
      <p>
        If you are ready to make hiring faster, easier and more accurate at your
        firm, it is time to call Quintela to learn about our digital interview
        builder. We make managing your candidate interviewing process quick and
        simple, allowing you to fill open positions with new hires that will
        move the needle at your organization. Contact us today to get started.
      </p>
    </>
  );
}

export default DigitalInterviewSection;
