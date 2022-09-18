import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './css/App.css';
import { navbarToggle, onLoadNav } from './CheckNavbarToggle';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import InterviewGuide from './InterviewGuide';
import AssessmentTechnology from './AssessmentTechnology';
import CompetencyModel from './CompetencyModel';
import PsychobabbleZone from './PsychobabbleZone';
import HRDiverse from './articles/HRDiverse';
import ReducingDiscrimination from './articles/ReducingDiscrimination';
import DigitalInterview from './articles/DigitalInterview';
import ProInterview from './articles/ProInterview';
import ErrorPage from './ErrorPage';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      {/* Navbar! */}
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <a onLoad={onLoadNav} className="navbar-toggler companyNavLogo" id="logoCollapsed" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" href="/">
            <img src="img/logo.png" className="d-inline-block align-top" id="logo" alt="brand logo"/>
        </a>
        <button onClick={navbarToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <a className="navbar-brand companyNavLogo" id="nonToggledNavbarLogo" href="/">
            <img src="img/logo.png" className="d-inline-block align-top" id="logo" alt="brand logo"/>
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/digital-online-interview-builder">Digital Interview Guides</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/assessments">Assessment Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/competency-model-library">Competency Model Library</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/psychobabble-free-zone">Psych-Free Zone</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content of webpage */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/digital-online-interview-builder" element={<InterviewGuide/>}/>
          <Route path="/assessments" element={<AssessmentTechnology/>}/>
          <Route path="/competency-model-library" element={<CompetencyModel/>}/>
          <Route path="/psychobabble-free-zone" element={<PsychobabbleZone/>}/>
          <Route path="/articles/how-diverse-are-hr-vendor-executive-teams" element={<HRDiverse/>}/>
          <Route path="/articles/reducing-discrimination-with-digital-interview-guides" element={<ReducingDiscrimination/>}/>
          <Route path="/articles/the-two-ways-digital-interview-guides-keep-you-legally-compliant" element={<DigitalInterview/>}/>
          <Route path="/articles/interview-like-a-pro-how-to-interview-candidates-with-confidence" element={<ProInterview/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>

      {/* Footer! */}
      <footer className="text-center">
        <div>
          {/* Blue div (ready to get started) */}
          <div id="footerCard" className="clearfix bg-secondary">
            <div className="float-start">
                Ready to Get Started?
            </div>
            <div className="float-end">
              <a href="/contact-us"><button type="button">Sign Up Today</button></a>
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
                  <a href="https://www.facebook.com/quintelagroup"><i className="bi-facebook"></i></a>   <a href="https://twitter.com/quintela_io"><i className="bi-twitter"></i></a>
                </div>
                <p>© 2022 Quintela Group LLC. 7722 Oak Moss Dr, Spring, TX 77379 · (844) 428-2924 · <a href="mailto:hello@quintela.io">hello@quintela.io</a></p>
                <p><a href="/no-privacy-policy-on-this-site">Privacy Policy</a> · <a href="/no-cookie-policy-on-this-site">Cookie Policy</a></p>
                <p><a href="www.polinatik.com">By: Polina Tikhomirova</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;