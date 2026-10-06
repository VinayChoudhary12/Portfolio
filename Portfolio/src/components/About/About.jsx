import React from "react";
import "./About.css";

import Card from "../Card/Card";

import mern from "../../assets/NEW_MERN.png";
import DSA from "../../assets/DSA2.0.png";
import Python from "../../assets/python_update.jpeg";

const About = () => {
  return (
    <section id="about">

      {/* Section Heading */}
      <div className="aboutHeading">
        <span className="headingTag">&lt; ABOUT /&gt;</span>

        <h1>ABOUT ME</h1>

        <p>
          A little more about me, my education and technical skills
        </p>

        <div className="headingLine">
          <span></span>
        </div>
      </div>


      {/* LEFT SECTION */}
      <div className="leftAbout">

        <div className="circle-line">
          <div className="circle"></div>

          <div className="line"></div>

          <div className="circle"></div>

          <div className="line"></div>

          <div className="circle"></div>
        </div>


        <div className="aboutDetails">

          {/* Personal Info */}
          <div className="personalInfo">

            <h1>Personal Info</h1>

            <ul>
              <li>
                <p>
                  <span>NAME</span>: VINAY
                </p>
              </li>

              <li>
                <p>
                  <span>AGE</span>: 21 YEARS
                </p>
              </li>

              <li>
                <p>
                  <span>GENDER</span>: MALE
                </p>
              </li>

              <li>
                <p>
                  <span>LANGUAGE KNOWN</span>: HINDI, ENGLISH
                </p>
              </li>
            </ul>

          </div>


          {/* Education */}
          <div className="education">

            <h1>Education</h1>

            <ul>
              <li>
                <p>
                  <span>DEGREE</span>: B.TECH
                </p>
              </li>

              <li>
                <p>
                  <span>BRANCH</span>: COMPUTER SCIENCE AND ENGINEERING
                </p>
              </li>

              <li>
                <p>
                  <span>CGPA</span>: 7.97
                </p>
              </li>

              <li>
                <p>
                  <span>GRADUATING YEAR</span>: 2026
                </p>
              </li>
            </ul>

          </div>


          {/* Skills */}
          <div className="skills">

            <h1>Skills</h1>

            <ul>
              <li>
                <p>MERN STACK DEVELOPER</p>
              </li>

              <li>
                <p>C, C++, PYTHON</p>
              </li>

              <li>
                <p>DSA</p>
              </li>
            </ul>

          </div>

        </div>
      </div>


      {/* RIGHT SECTION */}
      <div className="rightAbout">

        <Card
          title="MERN STACK"
          image={mern}
        />

        <Card
          title="C, C++, PYTHON"
          image={Python}
        />

        <Card
          title="DSA"
          image={DSA}
        />

      </div>

    </section>
  );
};

export default About;