import React from "react";
import "./Footer.css";
import linkedinLogo from "../linkedin.png";
import githubLogo from "../github.png";
import instagramLogo from "../instagram.png";

export function Footer() {
  return (
    <div className="Footer">
      <div className="footer-contact-info">
        719-651-7486 | kawoods826@gmail.com | github.com/kirawoods
      </div>
      <div className="social-images-container">
        <a href="https://www.linkedin.com/in/kirawoods/" target="blank">
          <img className="footer-social-logo" src={linkedinLogo} />
        </a>
        <a href="https://github.com/kirawoods" target="blank">
          <img className="footer-social-logo" src={githubLogo} />
        </a>
        <a href="https://www.instagram.com/climbcraftcode/" target="blank">
          <img className="footer-social-logo" src={instagramLogo} />
        </a>
      </div>
    </div>
  );
}
