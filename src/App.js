import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import Results from "./components/Results/Results";
import Player from "./components/Player/Player";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
// import Errorpage from "./components/404/Errorpage";
// import ModalOverlay from "./UI/Modal/ModalOverlay";
import TV from "./components/TV/Tv";
import classes from "./App.module.css";
import { movieActions } from "./store/movieReducer";
import { fetchMovies } from "./store/movieActions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const clicked = useSelector((state) => state.logicReducer.clicked);
  const page = useSelector((state) => state.logicReducer.page);
  // const modal = useSelector((state) => state.logicReducer.modal);
  const handleClick = () => {
    dispatch(movieActions.search(""));
  };

  const BASE_URL = process.env.REACT_APP_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  //Fetch Movies using thunk
  React.useEffect(() => {
    dispatch(fetchMovies(page));
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
          <Route path="/tv" element={<TV />} />
          <Route path="/results" element={<Results />} />
          <Route path="/player" element={<Player />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* {modal ? <Route path="/login" element={<ModalOverlay />} /> : null} */}
          {/* <Route path="/*" element={<Errorpage />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
