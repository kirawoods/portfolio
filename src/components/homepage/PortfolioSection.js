import React from "react";
import "./PortfolioSection.css";
import { Link } from "react-router-dom";

export function PortfolioSection() {
  return (
    <div className="PortfolioSection">
      <div className="portfolio-header">PORTFOLIO</div>
      <div className="horizontal-line"></div>
      <div className="featured-project"></div>
      <div className="other-projects-container">
        <div className="project"></div>
        <div className="project"></div>
        <div className="project"></div>
      </div>

      <Link className="portfolio-button" to="/portfolio">
        MORE PROJECTS
      </Link>
    </div>
  );
}
