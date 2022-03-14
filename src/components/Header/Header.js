import React, { useEffect } from "react";
import classes from "./Header.module.css";
import Toggle from "../../UI/Toggle/Toggle";
import Searchbar from "../Searchbar/Searchbar";
import Autocomplete from "../Autocomplete/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { headerActions } from "../../store/store";

const Header = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.headerReducer.value);
  const search = useSelector((state) => state.headerReducer.value);
  // const result = useSelector((state) => console.log(state));

  const BASE_URL = process.env.REACT_APP_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const SEARCH_MOVIE_ENDPOINT = process.env.REACT_APP_MOVIE_ENDPOINT;

  useEffect(() => {
    if (query) {
      fetch(
        `${BASE_URL}${SEARCH_MOVIE_ENDPOINT}${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch(headerActions.results(data.results));
        });
    }
  }, [BASE_URL, SEARCH_MOVIE_ENDPOINT, API_KEY, dispatch, query]);

  return (
    <div className={classes.header_container}>
      <div className={classes.logo}>
        <h1>MovieDB</h1>
      </div>
      <div></div>
      <div className={classes.search}>
        <Searchbar />
        {search ? <Autocomplete /> : null}
      </div>
      <div>
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
