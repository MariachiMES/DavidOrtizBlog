import React from "react";
import "./videos.css";
import ReactPlayer from "react-player";
import ReunifyVID from "../../assets/Reunify.mov";
const data = [
  {
    id: 1,
    title: "Reunify",
    video: ReunifyVID,
    description: `Reunify securely automates much of the workflow for ORR case managers including automatically generated release requests, one-click address verification through Google Earth, Google Maps and Smarty Streets, Team tracking and role management for administrators`,
  },
];

export default function Videos() {
  return (
    <section id="videos">
      <h5>Have a Look!</h5>
      <h2>Video Demonstrations</h2>

      <div className="container videos__container">
        {data.map(({ id, title, video, description }) => {
          return (
            <article id={title} key={id} className="video">
              <div className="video__head">
                <ReactPlayer
                  url={video}
                  controls="true"
                  width="fit-content"
                  height="fit-content"
                />
                <h3>{title}</h3>
              </div>
              <div className="video__description">
                <h5>{description}</h5>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
