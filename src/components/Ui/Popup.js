import React from "react";
import classes from "./Popup.module.scss";
import { ImCancelCircle } from "react-icons/im";

function Popup(props) {
  return (
    <div className={classes.popup}>
      <div>{props.text}</div>
      <ImCancelCircle onClick={props.onClose} />
      <div className={classes.backdrop} />
    </div>
  );
}

export default Popup;
