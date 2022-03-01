import React from "react";
import classes from "./Search.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Search = () => {
  return (
    <form className={classes.search_container}>
      <div>
        <Input className={classes.searchbar} />
      </div>
      <div>
        <Button text="Search" className={classes.btn_search} />
      </div>
    </form>
  );
};

export default Search;
