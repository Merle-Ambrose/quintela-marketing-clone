import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { NAV_ITEMS } from "../../constants/appNavigation";
import { buildAppRoutes } from "../../constants/appRoutes";

import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Loader from "../Loader";
import Home from "../Home/Home";
import InterviewGuide from "../InterviewGuide";
import AssessmentTechnology from "../AssessmentTechnology";
import CompetencyModel from "../CompetencyModel/CompetencyModel";
import PsychobabbleZone from "../PsychobabbleZone/PsychobabbleZone";
import Contact from "../Contact/Contact";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
const HRDiverse = React.lazy(
  () => import("../../constants/articles/HRDiverse"),
);
const ReducingDiscrimination = React.lazy(
  () => import("../../constants/articles/ReducingDiscrimination"),
);
const DigitalInterview = React.lazy(
  () => import("../../constants/articles/DigitalInterview"),
);
const ProInterview = React.lazy(
  () => import("../../constants/articles/ProInterview"),
);

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
  function NavbarComp() {
    const location = useLocation();

    useEffect(() => {
      const el = document.getElementById("navbarNav");
      if (!el) return;

      const toggler = document.querySelector(".navbar-toggler");
      const bs = window.bootstrap;

      // Create or reuse a page overlay used to blur the page when the
      // mobile navbar is expanded. Place it under the navbar but above
      // the page content so backdrop-filter blurs the page content.
      const overlayId = "navOverlay";
      let overlay = document.getElementById(overlayId);
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = overlayId;
        overlay.className = "nav-overlay";
        document.body.appendChild(overlay);
      }

      const showOverlay = () => {
        overlay.classList.add("show");
        document.body.classList.add("nav-open");
      };

      const hideOverlay = () => {
        overlay.classList.remove("show");
        document.body.classList.remove("nav-open");
      };

      // Clicking the overlay should close the menu
      const onOverlayClick = () => {
        try {
          if (bs && bs.Collapse) {
            const inst = bs.Collapse.getInstance(el) || new bs.Collapse(el, { toggle: false });
            inst.hide();
          } else {
            el.classList.remove("show");
            hideOverlay();
          }
        } catch (e) {
          hideOverlay();
        }
      };
      overlay.addEventListener("click", onOverlayClick);

      // If collapse is open or mid-transition, ensure it is fully closed and
      // that the toggler state/attributes reflect the collapsed state. This
      // avoids leaving inline styles or classes that prevent future toggles.
      try {
        if (bs && bs.Collapse) {
          const inst =
            bs.Collapse.getInstance(el) ||
            new bs.Collapse(el, { toggle: false });
          inst.hide();
        }
      } catch (e) {
        // fall through to DOM cleanup
      }

      // DOM cleanup to guarantee a clean collapsed state for non-Bootstrap
      // or after programmatic hide.
      el.classList.remove("show", "collapsing");
      el.style.display = "";
      el.style.height = "";

      if (toggler) {
        toggler.classList.add("collapsed");
        toggler.setAttribute("aria-expanded", "false");
      }

      // Listen for bootstrap collapse events so we can show/hide overlay
      try {
        el.addEventListener("show.bs.collapse", showOverlay);
        el.addEventListener("hide.bs.collapse", hideOverlay);
      } catch (e) {
        // ignore if events aren't supported in this env
      }

      // Cleanup listeners and overlay when this effect re-runs/unmounts
      return () => {
        try {
          // Ensure overlay is hidden on navigation or unmount
          hideOverlay();
          el.removeEventListener("show.bs.collapse", showOverlay);
          el.removeEventListener("hide.bs.collapse", hideOverlay);
        } catch (e) {}
        overlay.removeEventListener("click", onOverlayClick);
        // leave overlay in DOM so it can be reused across navigations
      };
    }, [location]);

    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
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

          {/* Keep the brand/logo outside the collapsing menu so it's always visible on mobile */}
          <Link className="navbar-brand companyNavLogo" to="/">
            <img
              src="/img/logo.png"
              className="d-inline-block align-top"
              id="logo"
              alt="brand logo"
              decoding="async"
              loading="eager"
              fetchpriority="high"
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-center ms-auto">
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
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App app-flex-wrapper">
        {/* Navbar! */}
        <NavbarComp />

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
            <div className="row justify-content-between align-items-center mb-2 py-4 px-2 shadow footerCtaCard">
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
            <div className="row justify-content-center pb-2 contact-info">
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
                  © 2022 Quintela Group LLC. 7722 Oak Moss Dr, Spring, TX 77379
                  · (844) 428-2924 ·{" "}
                  <a href="mailto:hello@quintela.io" className="text-info">
                    hello@quintela.io
                  </a>
                </p>
                <p className="mb-1">
                  <a
                    href="/no-privacy-policy-on-this-site"
                    className="text-info"
                  >
                    Privacy Policy
                  </a>{" "}
                  ·{" "}
                  <a
                    href="/no-cookie-policy-on-this-site"
                    className="text-info"
                  >
                    Cookie Policy
                  </a>
                </p>
                <p className="mb-1">
                  This is NOT Quintela Group's official website!
                </p>
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
