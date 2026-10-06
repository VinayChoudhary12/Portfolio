
import React, { useRef } from "react";
import "./Contact.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".contactHeader", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".contactInfo",
          {
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".contactFormBox",
          {
            x: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".contactItem",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.4"
        );
    },
    {
      scope: contactRef,
    }
  );

  return (
    <section id="contact" ref={contactRef}>

      {/* ================= HEADER ================= */}

      <div className="contactHeader">

        <span className="contactTag">
          &lt; CONTACT /&gt;
        </span>

        <h1>
          Let's Connect &amp; <span>Build Together.</span>
        </h1>

        <p>
          Have an idea, project, or opportunity?
          <br />
          Let's turn it into something amazing.
        </p>

        <div className="contactLine"></div>

      </div>


      {/* ================= CONTENT ================= */}

      <div className="contactContent">

        {/* LEFT */}

        <div className="contactInfo">

          <h2>
            Let's create
            <br />
            something <span>great.</span>
          </h2>

          <p className="contactDescription">
            I'm always open to discussing new projects, creative ideas,
            opportunities and ways we can work together.
          </p>


          <div className="contactDetails">

            <div className="contactItem">

              <div className="contactIcon">
                @
              </div>

              <div>
                <small>EMAIL</small>
                <p>Let's connect through email</p>
              </div>

            </div>


            <div className="contactItem">

              <div className="contactIcon">
                ↗
              </div>

              <div>
                <small>LINKEDIN</small>
                <p>Let's connect professionally</p>
              </div>

            </div>


            <div className="contactItem">

              <div className="contactIcon">
                &lt;/&gt;
              </div>

              <div>
                <small>GITHUB</small>
                <p>Check out my projects</p>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT FORM */}

        <div className="contactFormBox">

          <form
            action="https://formspree.io/f/xyzvapaa"
            method="post"
          >

            <div className="formHeading">
              <span>START A CONVERSATION</span>

              <h2>
                Send me a message
              </h2>
            </div>


            <div className="formRow">

              <div className="formGroup">
                <label>Name</label>

                <input
                  name="username"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>


              <div className="formGroup">
                <label>Email</label>

                <input
                  name="Email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

            </div>


            <div className="formGroup">

              <label>Message</label>

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="sendButton"
            >
              <span>SEND MESSAGE</span>

              <span className="sendArrow">
                ↗
              </span>
            </button>

          </form>

        </div>

      </div>


      {/* ================= FOOTER ================= */}

      <div className="contactBottom">

        <span>
          HAVE AN IDEA?
        </span>

        <span>
          LET'S MAKE IT REAL.
        </span>

      </div>

    </section>
  );
};

export default Contact;