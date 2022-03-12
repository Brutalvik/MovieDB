import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Toggle.module.css";

const Toggle = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.clicked);

  const toggleHandler = () => {
    dispatch({ type: "clicked" });
  };
  return (
    <>
      <div
        className={`${classes.toggle_container} ${
          !clicked ? classes.light : classes.dark
        }`}
      >
        <div
          onClick={toggleHandler}
          className={`${classes.toggle_button} ${
            clicked ? classes.right : classes.left
          }`}
        ></div>
      </div>
      <h4 className={classes.toggletext}>Toggle Mode</h4>
    </>
  );
};

export default Toggle;