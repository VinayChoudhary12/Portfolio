// 

import React from "react";
import Card2 from "../Card2/Card2.jsx";
import "./Projects.css";

import va from "../../assets/va.png";
import fw from "../../assets/fw.png";
import br from "../../assets/br.png";
import ise from "../../assets/ise.png";
import tti from "../../assets/tti.png";
import cb from "../../assets/cb.png";

const Projects = () => {
  return (
    <section id="projects">

      {/* Heading */}
      <div className="projectsHeading">
        <span className="headingTag">&lt; PROJECTS /&gt;</span>

        <h1>MY PROJECTS</h1>

        <p>
          A collection of projects built using MERN Stack and AI
        </p>

        <div className="headingLine">
          <span></span>
        </div>
      </div>


      {/* Projects Grid */}
      <div className="projectsGrid">

        <Card2
  title="VIRTUAL ASSISTANT"
  image={va}
  tech="React • Node.js • MongoDB • AI"
  liveUrl="https://your-live-project.com"
  githubUrl="https://github.com/yourusername/virtual-assistant"
  featured={true}
/>

<Card2
  title="AI POWERED FITNESS WEBSITE"
  image={fw}
  tech="React • Node.js • MongoDB • AI"
  liveUrl="https://your-live-project.com"
  githubUrl="https://github.com/yourusername/fitness-project"
/>

       <Card2
  title="AI CHATBOT"
  image={cb}
  tech="React • Node.js • Express • AI"
  liveUrl="YOUR_LIVE_URL"
  githubUrl="YOUR_GITHUB_URL"
/>

<Card2
  title="AI TEXT TO IMAGE"
  image={tti}
  tech="React • Node.js • AI API"
  liveUrl="YOUR_LIVE_URL"
  githubUrl="YOUR_GITHUB_URL"
/>

<Card2
  title="AI BACKGROUND REMOVER"
  image={br}
  tech="React • Node.js • AI API"
  liveUrl="YOUR_LIVE_URL"
  githubUrl="YOUR_GITHUB_URL"
/>

<Card2
  title="IMAGE SEARCH ENGINE"
  image={ise}
  tech="React • API • JavaScript"
  liveUrl="YOUR_LIVE_URL"
  githubUrl="YOUR_GITHUB_URL"
/>
       
      </div>

    </section>
  );
};

export default Projects;