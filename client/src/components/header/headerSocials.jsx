import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/david-ortiz-ba268911b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/MariachiMES" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}
