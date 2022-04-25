import React from "react";
import CV from "../../assets/davidortizresume.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
      <a href="/blog" className="btn">
        See My Blog!
      </a>
    </div>
  );
}
