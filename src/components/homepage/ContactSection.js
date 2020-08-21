import React from "react";
import "./ContactSection.css";

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
      </div>
    </div>
  );
}
