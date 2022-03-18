import React from "react";
import Input from "../../UI/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store/store";

const Searchbar = () => {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.headerReducer.value);

  const handleSearchQuery = (event) => {
    event.preventDefault();
    dispatch(headerActions.search(event.target.value));
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
