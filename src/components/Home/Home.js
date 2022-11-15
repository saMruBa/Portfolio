/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import classes from "./Home.module.scss";
import programmer from "../../Images/group-logo.png";
import { FiDownload } from "react-icons/fi";
import resumeDoc from "../../Images/bhavani-resume.pdf";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

function Home() {
  const variants = {
    hidden: {
      opacity: 0,
      x: 100,
    },

    hidden1: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 2,
      },
    },
  };

  const btnVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 2,
      },
    },
  };

  const nameVariant = {
    start: {
      x: "50%",
      // transform: { scale: 1.3, translateX: 100 },
    },

    end: {
      x: 0,
      // transform: { scale: 1, translateX: 2 },
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  return (
    <Element className={classes.home}>
      <div className={classes.top}>
        <div className={classes.intro}>
          <motion.div
            variants={variants}
            initial="hidden1"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className={classes.hello}>Hello, </span>
            <span className={classes.myName}>My name is</span>
          </motion.div>
          <motion.div
            variants={nameVariant}
            initial="start"
            whileInView="end"
            className={classes.name}
            viewport={{ once: true }}
          >
            Bhavani Bolloju
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            variants={variants}
            initial="hidden1"
            whileInView="show"
            className={classes.designation}
          >
            A Front End Web Developer
          </motion.div>
          <motion.a
            viewport={{ once: true }}
            variants={btnVariant}
            initial="hidden"
            whileInView="show"
            href={resumeDoc}
            download="MyExampleDoc"
            target="_blank"
            className={classes.resume}
            // rel="noreferrer"
          >
            <span>Download Resume</span>
            <FiDownload />
          </motion.a>
        </div>

        <motion.img
          variants={variants}
          initial="hidden"
          whileInView="show"
          src={programmer}
          alt="image-programmer"
          viewport={{ once: true }}
        />
      </div>
      <div className={classes["shape-divider-bottom"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={classes["shape-fill"]}
          ></path>
        </svg>
      </div>
    </Element>
  );
}

export default Home;
