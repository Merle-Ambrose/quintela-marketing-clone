import React, { useState } from "react";
import CustomerQuote from "../utils/CustomerQuote";
import {
  BLUE_BACKGROUND_STYLE,
  GEOMETRIC_EXCERPT_STYLE,
} from "../constants/backgroundStyles";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}

function Contact() {
  const [fullNameMsg, setFullNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");

  function checkName(value) {
    const formFullName = value.trim();
    if (!formFullName) {
      setFullNameMsg("This field is required.");
      return false;
    } else {
      setFullNameMsg("");
      return true;
    }
  }

  function checkEmail(value) {
    const formEmail = value.trim();
    if (!formEmail) {
      setEmailMsg("This field is required.");
      return false;
    } else if (!validateEmail(formEmail.trim())) {
      setEmailMsg("Please enter a valid email address.");
      return false;
    } else {
      setEmailMsg("");
      return true;
    }
  }

  function submitForm(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formFullName = form.fullName.value;
    const formEmail = form.email.value;
    const isNameValid = checkName(formFullName);
    const isEmailValid = checkEmail(formEmail);

    if (isNameValid && isEmailValid) {
      alert(
        `Your full name: ${formFullName.trim()} \nYour email: ${formEmail.trim()} \nSince this is a demo website, your information will not be stored/sent anywhere. \nYou will now be redirected to the homepage...`,
      );
      window.location.assign("/");
    }
  }

  return (
    <>
      <div className="digitalInterviewQuote">
        <div
          className="midnightBackground"
          id="contactUsBkg"
          style={BLUE_BACKGROUND_STYLE}
        ></div>
        <div className="text-center" id="contactUsHeader">
          <h1>Schedule a 30-minute demo</h1>
          <p className="digitalInterviewOverlayParagraph">
            Our mission is to make managing all of your interview guides and
            administering talent management assessments as simple as possible.
          </p>
          <div id="contactUsBox">
            <form onSubmit={submitForm} noValidate>
              <label htmlFor="fullName">
                Full Name
                <span style={{ color: "red", fontWeight: "normal" }}>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                autoComplete="name"
                onBlur={(e) => checkName(e.target.value)}
                onChange={() => {
                  if (fullNameMsg) {
                    setFullNameMsg("");
                  }
                }}
                required
              />
              <p className="errorMsg fullNameErrorMsg" aria-live="polite">
                {fullNameMsg}
              </p>
              <label htmlFor="email">
                Company Email
                <span style={{ color: "red", fontWeight: "normal" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                onBlur={(e) => checkEmail(e.target.value)}
                onChange={() => {
                  if (emailMsg) {
                    setEmailMsg("");
                  }
                }}
                required
              />
              <p className="errorMsg" aria-live="polite">
                {emailMsg}
              </p>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <CustomerQuote />

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
              resources and hiring efforts into a solid future.
            </p>
            <p>
              <b>
                How a digital interview builder supports all organizational
                roles
              </b>
            </p>
            <p>
              Your hiring managers are probably experts in their technical
              fields — they are not always savvy when it comes to proper hiring
              practices, or even the legal elements behind finding the right
              candidate. Instead of struggling to educate every individual
              manager about the subtleties of hiring, why not trust a
              performance management appraisal systems expert instead? Quintela
              offers interviewing guides that are designed to make consistent,
              measurable interviewing not only possible, but, in fact, the norm
              for your company. Our human resources platforms allow for:
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

export default Contact;
