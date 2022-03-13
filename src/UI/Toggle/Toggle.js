import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { headerActions } from "../../store/store";
import classes from "./Toggle.module.css";

const Toggle = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.headerReducer.clicked);

  const toggleHandler = () => {
    dispatch(headerActions.toggle());
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
