import React from "react";
import "./blogEntries.css";
import { blogData } from "./blogData";
import { AiOutlineHome } from "react-icons/ai";

export default function BlogEntries() {
  return (
    <div>
      <div className="container blog__entries">
        {blogData.map((entry) => (
          <article key={entry.id} className="container blog-entry">
            <h1>{entry.title}</h1>
            <h5>{entry.subtitle}</h5>
            <p>{entry.body}</p>
          </article>
        ))}
      </div>
      <div className="home__button">
        <a href="/">
          <AiOutlineHome />
        </a>
      </div>
    </div>
  );
}
