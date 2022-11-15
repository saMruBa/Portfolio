import React from "react";
import classes from "./HeaderNav.module.scss";
import logo from "../../Images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

function HeaderNav() {
  return (
    <div className={classes.nav}>
      <div className={classes["nav-logo"]} onClick={() => scroll.scrollToTop()}>
        <img src={logo} alt="" />
      </div>
      <ul className={classes["nav-links"]}>
        <li>
          <Link to="about" smooth={true} duration={1500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={1500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderNav;
