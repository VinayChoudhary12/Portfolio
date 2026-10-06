
import React from "react";
import "./Home.css";

import Men from "../../assets/My_photo.jpg";
import { Typewriter } from "react-simple-typewriter";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".line1", {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        ".line2",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".line3",
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".homeDescription",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .from(
        ".btn-parent",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

    gsap.from(".rightHome", {
      x: 150,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(".floating-element", {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
      delay: 0.5,
    });
  });

  return (
    <section id="home">

      {/* Background decorative elements */}
      <div className="homeGlow glowOne"></div>
      <div className="homeGlow glowTwo"></div>

      <div className="floating-element codeSymbol">&lt;/&gt;</div>
      <div className="floating-element curlySymbol">{"{ }"}</div>
      <div className="floating-element dotSymbol"></div>

      {/* LEFT SIDE */}
      <div className="leftHome">
        <div className="homeDetails">

          <div className="line1">
            I'M
          </div>

          <div className="line2">
            VINAY
          </div>

          <div className="line3">
            <Typewriter
              className="typewriter"
              loop={true}
              words={[
                "A MERN STACK DEVELOPER",
                "A SOFTWARE ENGINEER",
                "A PROGRAMMER",
              ]}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={45}
              delaySpeed={1000}
            />
          </div>

          <p className="homeDescription">
            I build modern, responsive and interactive web applications
            using modern technologies and clean development practices.
          </p>

          <div className="btn-parent">
            <button
              className="btn hologram"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span data-text="Hire Me">Hire Me</span>
              <div className="scan-line"></div>
            </button>

            <button
              className="outlineBtn"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </button>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="rightHome">

        <div className="imageWrapper">

          <div className="imageRing ringOne"></div>
          <div className="imageRing ringTwo"></div>

          <div className="imageGlow"></div>

          <img
            src={Men}
            alt="Vinay - Software Engineer"
          />

          <div className="techBadge badgeOne">
            &lt;/&gt;
          </div>

          <div className="techBadge badgeTwo">
            {"{ }"}
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
