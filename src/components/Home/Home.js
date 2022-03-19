import React from "react";
import classes from "./Home.module.css";

import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div className={classes.trendingmovies}>
      <Trending />
    </div>
  );
};

export default Home;
