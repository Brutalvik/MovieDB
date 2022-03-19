import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/movieReducer";

import TrendingMovies from "./Movies/TrendingMovies";

const Trending = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.logicReducer.page);
  const BASE_URL = process.env.REACT_APP_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(
      `${BASE_URL}trending/movie/day?${API_KEY}&language=en-US&page=${page}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch(movieActions.getTrendings(data.results)));
  }, [BASE_URL, API_KEY, dispatch, page]);

  return (
    <div>
      <TrendingMovies />
    </div>
  );
};

export default Trending;
