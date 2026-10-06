import React, { useRef } from "react";
import "./Nav.css";

import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {

  const navRef = useRef();
  const menuRef = useRef();
  const mobileRef = useRef();

  /* =========================
     NAVBAR GSAP ANIMATION
  ========================= */

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })

    .from(".logo", {
      x: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    }, "-=0.4")

    .from(".Desktopview a", {
      y: -20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.3")

    .from(".hamburger", {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
    }, "-=0.3");

  });


  /* =========================
     MOBILE MENU
  ========================= */

  const toggleMenu = () => {

    const isOpen =
      mobileRef.current.classList.contains("activemobile");

    if (!isOpen) {

      mobileRef.current.classList.add("activemobile");
      menuRef.current.classList.add("activeham");

      gsap.fromTo(
        ".mobileview a",
        {
          x: 40,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

    } else {

      gsap.to(".mobileview a", {
        x: 30,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        onComplete: () => {

          mobileRef.current.classList.remove(
            "activemobile"
          );

          menuRef.current.classList.remove(
            "activeham"
          );

        },
      });

    }
  };


  const closeMenu = () => {

    mobileRef.current.classList.remove(
      "activemobile"
    );

    menuRef.current.classList.remove(
      "activeham"
    );

  };


  return (

    <nav ref={navRef}>

      {/* LOGO */}

      <Link
        to="home"
        smooth={true}
        duration={1000}
        className="logo"
      >
        PORTFOLIO
      </Link>


      {/* DESKTOP NAV */}

      <ul className="Desktopview">

        <Link
          to="home"
          smooth={true}
          duration={1000}
          spy={true}
          activeClass="active"
        >
          <li>Home</li>
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={1000}
          spy={true}
          activeClass="active"
        >
          <li>About</li>
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={1000}
          spy={true}
          activeClass="active"
        >
          <li>Projects</li>
        </Link>

        <Link
          to="Skills"
          smooth={true}
          duration={1000}
          spy={true}
          activeClass="active"
        >
          <li>Skills</li>
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={1000}
          spy={true}
          activeClass="active"
        >
          <li>Contact</li>
        </Link>

      </ul>


      {/* HAMBURGER */}

      <div
        className="hamburger"
        ref={menuRef}
        onClick={toggleMenu}
      >

        <span className="ham"></span>
        <span className="ham"></span>
        <span className="ham"></span>

      </div>


      {/* MOBILE MENU */}

      <ul
        className="mobileview"
        ref={mobileRef}
      >

        <Link
          to="home"
          smooth={true}
          duration={800}
          onClick={closeMenu}
        >
          <li>Home</li>
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={800}
          onClick={closeMenu}
        >
          <li>About</li>
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={800}
          onClick={closeMenu}
        >
          <li>Projects</li>
        </Link>

        <Link
          to="Skills"
          smooth={true}
          duration={800}
          onClick={closeMenu}
        >
          <li>Skills</li>
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={800}
          onClick={closeMenu}
        >
          <li>Contact</li>
        </Link>

      </ul>

    </nav>
  );
};

export default Nav;