import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import Results from "./components/Results/Results";
import Player from "./components/Player/Player";
import Errorpage from "./components/404/Errorpage";
import classes from "./App.module.css";
import { movieActions } from "./store/movieReducer";
import { logicActions } from "./store/logicReducer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.logicReducer.clicked);
  const handleClick = () => {
    dispatch(movieActions.search(""));
  };

  const page = useSelector((state) => state.logicReducer.page);

  const BASE_URL = process.env.REACT_APP_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  //Fetch Movies
  React.useEffect(() => {
    fetch(
      `${BASE_URL}trending/movie/day?${API_KEY}&language=en-US&page=${page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(logicActions.setLoading(true));
        dispatch(movieActions.getTrendings(data.results));
        dispatch(logicActions.setLoading(false));
      });
  }, [BASE_URL, API_KEY, dispatch, page]);

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
          <Route path="/" element={<Movies />} />
          <Route path="/results" element={<Results />} />
          <Route path="/player" element={<Player />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
