import React from "react";
import classes from "./Home.module.css";

import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Trending Movies</h1>
      </div>
      <div className={classes.trendingmovies}>
        <Trending />
      </div>
    </div>
  );
};

export default Home;
