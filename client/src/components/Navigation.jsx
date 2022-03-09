import React from "react";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <div>
      <div className="navigation">
        <div className="left">
          <h3 className="logo">David Ortiz: Web Developer</h3>
        </div>
        <div className="right">
          <div className="pages">
            <ul>
              <li>About</li>
              <li>Portfolio</li>
              <li>Resume</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* <div className="hamburger">
            <span className="top-burger"></span>
            <span className="middle-burger"></span>
            <span className="bottom-burger"></span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
