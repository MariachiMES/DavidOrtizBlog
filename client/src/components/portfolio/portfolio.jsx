import React from "react";
import "./portfolio.css";
import EnzoAppIMG from "../../assets/EnzoApp.png";
import FitnessAppIMG from "../../assets/fitnessTracker.png";
import LaSegundaIMG from "../../assets/LaSegunda.png";
import NoteTakerIMG from "../../assets/noteTaker.png";
import profileManagerIMG from "../../assets/profileManager.png";
import ReunifyLanding from "../../assets/ReunifyLanding.png";
import RockPaperScissorsIMG from "../../assets/RockPaperScissors.jpeg";
import SpellingGameIMG from "../../assets/SpellingGame.png";
import PortfolioIMG from "../../assets/portfolio.png";

//Dataset
const data = [
  {
    id: 1,
    title: "Reunify",
    img: ReunifyLanding,
    github: "https://github.com/MariachiMES/UACTracker3000",
    deployed: "https://uac-tracker-3000.herokuapp.com/",
    video: "",
    description: `Reunify is a full-stack web application written using handlbars.js templating engine, mySQL database, express server, vanilla JavaScript and Material UI CSS framework. Reunify is a CRUD application for managing data for case managers engaged in ORR services.  I am solely responsible for the product management, UI/UX design, graphic design and code.  Reunify leverages a 3rd party API for address verification, an administrator view for managing team lead, team, employee and case data. `,
    features: `-Restricted access managed by the program director
     -Administrative privliges for Team Leads to create new cases, assign case managers to a case,
     view the Census of all cases, view a single case mamager's workload, assign them a team lead and manage their priviliges
     -Caseload view for the logged in user to see an overview of their assigned cases
     -A Dasbhoard view to view a single case, edit their demographics, sponsor information, utilize the address verification API,
     generate a automatically formatted release request as well as view a timeline of the case status, and enter exceptions for
     case coordination.`,
    tech: "SQL Database, Handlbars Rendering Engine, Smarty Streets API, Bulma CSS Framework ",
  },
  {
    id: 6,
    title: "Flash Card Game",
    img: SpellingGameIMG,
    github: "https://github.com/MariachiMES/Axl",
    deployed: "https://mariachimes.github.io/Axl/",
    video: "",
    description:
      "This is a flashcard game designed for children learning to read.  The game utilizes local storage and all assets were drawn by me by hand.  It was created using vanilla JavaScript and Vanilla CSS.",
    features: "",
    tech: "",
  },
  {
    id: 5,
    title: "La Segunda",
    img: LaSegundaIMG,
    github: "https://github.com/MariachiMES/la-segunda/",
    deployed: "https://mariachimes.github.io/la-segunda/",
    video: "",
    description:
      "In-Development: La Segunda is a Bartique and Art Gallery in San Antonio, TX.  This front-end web app was coded in ReactJS, and makes use of a React Parallax library, and some other effects for dynamic loading.",
    features: "",
    tech: "",
  },
  {
    id: 2,
    title: "Parallax Portfolio",
    img: PortfolioIMG,
    github: "https://github.com/MariachiMES/Portfolio3.0",
    deployed: "https://mariachimes.github.io/Portfolio3.0/",
    video: "",
    description:
      "An early portfolio made using vanilla HTML/CSS/JavaScript and features a parallax scroll effect.  I created the UI/UX and the images used.",
    features: "",
    tech: "",
  },

  {
    id: 3,
    title: "Toddler Budget Web App",
    img: EnzoAppIMG,
    github: "https://github.com/MariachiMES/EnzosAllowance",
    deployed: "https://mariachimes.github.io/EnzosAllowance/",
    video: "",
    description:
      "A reward app I made for my 4 year old son. He is able to enjoy the visual feedback of the interface, which uses some basic javascript/CSS calculations and event listeners in conjunction with local storage.",
    features: "",
    tech: "",
  },
  {
    id: 7,
    title: "Node.js Employee Manager",
    img: profileManagerIMG,
    github: "https://github.com/MariachiMES/EmployeeManager",
    deployed: "https://watch.screencastify.com/v/sJLMOEj3Wbu61FTGmoR2",
    video: "",
    description:
      "An employee management application written in node.js. The 'Live Demo' is a video demonstration of the application running on a local server in the terminal. ",
    features: "",
    tech: "",
  },
  {
    id: 8,
    title: "Fitness Tracker",
    img: FitnessAppIMG,
    github: "https://github.com/MariachiMES/FitnessTracker",
    deployed:
      "https://workout-tracker-3000.herokuapp.com/?id=61c3a073b8703000168d6230",
    video: "",
    description:
      "A Fullstack application that utilizes vanilla JavaScript/CSS and MongoDB.  It can be used to track workouts and weight loss by entering datapoints from workouts.",
    features: "",
    tech: "",
  },
  {
    id: 9,
    title: "Note Taker",
    img: NoteTakerIMG,
    github: "https://github.com/MariachiMES/NoteTaker",
    deployed: "https://mariachimes.github.io/NoteTaker/",
    video: "",
    description:
      "A web application utilizing an express server to take notes, save notes and delete notes to JSON file using node.js",
    features: "",
    tech: "",
  },

  {
    id: 4,
    title: "Rock, Paper, Scissors",
    img: RockPaperScissorsIMG,
    github: "https://github.com/MariachiMES/RockPaperScissorsGame",
    deployed: "https://mariachimes.github.io/RockPaperScissorsGame/",
    video: "",
    description:
      "My first web application, which made use of alerts and JavaScript logic.  The game features some easter eggs, and randomized smack talk.",
    features: "",
    tech: "",
  },
];

export default function Portfolio() {
  return (
    <div>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2> Portfolio</h2>

        <div className="container portfolio__container">
          {data.map(({ id, img, title, github, deployed, description }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={img} alt="Reunify" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target="_blank" className="btn">
                    Github
                  </a>
                  <a href={deployed} target="_blank" className="btn">
                    Live Demo
                  </a>
                </div>
                <h5>{description}</h5>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
