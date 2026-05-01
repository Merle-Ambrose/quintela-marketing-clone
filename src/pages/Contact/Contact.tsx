import "./Contact.scss";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerQuote from "../../components/CustomerQuote/CustomerQuote";
import DigitalInterviewBuilderSection from "../../components/DigitalInterviewBuilderSection/DigitalInterviewBuilderSection";
import ContactGeometricInterviewSection from "../../components/DigitalInterviewBuilderSection/sections/ContactGeometricInterviewSection";
import PageHeader from "../../components/PageHeader/PageHeader";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}

export default function Contact() {
  const navigate = useNavigate();
  const [fullNameMsg, setFullNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");

  function checkName(value: string) {
    const formFullName = value.trim();
    if (!formFullName) {
      setFullNameMsg("This field is required.");
      return false;
    } else {
      setFullNameMsg("");
      return true;
    }
  }

  function checkEmail(value: string) {
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

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      fullName: HTMLInputElement;
      email: HTMLInputElement;
    };
    const formFullName = form.fullName.value;
    const formEmail = form.email.value;
    const isNameValid = checkName(formFullName);
    const isEmailValid = checkEmail(formEmail);

    if (isNameValid && isEmailValid) {
      alert(
        `Your full name: ${formFullName.trim()} \nYour email: ${formEmail.trim()} \nThis is a demo website, so your information will not be stored/sent anywhere. \nYou will now be redirected to the homepage...`,
      );
      navigate("/");
    }
  }

  return (
    <>
      <PageHeader
        heading="Schedule a 30-minute demo"
        mobileHeading="Schedule Demo"
        mobileDescription="Manage interview guides and assessments simply. Schedule a demo to see how we can help."
        description={
          "Our mission is to make managing all of your interview guides and administering talent management assessments as simple as possible."
        }
        bkgClassName="bkg-blue"
        centerContent
        hideIntroButton
      />

      {/* Contact Form */}
      <div className="pt-5 text-center">
        <div className="contactUsBox">
          <form onSubmit={submitForm} noValidate className="text-start">
            <div className="mb-3 form-group">
              <label htmlFor="fullName" className="form-label text-start w-100">
                Full Name <span className="required-marker">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                autoComplete="name"
                className={`form-control${fullNameMsg ? " is-invalid" : ""}`}
                maxLength={100}
                onBlur={(e) => checkName(e.target.value)}
                onChange={() => {
                  if (fullNameMsg) {
                    setFullNameMsg("");
                  }
                }}
                required
              />
              <div className="invalid-feedback text-start">{fullNameMsg}</div>
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="email" className="form-label text-start w-100">
                Company Email <span className="required-marker">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className={`form-control${emailMsg ? " is-invalid" : ""}`}
                maxLength={254} // RFC 5321 official max email length
                onBlur={(e) => checkEmail(e.target.value)}
                onChange={() => {
                  if (emailMsg) {
                    setEmailMsg("");
                  }
                }}
                required
              />
              <div className="invalid-feedback text-start">{emailMsg}</div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-2">
              Submit
            </button>
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
