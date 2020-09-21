import React, { Component } from "react";
import "./PortfolioSection.css";
import { Link } from "react-router-dom";
import sfrestaurants from "../../sfrestaurantmockup.png";
import mastermind from "../../mastermind.png";
import helperhelper from "../../helperhelper.png";

export class PortfolioSection extends Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false,
    };
  }
  getInitialState() {
    return {
      isMouseInside: false,
    };
  }
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  };
  render() {
    return (
      <div className="PortfolioSection">
        <div className="portfolio-header">PORTFOLIO</div>
        <div className="horizontal-line"></div>

        <div
          className="featured-project"
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          {this.state.isMouseInside ? (
            <div className="featured-site-links-container">
              <a
                href="https://sfrestaurants.netlify.app/"
                target="blank"
                className="featured-site-link"
              >
                Go to Site
              </a>
              <a
                href="https://github.com/kirawoods/sf-restaurant-safety"
                target="blank"
                className="featured-site-link"
              >
                Go to Code
              </a>
            </div>
          ) : (
            <img src={sfrestaurants} />
          )}
        </div>
        <div className="other-projects-container">
          <div className="project mastermind-container">
            <a href="https://mastermindkw.netlify.app/" target="blank">
              <img className="mastermind-logo" src={mastermind} />
            </a>
          </div>

          <div className="project advo-container">
            <div className="advo-text">Advo</div>
            <div className="advo-description">
              Advo empowers young adults to take charge of their mental health
              by using their own data to improve their wellbeing. It's currently
              in stealth mode so I won't publicly share the code. If you're
              interested in learning more, please contact me.
            </div>
          </div>
          <div className="project">
            <a href="https://helperhelper.netlify.app/" target="blank">
              <img className="helper-helper-logo" src={helperhelper} />
            </a>
          </div>
        </div>

        <Link className="portfolio-button" to="/portfolio">
          MORE PROJECTS
        </Link>
      </div>
    );
  }
}
