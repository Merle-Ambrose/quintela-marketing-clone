import React from "react";

function DigitalInterviewBuilderSection({ variant }) {
  if (variant === "digital-interview") {
    return (
      <div className="exerpt exerpt-blue py-5" id="exerptDigitalInterview">
        <div className="container px-4">
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
    );
  }
  // Default: geometric section
  return (
    <div className="exerpt exerpt-geometric py-5">
      <div className="container px-4 d-grid gap-4">
        <h1 className="text-center mb-0">Digital Interview Builder</h1>
        <p className="mb-0">
          Are you a human resources professional looking for the right digital
          interview builder? In today&apos;s talent management marketplace, it can
          be difficult to find the right fit - both for your interview
          management system, and for candidates themselves. At Quintela, we
          pride ourselves on taking the guesswork out of your hiring and
          performance management appraisal systems. Our goal is to help you save
          time and energy, all while improving the accuracy of your hiring and
          performance management efforts. From assessment systems through the
          full lifetime of an employee&apos;s career at your firm, Quintela&apos;s
          custom solutions can help you overcome your talent management
          challenges. Use our products to develop a more strategic approach that
          will carry your human resources and hiring efforts into a solid
          future.
        </p>
        <div>
          <h3 className="fw-bold">
            How does a digital interview builder support all organizational roles?
          </h3>
          <p className="mb-0">
            Your hiring managers are probably experts in their technical fields -
            they are not always savvy when it comes to proper hiring practices, or
            even the legal elements behind finding the right candidate. Instead of
            struggling to educate every individual manager about the subtleties of
            hiring, why not trust a performance management appraisal systems expert
            instead? Quintela offers interviewing guides that are designed to make
            consistent, measurable interviewing not only possible, but, in fact,
            the norm for your company. Our human resources platforms allow for:
          </p>
        </div>
        <ul className="mb-0">
          <li>
            More consistent evaluations and interviews, thanks to predetermined
            questions and guidelines
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
            Fewer burdensome, procedural tasks and more meaningful interactions
            with your team
          </li>
          <li>
            Lower legal risk, thanks to a compliance-focused interviewing system
          </li>
          <li>And more!</li>
        </ul>
        <p className="mb-0">
          Human resources professionals are notoriously overburdened and
          managing the hiring process from start to finish can seem like an
          overwhelming task. Instead of trying to "boil the ocean" with your
          hiring teams, why not trust Quintela&apos;s smart solutions for your
          business? Our digital interview builder is just one element of our
          comprehensive product and service offerings. We can help you craft a
          custom competency library, interview scheme and talent management
          support program to propel your company to success. Give your employees
          and hiring teams the advantage of consistent, reliable support - give
          them access to Quintela. Contact us today to learn more about our
          diverse array of options for your company, no matter your industry.
        </p>
      </div>
    </div>
  );
}

export default DigitalInterviewBuilderSection;