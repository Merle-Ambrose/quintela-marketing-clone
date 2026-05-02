import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="container py-5 text-center d-flex flex-column align-items-center gap-2">
      <h1>Page Not Found</h1>
      <p className="mb-0">The page you requested could not be found.</p>
      <Link to="/" className="text-primary text-decoration-none">
        Click here to go back to the homepage.
      </Link>
    </div>
  );
}
