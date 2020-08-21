import React from "react";
import "./AboutSection.css";
import { Link } from "react-router-dom";
import avatar from "../../womanprogrammer.png";

export function AboutSection() {
  return (
    <div className="AboutSection">
      <div className="text-section">
        <div className="big-letter">k</div>
        <div className="about-header">Hi, I'm Kira. I make things.</div>
        <div className="about-text">
          I'm a self-taught software engineer and occupational therapist
          leveraging technology to re-imagine the healthcare space. My current
          projects include automation tooling to enable young adults to manage
          their holistic mental health through data. I also make online games
          that help children and adults improve their executive functioning.
        </div>
        <Link className="about-button" to="/about">
          LEARN MORE
        </Link>
      </div>
      <img className="avatar-image" src={avatar} />
    </div>
  );
}
