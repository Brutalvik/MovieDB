import React from "react";
import Input from "../../UI/Input/Input";
import { useDispatch } from "react-redux";
import { headerActions } from "../../store/store";

const Searchbar = () => {
  const dispatch = useDispatch();

  const handleSearchQuery = (event) => {
    event.preventDefault();
    dispatch(headerActions.search(event.target.value));
  };
  return (
    <>
      <Input type="search" onChange={handleSearchQuery} />
    </>
  );
};

export default Searchbar;
