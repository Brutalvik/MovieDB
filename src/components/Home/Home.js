import React from "react";
import classes from "./Home.module.css";

import Results from "../Results/Results";

const Home = () => {
  return (
    <div className={classes.main_container}>
      <Results />
    </div>
  );
};

export default Home;
