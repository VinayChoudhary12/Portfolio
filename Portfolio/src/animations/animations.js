import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const pageLoadAnimation = () => {

    const tl = gsap.timeline();

    tl.from("nav", {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })

    .from(".homeDetails > *", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"
    }, "-=0.3")

    .from(".rightHome", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5");
};


export const setupScrollAnimations = () => {

    /* =========================
       ABOUT
    ========================= */

    gsap.from(".aboutHeading", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
        },

        y: 60,
        opacity: 0,
        duration: 1,

        ease: "power3.out"
    });


    gsap.from(".circle-line .circle", {
        scrollTrigger: {
            trigger: ".circle-line",
            start: "top 75%",
        },

        scale: 0,
        opacity: 0,

        duration: 0.6,

        stagger: 0.25,

        ease: "back.out(1.7)"
    });


    gsap.from(".circle-line .line", {
        scrollTrigger: {
            trigger: ".circle-line",
            start: "top 70%",
        },

        scaleY: 0,

        transformOrigin: "top",

        duration: 0.7,

        stagger: 0.2,

        ease: "power2.out"
    });


    gsap.from(".aboutDetails > div", {
        scrollTrigger: {
            trigger: ".aboutDetails",
            start: "top 75%",
        },

        x: -60,
        opacity: 0,

        duration: 0.7,

        stagger: 0.2,

        ease: "power3.out"
    });


    gsap.from(".rightAbout .Card", {
        scrollTrigger: {
            trigger: ".rightAbout",
            start: "top 75%",
        },

        x: 70,
        opacity: 0,

        duration: 0.8,

        stagger: 0.2,

        ease: "power3.out"
    });


    /* =========================
       PROJECTS
    ========================= */

    gsap.from(".projectsHeading", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 75%",
        },

        y: 60,
        opacity: 0,

        duration: 0.9,

        ease: "power3.out"
    });


    gsap.from(".projectsGrid .projectCard", {
        scrollTrigger: {
            trigger: ".projectsGrid",
            start: "top 75%",
        },

        y: 70,
        opacity: 0,
        scale: 0.95,

        duration: 0.7,

        stagger: 0.15,

        ease: "power3.out"
    });


    /* =========================
       REFRESH
    ========================= */

    ScrollTrigger.refresh();
};