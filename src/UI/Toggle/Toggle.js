import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logicActions } from "../../store/logicReducer";
import classes from "./Toggle.module.css";

const Toggle = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.logicReducer.clicked);

  const toggleHandler = () => {
    dispatch(logicActions.toggle());
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
      <h4 className={classes.toggletext}>{clicked ? "Dark" : "Light"}</h4>
    </>
  );
};

export default Toggle;
