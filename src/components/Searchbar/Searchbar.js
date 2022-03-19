import React from "react";
import Input from "../../UI/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../store/movieReducer";

const Searchbar = () => {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.movieReducer.value);

  const handleSearchQuery = (event) => {
    dispatch(movieActions.search(event.target.value));
  };
  return (
    <>
      <Input
        placeholder="Search for Movies/TV"
        type="search"
        value={query}
        onChange={handleSearchQuery}
      />
    </>
  );
};

export default Searchbar;
