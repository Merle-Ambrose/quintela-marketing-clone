import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";
import { NAV_ITEMS } from "../../constants/appNavigation";
import { buildAppRoutes } from "../../routes/appRoutes";

import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "../Loader/Loader";
import Home from "../Home/Home";
import InterviewGuide from "../InterviewGuide/InterviewGuide";
import AssessmentTechnology from "../AssessmentTechnology/AssessmentTechnology";
import CompetencyModel from "../CompetencyModel/CompetencyModel";
import PsychobabbleZone from "../PsychobabbleZone/PsychobabbleZone";
import Contact from "../Contact/Contact";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
const HRDiverse = React.lazy(
  () => import("../../components/Article/articles/HRDiverse"),
);
const ReducingDiscrimination = React.lazy(
  () => import("../../components/Article/articles/ReducingDiscrimination"),
);
const DigitalInterview = React.lazy(
  () => import("../../components/Article/articles/DigitalInterview"),
);
const ProInterview = React.lazy(
  () => import("../../components/Article/articles/ProInterview"),
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

// NavbarComp is defined at module scope (outside of App) intentionally.
// If it were defined inside App's function body, React would see a brand-new
// component type on every App re-render, unmounting and remounting the entire
// navbar, destroying DOM nodes, flickering, and tearing down event listeners.
// At module scope, React recognises it as the same component across renders.
function NavbarComp() {
  const location = useLocation();

  useEffect(() => {
    const el = document.getElementById("navbarNav");
    if (!el) return;

    const toggler = document.querySelector(".navbar-toggler");
    const bs = (window as any).bootstrap;

    const overlayId = "navOverlay";
    let overlay = document.getElementById(overlayId);
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = overlayId;
      overlay.className = "nav-overlay";
      document.body.appendChild(overlay);
    }

    const showOverlay = () => {
      overlay!.classList.add("show");
      document.body.classList.add("nav-open");
    };

    const hideOverlay = () => {
      overlay!.classList.remove("show");
      document.body.classList.remove("nav-open");
    };

    const onOverlayClick = () => {
      try {
        if (bs && bs.Collapse) {
          const inst =
            bs.Collapse.getInstance(el) ||
            new bs.Collapse(el, { toggle: false });
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

    try {
      if (bs && bs.Collapse) {
        const inst =
          bs.Collapse.getInstance(el) || new bs.Collapse(el, { toggle: false });
        inst.hide();
      }
    } catch (e) {}

    el.classList.remove("show", "collapsing");
    (el as HTMLElement).style.display = "";
    (el as HTMLElement).style.height = "";

    if (toggler) {
      toggler.classList.add("collapsed");
      toggler.setAttribute("aria-expanded", "false");
    }

    try {
      el.addEventListener("show.bs.collapse", showOverlay);
      el.addEventListener("hide.bs.collapse", hideOverlay);
    } catch (e) {}

    return () => {
      try {
        hideOverlay();
        el.removeEventListener("show.bs.collapse", showOverlay);
        el.removeEventListener("hide.bs.collapse", hideOverlay);
      } catch (e) {}
      overlay!.removeEventListener("click", onOverlayClick);
    };
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
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

        <Link className="navbar-brand companyNavLogo" to="/">
          <img
            src="/img/logo.svg"
            className="d-inline-block align-top"
            id="logo"
            alt="brand logo"
            decoding="async"
            loading="eager"
            fetchPriority="high"
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App app-flex-wrapper">
        <NavbarComp />

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

        <footer className="text-center bg-dark text-light pt-4 mt-7">
          <div className="container">
            <div className="row justify-content-between align-items-center mb-2 py-4 px-2 shadow footerCtaCard">
              <div className="col-md-8 col-12 mb-2 mb-md-0 fs-3 fw-bold text-md-start text-start">
                Ready to Get Started?
              </div>
              <div className="col-md-4 col-12 text-md-end text-center">
                <Link
                  to="/contact-us"
                  className="btn btn-light fw-bold px-4 py-2 rounded-pill text-primary"
                >
                  Sign Up Today
                </Link>
              </div>
            </div>

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
                  ·{" "}
                  <a href="tel:+18444282924" className="text-info">
                    (844) 428-2924
                  </a>{" "}
                  ·{" "}
                  <a href="mailto:hello@quintela.io" className="text-info">
                    hello@quintela.io
                  </a>
                </p>
                <p className="mb-1">
                  <Link
                    to="/no-privacy-policy-on-this-site"
                    className="text-info"
                  >
                    Privacy Policy
                  </Link>{" "}
                  ·{" "}
                  <Link
                    to="/no-cookie-policy-on-this-site"
                    className="text-info"
                  >
                    Cookie Policy
                  </Link>
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
