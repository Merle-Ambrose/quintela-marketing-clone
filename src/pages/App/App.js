import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { navbarToggle, onLoadNav } from "../CheckNavbarToggle";
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
  useEffect(() => {
    const cleanup = onLoadNav();
    return cleanup;
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/* Navbar! */}
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
          <div className="siteFrame siteNavFrame">
            <Link
              className="navbar-toggler companyNavLogo"
              id="logoCollapsed"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              to="/"
            >
              <img
                src="img/logo.png"
                className="d-inline-block align-top"
                id="logo"
                alt="brand logo"
              />
            </Link>
            <button
              onClick={navbarToggle}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <Link
                className="navbar-brand companyNavLogo"
                id="nonToggledNavbarLogo"
                to="/"
              >
                <img
                  src="img/logo.png"
                  className="d-inline-block align-top"
                  id="logo"
                  alt="brand logo"
                />
              </Link>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
        <Suspense fallback={<Loader />}>
          <Routes>
            {APP_ROUTES.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>

        {/* Footer! */}
        <footer className="text-center">
          <div>
            {/* Blue div (ready to get started) */}
            <div id="footerCard" className="clearfix bg-secondary">
              <div className="float-start">Ready to Get Started?</div>
              <div className="float-end">
                <Link to="/contact-us">
                  <button type="button">Sign Up Today</button>
                </Link>
              </div>
            </div>

            {/* Gray div */}
            <div id="footerBkgBottom"></div>
          </div>

          <div id="footerParagraphsBkg">
            <div className="container">
              <div className="justify-content-md-center">
                <div id="footerContent">
                  <div id="footerSocials">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/quintelagroup"
                    >
                      <i className="bi-facebook"></i>
                    </a>{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/quintela_io"
                    >
                      <i className="bi-twitter"></i>
                    </a>
                  </div>
                  <p>
                    © 2022 Quintela Group LLC. 7722 Oak Moss Dr, Spring, TX
                    77379 · (844) 428-2924 ·{" "}
                    <a href="mailto:hello@quintela.io">hello@quintela.io</a>
                  </p>
                  <p>
                    <a href="/no-privacy-policy-on-this-site">Privacy Policy</a>{" "}
                    · <a href="/no-cookie-policy-on-this-site">Cookie Policy</a>
                  </p>
                  <p>This is NOT Quintela Group's official website!</p>
                  <p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.polinatik.com"
                    >
                      Website Redesign By: Polina Tikhomirova
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
