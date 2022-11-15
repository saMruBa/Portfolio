import classes from "./About.module.scss";
import React from "react";
import about from "../../Images/about-2.png";
import { Element } from "react-scroll";

import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandBootstrap,
  TbBrandTailwind,
  TbBrandNextjs,
} from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { DiGit, DiSass } from "react-icons/di";
import { motion } from "framer-motion";

function About() {
  const variants = {
    offscreen: {
      y: 150,
      opacity: 0.4,
    },
    onscreen: {
      opacity: 1,
      y: 15,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
  };

  return (
    <Element className={classes.about} id="about">
      <motion.h2
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.div
        className={classes["about-content"]}
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div className={classes["about-image"]}>
          <img src={about} alt="" />
        </div>
        <div className={classes["about-text"]}>
          My name is{" "}
          <span className={classes.highlight}> Bhavani Bolloju </span>, i'm a
          self taught
          <span className={classes.highlight}> Front End Web Developer </span>
          with a passion for making beautiful, responsive websites. In free time
          i enjoy reading books, listening to music and watching anime. I'm
          looking for an opportunity to work as a front end web developer.
        </div>
      </motion.div>
      {/* skills */}

      <motion.h3
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        My skills
      </motion.h3>
      <motion.div
        className={classes["about-skills"]}
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <span className={classes.html}>
          <TbBrandHtml5 />
        </span>
        <span className={classes.css}>
          <TbBrandCss3 />
        </span>
        <span className={classes.js}>
          <TbBrandJavascript />
        </span>
        <span className={classes.bs}>
          <TbBrandBootstrap />
        </span>
        <span className={classes.tw}>
          <TbBrandTailwind />
        </span>
        <span className={classes.sass}>
          <DiSass />
        </span>
        <span className={classes.react}>
          <RiReactjsLine />
        </span>
        <span className={classes.typescript}>
          <SiTypescript />
        </span>
        <span className={classes.next}>
          <TbBrandNextjs />
        </span>
        <span className={classes.github}>
          <VscGithub />
        </span>
        <span className={classes.git}>
          <DiGit />
        </span>
      </motion.div>
      <div className={classes["custom-shape"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={classes["shape-fill"]}
          ></path>
        </svg>
      </div>
    </Element>
  );
}

export default About;
