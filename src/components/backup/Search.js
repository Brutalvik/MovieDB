import React, { useState, useContext, useEffect } from "react";
import classes from "./Search.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { SharedStore } from "../store/Store";

const Search = () => {
  const ctx = useContext(SharedStore);
  const autocomplete = ctx.searchdb.data;
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  useEffect(() => {
    ctx.getSearch(query);
  });

  return (
    <form className={classes.search_container} onSubmit={ctx.getSearchQuery}>
      <div>
        <Input
          className={classes.searchbar}
          type="search"
          value={query}
          onChange={handleChange}
        />
        <div className={classes.suggest}>
          {autocomplete
            .filter((suggestion) => suggestion.original_title === query)
            .map((filteredRes) => (
              <h5>{filteredRes.original_title}</h5>
            ))}
        </div>
      </div>
      <div>
        <Button text="Search" type="submit" className={classes.btn_search} />
      </div>
    </form>
  );
};

export default Search;
