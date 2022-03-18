import React from "react";
import classes from "./Autocomplete.module.css";
import { useSelector, useDispatch } from "react-redux";
import { headerActions } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Autocomplete = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const suggestions = useSelector((state) => state.headerReducer.results);
  const query = useSelector((state) => state.headerReducer.value);
  const clicked = useSelector((state) => state.headerReducer.clicked);

  const handleSearchQuery = (value) => {
    dispatch(headerActions.selectedSearch(value));
    dispatch(headerActions.search(""));
    navigate("/results");
  };
  const getSuggestions = query
    ? suggestions.map((suggestion) => {
        return (
          <p
            className={`${classes.suggestions} ${
              clicked ? classes.dark : classes.light
            }`}
            key={suggestion.id}
            onClick={() => handleSearchQuery(suggestion.id)}
          >
            {suggestion.original_title}
          </p>
        );
      })
    : null;

  return (
    <div
      className={`${classes.autocomplete} ${
        clicked ? classes.dark : classes.light
      }`}
    >
      {getSuggestions}
    </div>
  );
};

export default Autocomplete;
