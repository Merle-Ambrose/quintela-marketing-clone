import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { NAV_ITEMS } from "../../constants/appNavigation";
import { buildAppRoutes } from "../../constants/appRoutes";

import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Loader from "../Loader";
import Home from "../Home/Home";
import InterviewGuide from "../InterviewGuide";
import AssessmentTechnology from "../AssessmentTechnology";
import CompetencyModel from "../CompetencyModel/CompetencyModel";
import PsychobabbleZone from "../PsychobabbleZone/PsychobabbleZone";
import Contact from "../Contact/Contact";
const HRDiverse = React.lazy(() => import("../../articles/HRDiverse"));
const ReducingDiscrimination = React.lazy(
  () => import("../../articles/ReducingDiscrimination"),
);
const DigitalInterview = React.lazy(
  () => import("../../articles/DigitalInterview"),
);
const ProInterview = React.lazy(() => import("../../articles/ProInterview"));

const APP_ROUTES = buildAppRoutes({
  Home,
  InterviewGuide,
  AssessmentTechnology,
  CompetencyModel,
  PsychobabbleZone,
  HRDiverse,
  ReducingDiscrimination,
  ProInterview,
  DigitalInterview,
  Contact,
});

function App() {
  return (
    <BrowserRouter>
      <div className="App app-flex-wrapper">
        {/* Navbar! */}
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
          <div className="siteFrame siteNavFrame">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNav"
            >
              <ul className="navbar-nav align-items-center w-100">
                <li className="nav-item">
                  <Link className="navbar-brand companyNavLogo" to="/">
                    <img
                      src="img/logo.png"
                      className="d-inline-block align-top"
                      id="logo"
                      alt="brand logo"
                    />
                  </Link>
                </li>
                {NAV_ITEMS.map(({ to, label }) => (
                  <li className="nav-item" key={to}>
                    <NavLink className="nav-link" to={to}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>


        {/* Content of webpage */}
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              {APP_ROUTES.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer! */}
        <footer className="text-center bg-dark text-light pt-4 mt-7">
          <div className="container">
            {/* Blue gradient card */}
            <div
              className="row justify-content-between align-items-center mb-4 py-4 px-2 shadow footerCtaCard"
            >
              <div className="col-md-8 col-12 mb-2 mb-md-0 fs-3 fw-bold text-md-start text-start">
                Ready to Get Started?
              </div>
              <div className="col-md-4 col-12 text-md-end text-center">
                <a
                  href="/contact-us"
                  className="btn btn-light fw-bold px-4 py-2 rounded-pill text-primary"
                >
                  Sign Up Today
                </a>
              </div>
            </div>

            {/* Socials and info */}
            <div className="row justify-content-center pb-2">
              <div>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/quintelagroup"
                    className="text-light fs-4"
                  >
                    <i className="bi-facebook"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/quintela_io"
                    className="text-light fs-4"
                  >
                    <i className="bi-twitter"></i>
                  </a>
                </div>
                <p className="mb-1">
                  © 2022 Quintela Group LLC. 7722 Oak Moss Dr, Spring, TX 77379 · (844) 428-2924 ·{' '}
                  <a href="mailto:hello@quintela.io" className="text-info">hello@quintela.io</a>
                </p>
                <p className="mb-1">
                  <a href="/no-privacy-policy-on-this-site" className="text-info">Privacy Policy</a>
                  {' '}·{' '}
                  <a href="/no-cookie-policy-on-this-site" className="text-info">Cookie Policy</a>
                </p>
                <p className="mb-1">This is NOT Quintela Group's official website!</p>
                <p className="mb-1">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.polinatik.com"
                    className="text-info"
                  >
                    Website Redesign By: Polina Tikhomirova
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
