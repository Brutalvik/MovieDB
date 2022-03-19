import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const menu = ["Movies", "TV", "Genres"];
  const clicked = useSelector((state) => state.logicReducer.clicked);
  return (
    <ul className={classes.nav_container}>
      <Link
        className={`${classes.nav_links} ${
          !clicked ? classes.light : classes.dark
        }`}
        to={"/"}
      >
        <li>Home</li>
      </Link>
      {menu.map((menuItem, index) => (
        <Link
          className={`${classes.nav_links} ${
            !clicked ? classes.light : classes.dark
          }`}
          key={index}
          to={`/${menuItem}`}
        >
          <li>{menuItem}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Nav;
