import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import classes from "./App.module.css";

const App = () => {
  const clicked = useSelector((state) => state.headerReducer.clicked);
  return (
    <div
      className={`${classes.main} ${!clicked ? classes.light : classes.dark}`}
    >
      <header>
        <Header />
      </header>
      <main className={classes.wrapper}>
        <Home />
      </main>
    </div>
  );
};

export default App;
