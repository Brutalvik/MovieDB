import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Errorpage from "./components/404/Errorpage";
import classes from "./App.module.css";
import { headerActions } from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <header className={classes.wrapper}>
          <Header />
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
