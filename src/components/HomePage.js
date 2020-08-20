import React from "react";
import "./HomePage.css";
import { AboutSection } from "./homepage/AboutSection";
import { ContactSection } from "./homepage/ContactSection";
import { PortfolioSection } from "./homepage/PortfolioSection";

export function HomePage() {
  return (
    <div className="HomePage">
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
