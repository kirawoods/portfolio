import React from "react";
import "./Header.css";

export function Header() {
  return (
    <div className="Header">
      <div className="name">KIRA WOODS</div>
      <div className="navigation-menu">
        <div className="menu-item">Portfolio</div>
        <div className="menu-item">Contact</div>
        <div className="menu-item">Blog</div>
      </div>
    </div>
  );
}
