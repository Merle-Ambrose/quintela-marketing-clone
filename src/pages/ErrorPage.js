import React from "react";

function ErrorPage() {
  return (
    <div className="container contentSection">
      <h1 className="mb-3 display-5">No Results Found</h1>
      <p className="text-muted content-paragraph">
        The page you requested could not be found. Use the navigation above to
        locate what you need.
      </p>
    </div>
  );
}

export default ErrorPage;
