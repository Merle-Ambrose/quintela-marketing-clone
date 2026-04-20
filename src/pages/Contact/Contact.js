import "../../components/SectionStyles/SectionStyles.css";
import "./Contact.css";

import React, { useState } from "react";
import CustomerQuote from "../../components/CustomerQuote/CustomerQuote";
import DigitalInterviewBuilderSection from "../../components/DigitalInterviewBuilderSection/DigitalInterviewBuilderSection";
import ContactGeometricInterviewSection from "../../components/DigitalInterviewBuilderSection/sections/ContactGeometricInterviewSection";

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
      {/* Hero Section */}
      <div className="heroSection text-center bkg-blue py-5">
        <div className="container px-3">
          <h1 className="fw-bold mb-3">Schedule a 30-minute demo</h1>
          <p className="fs-5 fw-bold">
            Our mission is to make managing all of your interview guides and
            administering talent management assessments as simple as possible.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-5 text-center">
        <div id="contactUsBox">
          <form onSubmit={submitForm} noValidate>
            <label htmlFor="fullName">
              Full Name
              <span className="required-marker">*</span>
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
              <span className="required-marker">*</span>
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

      <DigitalInterviewBuilderSection
        header="Digital Interview Builder"
        body={<ContactGeometricInterviewSection />}
        bkg="geometric"
      />
    </>
  );
}

export default Contact;
