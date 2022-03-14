import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store/store";

const Genres = (props) => {
  const dispatch = useDispatch();

  const BASE_URL = process.env.REACT_APP_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const GENRE_URL = BASE_URL + process.env.REACT_APP_GENRE_MOVIE + API_KEY;
  useEffect(() => {
    fetch(GENRE_URL)
      .then((response) => {
        return response.json();
      })
      .then((genre) => {
        const genreArray = [];
        genre.genres
          .filter((genre) => props.genre.includes(genre.id))
          .map((g) => genreArray.push(g));
        dispatch(headerActions.getGenres(genreArray));
      });
  }, [GENRE_URL, dispatch, props.genre]);

  return <></>;
};

export default Genres;
