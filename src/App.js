import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import Results from "./components/Results/Results";
import Player from "./components/Player/Player";
import classes from "./App.module.css";
import { showActions } from "./store/showReducer";
import { fetchMovies } from "./store/movieActions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.logicReducer.clicked);
  const page = useSelector((state) => state.logicReducer.page);
  // const modal = useSelector((state) => state.logicReducer.modal);
  const handleClick = () => {
    dispatch(showActions.setSearch(""));
  };

  //Fetch Movies using thunk
  React.useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
