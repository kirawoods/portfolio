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
      isMouseInsideFeatured: false,
      isMouseInsideMastermind: false,
      isMouseInsideHelperHelper: false,
    };
  }
  getInitialState() {
    return {
      isMouseInsideFeatured: false,
      isMouseInsideMastermind: false,
      isMouseInsideHelperHelper: false,
    };
  }
  mouseEnterFeatured = () => {
    this.setState({ isMouseInsideFeatured: true });
  };

  mouseLeaveFeatured = () => {
    this.setState({ isMouseInsideFeatured: false });
  };

  mouseEnterMastermind = () => {
    this.setState({ isMouseInsideMastermind: true });
  };

  mouseLeaveMastermind = () => {
    this.setState({ isMouseInsideMastermind: false });
  };

  mouseEnterHelperHelper = () => {
    this.setState({ isMouseInsideHelperHelper: true });
  };

  mouseLeaveHelperHelper = () => {
    this.setState({ isMouseInsideHelperHelper: false });
  };

  render() {
    return (
      <div className="PortfolioSection">
        <div className="portfolio-header">PORTFOLIO</div>
        <div className="horizontal-line"></div>

        <div
          className="featured-project"
          onMouseEnter={this.mouseEnterFeatured}
          onMouseLeave={this.mouseLeaveFeatured}
        >
          {this.state.isMouseInsideFeatured ? (
            <div className="featured-site-links-container">
              <a
                href="https://sfrestaurants.netlify.app/"
                target="blank"
                className="featured-site-link-left"
              >
                <div className="featured-link-text">GO TO SITE</div>
              </a>
              <a
                href="https://github.com/kirawoods/sf-restaurant-safety"
                target="blank"
                className="featured-site-link-right"
              >
                <div className="featured-link-text">GO TO CODE</div>
              </a>
            </div>
          ) : (
            <img src={sfrestaurants} />
          )}
        </div>
        <div className="other-projects-container">
          <div
            className="project mastermind-container"
            onMouseEnter={this.mouseEnterMastermind}
            onMouseLeave={this.mouseLeaveMastermind}
          >
            {this.state.isMouseInsideMastermind ? (
              <div className="mastermind-site-links-container">
                <a
                  href="https://mastermindkw.netlify.app/"
                  target="blank"
                  className="site-link"
                >
                  <div className="link-text">GO TO SITE</div>
                </a>
                <a
                  href="https://github.com/kirawoods/mastermind"
                  target="blank"
                  className="site-link"
                >
                  <div className="link-text">GO TO CODE</div>
                </a>
              </div>
            ) : (
              <img className="mastermind-logo" src={mastermind} />
            )}
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
          <div
            className="project helper-helper-container"
            onMouseEnter={this.mouseEnterHelperHelper}
            onMouseLeave={this.mouseLeaveHelperHelper}
          >
            {this.state.isMouseInsideHelperHelper ? (
              <div>
                <a
                  href="https://github.com/kirawoods/mastermind"
                  target="blank"
                  className="site-link"
                >
                  <div className="link-text"> GO TO SITE</div>
                </a>
                <a
                  href="https://github.com/kirawoods/mastermind"
                  target="blank"
                  className="site-link"
                >
                  <div className="link-text"> GO TO CODE</div>
                </a>
              </div>
            ) : (
              <a href="https://helperhelper.netlify.app/" target="blank">
                <img className="helper-helper-logo" src={helperhelper} />
              </a>
            )}
          </div>
        </div>

        <Link className="portfolio-button" to="/portfolio">
          MORE PROJECTS
        </Link>
      </div>
    );
  }
}
