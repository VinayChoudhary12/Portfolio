import React, { useRef } from "react";
import "./Skills.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import model from "../../assets/MERN_LORD.png";
import img10 from "../../assets/C.png";
import img9 from "../../assets/C++.png";
import img8 from "../../assets/Python.png";
import img7 from "../../assets/HTML.png";
import img6 from "../../assets/CSS.png";
import img5 from "../../assets/javaScript.jpeg";
import img4 from "../../assets/React.png";
import img3 from "../../assets/Nodejs.png";
import img2 from "../../assets/ExpressJs.png";
import img1 from "../../assets/MongoDB.png";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  useGSAP(
    () => {
      // GSAP will animate ONLY the heading.
      // slider1 is intentionally not animated by GSAP
      // because its transform is already controlled by CSS.

      gsap.from(".skillsHeading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    {
      scope: skillsRef,
    }
  );

  return (
    <div className="Skills" ref={skillsRef}>

      {/* Skills Heading */}
      <div className="skillsHeading">
        <span>&lt; SKILLS /&gt;</span>

        <h1>MY SKILLS</h1>

        <p>
          Technologies and tools I use to build modern applications
        </p>

        <div className="skillsLine"></div>
      </div>

      {/* Existing 3D Skills */}
      <div
        className="slider1"
        style={{ "--quantity": 10 }}
      >
          <div className="centerModel">
                <img src={model} alt="MERN Developer" />
            </div>
        <div
          className="item"
          style={{ "--position": 1 }}
        >
          <img src={img1} alt="MongoDB" />
        </div>

        <div
          className="item"
          style={{ "--position": 2 }}
        >
          <img src={img2} alt="Express.js" />
        </div>

        <div
          className="item"
          style={{ "--position": 3 }}
        >
          <img src={img3} alt="Node.js" />
        </div>

        <div
          className="item"
          style={{ "--position": 4 }}
        >
          <img src={img4} alt="React" />
        </div>

        <div
          className="item"
          style={{ "--position": 5 }}
        >
          <img src={img5} alt="JavaScript" />
        </div>

        <div
          className="item"
          style={{ "--position": 6 }}
        >
          <img src={img6} alt="CSS" />
        </div>

        <div
          className="item"
          style={{ "--position": 7 }}
        >
          <img src={img7} alt="HTML" />
        </div>

        <div
          className="item"
          style={{ "--position": 8 }}
        >
          <img src={img8} alt="Python" />
        </div>

        <div
          className="item"
          style={{ "--position": 9 }}
        >
          <img src={img9} alt="C++" />
        </div>

        <div
          className="item"
          style={{ "--position": 10 }}
        >
          <img src={img10} alt="C" />
        </div>
      </div>
    </div>
  );
};

export default Skills;