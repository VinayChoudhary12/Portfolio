import React from "react";
import "./Card2.css";

function Card2({ title, image, tech, liveUrl, githubUrl, featured = false }) {
  return (
    <article className={`projectCard ${featured ? "featured" : ""}`}>

      <div className="projectImage">

        <img
          src={image}
          alt={title}
        />

        {/* Hover Overlay */}
        <div className="projectOverlay">

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="viewProject"
          >
            VIEW PROJECT
            <span>↗</span>
          </a>

        </div>

      </div>

      <div className="projectInfo">

        <div className="projectText">
          <h2>{title}</h2>
          <p>{tech}</p>
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="projectArrow"
          title="View GitHub"
        >
          ↗
        </a>

      </div>

    </article>
  );
}

export default Card2;