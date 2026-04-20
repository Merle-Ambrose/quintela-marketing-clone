import "./SystemIntegrations.css";

import React from "react";
import { SYSTEM_LOGOS } from "../../constants/systemIntegrationsConstants";

function SystemIntegrations() {
  return (
    <div className="systemIntegrations">
      <div className="container">
        <h1 className="text-center" id="integrationCompanies">
          Systems Integrations
        </h1>
        <div className="row row-cols-auto justify-content-evenly align-items-center g-4">
          {SYSTEM_LOGOS.map(({ src, alt }) => (
            <div key={src} className="col d-flex justify-content-center">
              <img src={src} alt={alt} className="integrationCompaniesImg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SystemIntegrations;
