import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store/store";

import TrendingMovies from "./Movies/TrendingMovies";

const Trending = () => {
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`${BASE_URL}trending/movie/day?${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch(headerActions.getTrendings(data.results)));
  }, [BASE_URL, API_KEY, dispatch]);

  return (
    <div>
      <TrendingMovies />
    </div>
  );
};

export default Trending;
