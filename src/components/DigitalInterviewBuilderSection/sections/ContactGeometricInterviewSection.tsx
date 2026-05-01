import React from "react";
import useIsMobile from "../../../utils/useIsMobile";

export default function ContactGeometricInterviewSection() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <p>
          Quintela takes the guesswork out of hiring. Our digital interview
          tools save time, reduce administrative burden, and help you hire more
          accurately across roles. The system keeps guides current as roles and
          competencies change.
        </p>
        <p>
          We provide practical guides, competency support, and implementation
          help so your teams can focus on the right behaviors and make
          confident, consistent hiring choices. We also help set scoring rules
          and workflows to streamline reviewer input.
        </p>
        <p>
          Whether you need a small pilot or a full rollout, Quintela offers
          hands-on support to configure the library, train users, and produce
          clear hiring reports.
        </p>
        <p>
          Reach out to explore tailored solutions that fit your organization.
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        Are you a human resources professional looking for the right digital
        interview builder? In today&apos;s talent management marketplace, it can
        be difficult to find the right fit - both for your interview management
        system, and for candidates themselves. At Quintela, we pride ourselves
        on taking the guesswork out of your hiring and performance management
        appraisal systems. Our goal is to help you save time and energy, all
        while improving the accuracy of your hiring and performance management
        efforts. From assessment systems through the full lifetime of an
        employee&apos;s career at your firm, Quintela&apos;s custom solutions
        can help you overcome your talent management challenges. Use our
        products to develop a more strategic approach that will carry your human
        resources and hiring efforts into a solid future.
      </p>
      <div>
        <h3 className="fw-bold py-3">
          How does a digital interview builder support all organizational roles?
        </h3>
        <p>
          Your hiring managers are probably experts in their technical fields -
          they are not always savvy when it comes to proper hiring practices, or
          even the legal elements behind finding the right candidate. Instead of
          struggling to educate every individual manager about the subtleties of
          hiring, why not trust a performance management appraisal systems
          expert instead? Quintela offers interviewing guides that are designed
          to make consistent, measurable interviewing not only possible, but, in
          fact, the norm for your company. Our human resources platforms allow
          for:
        </p>
      </div>
      <ul>
        <li>
          More consistent evaluations and interviews, thanks to predetermined
          questions and guidelines
        </li>
        <li>Better measurement with quantitative ranking systems</li>
        <li>
          Less waste and duplication of effort, leading to a faster interviewing
          process that nets higher-quality candidates
        </li>
        <li>
          Faster reviews, with the ability to rank multiple candidates at once
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
      <p>
        Human resources professionals are notoriously overburdened and managing
        the hiring process from start to finish can seem like an overwhelming
        task. Instead of trying to "boil the ocean" with your hiring teams, why
        not trust Quintela&apos;s smart solutions for your business? Our digital
        interview builder is just one element of our comprehensive product and
        service offerings. We can help you craft a custom competency library,
        interview scheme and talent management support program to propel your
        company to success. Give your employees and hiring teams the advantage
        of consistent, reliable support - give them access to Quintela. Contact
        us today to learn more about our diverse array of options for your
        company, no matter your industry.
      </p>
    </>
  );
}
