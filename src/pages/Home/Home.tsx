import "./Home.scss";

import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function Home() {
  return (
    <div>
      <PageHeader heading="Home" isHero />
      <div className="container py-5">
        <p>Home page placeholder.</p>
      </div>
    </div>
  );
}
