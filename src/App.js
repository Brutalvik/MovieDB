import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Results from "./components/Results/Results";
import Player from "./components/Player/Player";
import Errorpage from "./components/404/Errorpage";
import classes from "./App.module.css";
import { movieActions } from "./store/movieReducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.logicReducer.clicked);
  const handleClick = () => {
    dispatch(movieActions.search(""));
  };
  return (
    <div
      className={`${classes.main} ${!clicked ? classes.light : classes.dark}`}
      onClick={handleClick}
    >
      <Router>
        <header className={classes.wrapper}>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/player" element={<Player />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
