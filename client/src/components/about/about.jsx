import React from "react";
import "./about.css";
import { aboutMeData, educationData, hobbiesData } from "../data";
import AboutList from "../aboutList/aboutList";
import { useState, useEffect } from "react";
import { FaAward as awardIcon } from "react-icons/fa";
import { FaUsers as userIcon } from "react-icons/fa";
import { VscFolderLibrary as folderIcon } from "react-icons/vsc";

export default function About() {
  const [selected, setSelected] = useState("About Me");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "About Me",
      title: "About Me",
      subtitle: "Nice To Meet You",
      icon: awardIcon,
    },
    {
      id: "Education",
      title: "Education",
      subtitle: "Texas State 2006",
      icon: userIcon,
    },
    {
      id: "Hobbies",
      title: "Hobbies",
      subtitle: "Artist/Musician",
      icon: folderIcon,
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "About Me":
        setData(aboutMeData);
        break;
      case "Education":
        setData(educationData);
        break;
      case "Hobbies":
        setData(hobbiesData);
        break;
    }
  }, [selected]);

  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={require("../../assets/AboutMeCropped.png")}
              alt="About Image"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {list.map((item) => (
              <AboutList
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </div>
          {console.log(data.description)}
          {data.map(({ description, id }) => (
            <p key={id}>{description}</p>
          ))}

          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
}
