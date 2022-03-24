import React from "react";
import Input from "../../UI/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { showActions } from "../../store/showReducer";

const Searchbar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.showReducer.search);

  const handleSearchQuery = (event) => {
    dispatch(showActions.setSearch(event.target.value));
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
