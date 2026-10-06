import React, { useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Skills from "./components/Skills/Skills.jsx";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useEffect(() => {

    // Refresh ScrollTrigger after all sections are rendered
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };

  }, []);

  return (
    <div className="app">

      <Nav />

      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

    </div>
  );
};

export default App;