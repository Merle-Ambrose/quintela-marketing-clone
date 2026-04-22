import "./SystemIntegrations.css";

import React from "react";
import { SYSTEM_LOGOS } from "../../constants/systemIntegrationsConstants";

function SystemIntegrations() {
  return (
    <section className="systemIntegrations pt-5">
      <div className="container">
        <h2
          className="text-center fw-bold mb-4 text-secondary"
        >
          Systems Integrations
        </h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center align-items-center">
          {SYSTEM_LOGOS.map(({ src, alt }) => (
            <div key={src} className="col d-flex justify-content-center">
              <img src={src} alt={alt} className="integrationCompaniesImg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SystemIntegrations;
