import React, { useEffect } from "react";
import classes from "./Trending.module.css";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/movieReducer";
import { tvActions } from "../../store/tvReducer";
import TrendingMovies from "../Movies/TrendingMovies";

const Trending = () => {
  const dispatch = useDispatch();
  const moviepage = useSelector((state) => state.logicReducer.moviepage);
  const tvpage = useSelector((state) => state.logicReducer.tvpage);
  const tv = useSelector((state) => state.tvReducer.selectedTv);

  const BASE_URL = process.env.REACT_APP_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  //Trending TV
  useEffect(() => {
    fetch(
      `${BASE_URL}trending/movie/day?${API_KEY}&language=en-US&page=${moviepage}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch(movieActions.getTrendings(data.results)));
  }, [BASE_URL, API_KEY, dispatch, moviepage]);

  //Trending TV
  useEffect(() => {
    fetch(
      `${BASE_URL}trending/tv/day?${API_KEY}&language=en-US&page=${tvpage}&adult=false`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch(tvActions.getTrendings(data.results)));
  }, [BASE_URL, API_KEY, dispatch, tvpage]);

  //Get Selected Tv
  useEffect(() => {
    fetch(`${BASE_URL}tv/${tv.id}?${API_KEY}&language=en-US`)
      .then((response, err) => {
        if (err) throw err;
        return response.json();
      })
      .then((data) => dispatch(tvActions.setSelectedtvShow(data)));
  });

  return (
    <div>
      <TrendingMovies />
    </div>
  );
};

export default Trending;
