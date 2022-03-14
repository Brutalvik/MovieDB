import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import classes from "./App.module.css";
import { headerActions } from "./store/store";

const App = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.headerReducer.clicked);
  const handleClick = () => {
    dispatch(headerActions.search(""));
  };
  return (
    <div
      className={`${classes.main} ${!clicked ? classes.light : classes.dark}`}
      onClick={handleClick}
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
