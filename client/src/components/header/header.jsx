import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./headerSocials";

export default function Header() {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello, I'm</h5>
          <h1>David Ortiz</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={require("../../assets/AboutMeCropped.png")} alt="" />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </div>
  );
}
