import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logicActions } from "../../store/logicReducer";

const Nav = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.logicReducer.clicked);

  const handleClick = () => {
    dispatch(logicActions.setPage(1));
  };

  const dropdown = (
    <div class={`${classes.dropdown} ${clicked ? classes.dark : null}`}>
      <p>Trending</p>
      <p>Latest</p>
      <p>Popular</p>
    </div>
  );

  return (
    <ul className={classes.nav_container}>
      <Link
        className={`${classes.nav_links} ${
          !clicked ? classes.light : classes.dark
        }`}
        to={"/"}
        onClick={handleClick}
      >
        <li>Movies</li>
        {/* {dropdown} */}
      </Link>
      <Link
        className={`${classes.nav_links} ${
          !clicked ? classes.light : classes.dark
        }`}
        to={`/tv`}
        onClick={handleClick}
      >
        <li>TV</li>
      </Link>
    </ul>
  );
};

export default Nav;
