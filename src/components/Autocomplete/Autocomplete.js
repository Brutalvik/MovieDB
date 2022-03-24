import React from "react";
import classes from "./Autocomplete.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showActions } from "../../store/showReducer";

const Autocomplete = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const suggestions = useSelector((state) => state.showReducer.results);
  const query = useSelector((state) => state.showReducer.search);
  const clicked = useSelector((state) => state.logicReducer.clicked);

  const handleSearchQuery = (selected) => {
    dispatch(showActions.setSelectedShow(selected));
    dispatch(showActions.setSearch(""));
    navigate("/results");
  };
  const getSuggestions = query
    ? suggestions?.map((suggestion) => {
        return (
          <p
            className={`${classes.suggestions} ${
              clicked ? classes.dark : classes.light
            }`}
            key={suggestion.id}
            onClick={() => handleSearchQuery(suggestion)}
          >
            {suggestion.media_type === "tv"
              ? suggestion.name
              : suggestion.original_title}
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
