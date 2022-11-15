import React from "react";
import classes from "./Projects.module.scss";
import notemaking from "../../Images/notemaking.png";
import notemakingMobile from "../../Images/notemaking-mobile.png";
import recipe from "../../Images/recipe.png";
import recipeMobile1 from "../../Images/recipe-mobile-1.png";
import quotes from "../../Images/quotes.png";
import quotesMobile from "../../Images/quotes-mobile.png";
import todos from "../../Images/todos.png";
import todosMobile from "../../Images/Todos-mobile.png";
import memory from "../../Images/memory.png";
import memoryMobile from "../../Images/memory-mobile.png";
import weather from "../../Images/weather.png";
import weatherMobile from "../../Images/weather-mobile.png";

import { TbBrandHtml5, TbBrandCss3, TbBrandTailwind } from "react-icons/tb";

import { RiReactjsLine } from "react-icons/ri";
import { DiSass } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

import { motion } from "framer-motion";
import { Element } from "react-scroll";

function Projects() {
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
    <Element className={classes.projects} id="projects">
      <motion.h2
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        Projects I have worked on
      </motion.h2>

      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className={`${classes.project} ${classes["project-1"]}`}
      >
        {/* Project - 1 */}
        <div className={classes["project__info"]}>
          <h3>01. Note Taking App</h3>
          <p>
            Responsive note taking WebApp, allows to add and delete notes,
            change the theme using toggle button.
          </p>
          <div className={classes.icons}>
            <TbBrandCss3 />
            <TbBrandHtml5 />
            <RiReactjsLine />
          </div>
          <div className={classes.btns}>
            <a
              href="https://note-making-8a976.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Open Live
            </a>
            <a
              href="https://github.com/saMruBa/Note-Taking-App"
              target="_blank"
              rel="noreferrer"
            >
              Open in GitHub
            </a>
          </div>
        </div>
        <div className={classes["project__images"]}>
          <div className={classes.desktop}>
            <img src={notemaking} alt="" className={classes.image} />
          </div>
          <div className={classes.mobile}>
            <img src={notemakingMobile} alt="" className={classes.image} />
          </div>
        </div>
      </motion.div>

      {/* project - 2 */}
      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className={`${classes.project} ${classes["project-2"]}`}
      >
        <div className={classes["project__info"]}>
          <h3>02. Recipe </h3>
          <p>
            Recipe is a single page application created using React Js. Renders
            different kinds of popular and vegetarian recipes. Each recipe gives
            detailed instructions and all ingredients needed to prepare each
            item.
          </p>
          <div className={classes.note}>
            Note: This application is created using spoonacular API and has
            restriction of making only 150 calls per day (1call/min). If calls
            to the Api exceeds 150, fething and rendering data fails.
          </div>
          <div className={classes.icons}>
            <TbBrandCss3 />
            <TbBrandHtml5 />
            <RiReactjsLine />
          </div>
          <div className={classes.btns}>
            <a
              href="https://recipe-8cf96.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Open Live
            </a>
            <a
              href="https://github.com/saMruBa/Recipe-App"
              target="_blank"
              rel="noreferrer"
            >
              Open in GitHub
            </a>
          </div>
        </div>
        <div className={classes["project__images"]}>
          <div className={classes.desktop}>
            <img src={recipe} alt="" className={classes.image} />
          </div>
          <div className={classes.mobile}>
            <img src={recipeMobile1} alt="" className={classes.image} />
          </div>
        </div>
      </motion.div>

      {/* project - 3 */}
      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className={`${classes.project} ${classes["project-3"]}`}
      >
        <div className={classes["project__info"]}>
          <h3>03. Quotes </h3>
          <p>
            Quotes is a Single page application created using React js. It has
            features of adding new quote and comments to the respective quote,
            and rendering all quotes.
          </p>
          <div className={classes.icons}>
            <TbBrandCss3 />
            <TbBrandHtml5 />
            <RiReactjsLine />
          </div>
          <div className={classes.btns}>
            <a
              href="https://quotes-bb6b0.web.app/allQuotes"
              target="_blank"
              rel="noreferrer"
            >
              Open Live
            </a>
            <a
              href="https://github.com/saMruBa/Quotes"
              target="_blank"
              rel="noreferrer"
            >
              Open in GitHub
            </a>
          </div>
        </div>
        <div className={classes["project__images"]}>
          <div className={classes.desktop}>
            <img src={quotes} alt="" className={classes.image} />
          </div>
          <div className={classes.mobile}>
            <img src={quotesMobile} alt="" className={classes.image} />
          </div>
        </div>
      </motion.div>
      {/* project 4 */}
      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className={`${classes.project} ${classes["project-4"]}`}
      >
        <div className={classes["project__info"]}>
          <h3>04. Memory Game </h3>
          <p>
            Memory games created using React js, match the pair of cards until
            all the matching pairs are found.
          </p>
          <div className={classes.icons}>
            <TbBrandHtml5 />
            <TbBrandCss3 />
            <DiSass />
            <RiReactjsLine />
          </div>
          <div className={classes.btns}>
            <a
              href="https://memory---game.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Open Live
            </a>
            <a
              href="https://github.com/saMruBa/Memory-game/blob/master/README.md"
              target="_blank"
              rel="noreferrer"
            >
              Open in GitHub
            </a>
          </div>
        </div>
        <div className={classes["project__images"]}>
          <div className={classes.desktop}>
            <img src={memory} alt="" className={classes.image} />
          </div>
          <div className={classes.mobile}>
            <img src={memoryMobile} alt="" className={classes.image} />
          </div>
        </div>
      </motion.div>
      {/* project - 5 */}
      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className={`${classes.project} ${classes["project-5"]}`}
      >
        <div className={classes["project__info"]}>
          <h3>05. Todos </h3>
          <p>
            Responsive Todos app, allows user to pick a date and add new task,
            and check upon completion of the task.
          </p>
          <div className={classes.icons}>
            <TbBrandCss3 />
            <TbBrandHtml5 />
            <RiReactjsLine />
            <SiTypescript />
          </div>
          <div className={classes.btns}>
            <a
              href="https://todos-5deff.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Open Live
            </a>
            <a
              href="https://github.com/saMruBa/Todos"
              target="_blank"
              rel="noreferrer"
            >
              Open in GitHub
            </a>
          </div>
        </div>
        <div className={classes["project__images"]}>
          <div className={classes.desktop}>
            <img src={todos} alt="" className={classes.image} />
          </div>
          <div className={classes.mobile}>
            <img src={todosMobile} alt="" className={classes.image} />
          </div>
        </div>
      </motion.div>

      {/* Project -6 */}
      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className={`${classes.project} ${classes["project-6"]}`}
      >
        <div className={classes["project__info"]}>
          <h3>06. Weather App </h3>
          <p>
            Fully responsive Weather App that forecasts the live updates, of
            current, hourly and daily weather Details.
          </p>
          <div className={classes.icons}>
            <TbBrandHtml5 />
            <TbBrandCss3 />
            <TbBrandTailwind />
            <RiReactjsLine />
          </div>
          <div className={classes.btns}>
            <a
              href="https://user-authentication-e7794.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Open Live
            </a>
            <a
              href="https://github.com/saMruBa/Weather-App"
              target="_blank"
              rel="noreferrer"
            >
              Open in GitHub
            </a>
          </div>
        </div>
        <div className={classes["project__images"]}>
          <div className={classes.desktop}>
            <img src={weather} alt="" className={classes.image} />
          </div>
          <div className={classes.mobile}>
            <img src={weatherMobile} alt="" className={classes.image} />
          </div>
        </div>
      </motion.div>
    </Element>
  );
}

export default Projects;
