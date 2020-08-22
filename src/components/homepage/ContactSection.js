import React from "react";
import "./ContactSection.css";
import phone from "../../phone.png";
import email from "../../email.png";
import arrow from "../../uparrow.png";

export function ContactSection() {
  return (
    <div className="ContactSection">
      <div className="contact-section-text-container">
        <div className="contact-header">GET IN TOUCH</div>
        <div className="horizontal-line"></div>
        <div className="contact-subheading">
          I'm currently available for freelance work and full-time roles.
        </div>
        <div className="contact-section-text">
          If you have a project you want to get started, think I'd be a good fit
          for your engineering team, or just want to say hey, then get in touch.
        </div>
        <div className="contact-info-container">
          <img src={phone} className="phone-icon" />
          <div className="contact-info">719-651-7486</div>
        </div>
        <div className="contact-info-container">
          <img src={email} className="email-icon" />
          <div className="contact-info">kawoods826@gmail.com</div>
        </div>
        <a href="#top">
          <img src={arrow} className="back-to-top-button" />
        </a>
      </div>
    </div>
  );
}
