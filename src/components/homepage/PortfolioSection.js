import React from "react";
import "./PortfolioSection.css";
import { Link } from "react-router-dom";
import sfrestaurants from "../../sfrestaurantmockup.png";
import mastermind from "../../mastermind.png";
import helperhelper from "../../helperhelper.png";

export function PortfolioSection() {
  return (
    <div className="PortfolioSection">
      <div className="portfolio-header">PORTFOLIO</div>
      <div className="horizontal-line"></div>
      <div className="featured-project">
        <img src={sfrestaurants} />
      </div>
      <div className="other-projects-container">
        <div className="project mastermind-container">
          <img className="mastermind-logo" src={mastermind}></img>
        </div>
        <div className="project advo-container">
          <div className="advo-text">Advo</div>
        </div>
        <div className="project">
          <img className="helper-helper-logo" src={helperhelper} />
        </div>
      </div>

      <Link className="portfolio-button" to="/portfolio">
        MORE PROJECTS
      </Link>
    </div>
  );
}
