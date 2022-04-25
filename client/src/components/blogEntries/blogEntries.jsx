import React from "react";
import "./blogEntries.css";
import { blogData } from "./blogData";

export default function BlogEntries() {
  return (
    <div>
      <div className="container blog__entries">
        {blogData.map((entry) => (
          <article className="container blog-entry">
            <h1>{entry.title}</h1>
            <h5>{entry.subtitle}</h5>
            <p>{entry.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
