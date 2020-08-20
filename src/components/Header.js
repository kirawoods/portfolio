import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="Header">
      <Link className="name" to="/">
        KIRA WOODS
      </Link>
      <div className="navigation-menu">
        <Link className="menu-item" to="/about">
          About
        </Link>
        <Link className="menu-item" to="/portfolio">
          Portfolio
        </Link>
        <Link className="menu-item" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  );
}
