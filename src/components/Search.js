import React, { useState, useContext } from "react";
import classes from "./Search.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { SharedStore } from "../store/Store";

const Search = () => {
  const ctx = useContext(SharedStore);
  const [searchTerm, setSearchTerm] = useState({ text: "" });
  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm((prevState) => {
      return { ...prevState, text: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.searchdb(searchTerm.text);
  };
  return (
    <form className={classes.search_container} onSubmit={handleSubmit}>
      <div>
        <Input
          className={classes.searchbar}
          value={searchTerm.text}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button text="Search" type="submit" className={classes.btn_search} />
      </div>
    </form>
  );
};

export default Search;
