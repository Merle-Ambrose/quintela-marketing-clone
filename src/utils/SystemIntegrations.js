import React from "react";
import { SYSTEM_LOGOS } from "../constants/systemIntegrationsConstants";

function SystemIntegrations() {
  return (
    <>
      <h1 className="text-center" id="integrationCompanies">
        Systems Integrations
      </h1>
      <div className="container">
        <div className="row justify-content-center">
          {SYSTEM_LOGOS.map(({ src, alt }) => (
            <img
              key={src}
              src={src}
              alt={alt}
              className="col integrationCompaniesImg"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SystemIntegrations;
