import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const menu = ["Home", "Movies", "TV", "Genres"];
  return (
    <ul className={classes.nav_container}>
      {menu.map((menuItem, index) => (
        <Link key={index} to={`/${menuItem}`}>
          <li>{menuItem}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Nav;
